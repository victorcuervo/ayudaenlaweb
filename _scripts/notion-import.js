const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const moment = require('moment');
const path = require('path');
const fs = require('fs');

// or
// import {NotionToMarkdown} from "notion-to-md";

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {


	const databaseId = process.env.DATABASE_ID;
	// TODO has_more
	const hoy = moment().format("YYYY-MM-DD")
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			"and": [
				{
					"property": "Estado",
					"status": {
						"equals": "Published"
					}
				},
				{
					"property": "Last Date",
					"date": {
						"on_or_before": hoy
					}

				}
			]			
		}
	})
	for (const r of response.results) {
		console.log(r)
		const id = r.id


		// date
		let date = moment(r.created_time).format("YYYY-MM-DD")
		let pdate = r.properties?.['Date']?.['date']?.['start']
		if (pdate) {
			date = moment(pdate).format('YYYY-MM-DD')
        }
        
		// date
		let lastdate = moment(r.created_time).format("YYYY-MM-DD")
		let plastdate = r.properties?.['Last Date']?.['date']?.['start']
		if (plastdate) {
			lastdate = moment(plastdate).format('YYYY-MM-DD')
		}
        
		// title
		let title = id
		let ptitle = r.properties?.['Name']?.['title']
		if (ptitle?.length > 0) {
			title = ptitle[0]?.['plain_text']
		}
		
		// excerpt
		let excerpt = id
		let pexcerpt = r.properties?.['Excerpt']?.['rich_text']
		if (pexcerpt?.length > 0) {
			excerpt = pexcerpt.map(text => text?.['plain_text']).join('')
		}
        
		// tags
		let tags = []
		let pelementos = r.properties?.['Tags']?.['multi_select']
		for (const t of pelementos) {
			const n = t?.['name']
			if (n) {
				tags.push(n.toLowerCase())
			}
        }

        let t = '[' + tags.toString() + ']'

        // Categoría
       let cat = ''
       let pcats = r.properties?.['Category']?.['multi_select']
       cat = pcats[0]?.['name']
	   // Quitamos espacios en blanco
	   cat = cat.replace(" ","-");

       let nav = cat.toLowerCase();

		// Slug
		let slug = ''
		let pslug = r.properties?.['Slug']?.['formula']
		slug = pslug?.['string']

		// image
		let image= id
		let pimage = r.properties?.['Image']?.['rich_text']
		if (pimage?.length > 0) {
			image = pimage[0]?.['plain_text']
		}

		// image
		let imageAutor= id
		let pimageAutor = r.properties?.['ImageAutor']?.['rich_text']
		if (pimageAutor?.length > 0) {
			imageAutor = pimageAutor[0]?.['plain_text']
		}

		// image
		let imageLink= id
		let pimageLink = r.properties?.['ImageLink']?.['rich_text']
		if (pimageLink?.length > 0) {
			imageLink = pimageLink[0]?.['plain_text']
		}		

        
let fm = `---
layout: post
title: ${title}
excerpt: ${excerpt}
categories: ${cat}
tags: ${t}
last_modified_at: ${lastdate}
image:
  path: /images/${image}
  thumbnail: /images/${image}
  caption: Fotografía de [${imageAutor}](${imageLink})
comments: true
share: true
author: victor_cuervo
---
`
		const mdblocks = await n2m.pageToMarkdown(id);
        const md = n2m.toMarkdownString(mdblocks);

		console.log(md)

        // ensure directory exists
	    const root = path.join('_posts', nav)
	    fs.mkdirSync(root, { recursive: true })

		//writing to file
		const ftitle = `${date}-${slug}.md`
		fs.writeFile(path.join(root, ftitle), fm + md.parent, (err) => {
			if (err) {
				console.log(err);
			}
		});
	}
})();