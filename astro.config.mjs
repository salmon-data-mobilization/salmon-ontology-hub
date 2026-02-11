// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://salmon-data-mobilization.github.io',
	base: '/salmon-ontology-hub/',
	integrations: [
		mermaid({
			theme: 'neutral',
		}),
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
					label: 'Start here',
					items: [{ label: 'Overview', slug: '' }],
				},
				{
					label: 'Frameworks',
					items: [
						{ label: 'Alignment framework', slug: 'alignment-framework' },
						{ label: 'Dataset modeling', slug: 'dataset-modeling' },
					],
				},
				{
					label: 'Working Group',
					items: [{ label: 'Working group', slug: 'working-group' }],
				},
				{
					label: 'Resources',
					items: [{ label: 'Resources', slug: 'resources' }],
				},
			],
		}),
	],
});
