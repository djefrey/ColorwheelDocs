// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Colorwheel Docs',
			logo: {
				src: '/src/assets/colorwheel.webp',
			},
			favicon: '/favicon.ico',
			customCss: [
				'/src/styles/root.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/djefrey/ColorwheelDocs' }],
			sidebar: [
				{
					label: 'What is ...',
					autogenerate: { directory: 'WhatIs' }
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'Reference' }
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'Guides' }
				},
			],
		}),
	],
});
