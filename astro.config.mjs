// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://salmon-data-mobilization.github.io',
	base: '/salmon-ontology-hub/',
	integrations: [
		starlight({
			title: 'Salmon Ontology Hub',
			description: 'Documentation and community hub for the Salmon Domain Ontology.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/salmon-data-mobilization/salmon-ontology-hub',
				},
			],
			editLink: {
				baseUrl:
					'https://github.com/salmon-data-mobilization/salmon-ontology-hub/edit/main/',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Overview', slug: '' },
						{ label: 'Getting started', slug: 'getting-started' },
					],
				},
				{
					label: 'Ontology',
					items: [{ label: 'Ontology overview', slug: 'ontology' }],
				},
				{
					label: 'Community',
					items: [
						{ label: 'Contributing', slug: 'contributing' },
						{ label: 'Governance', slug: 'governance' },
					],
				},
			],
		}),
	],
});
