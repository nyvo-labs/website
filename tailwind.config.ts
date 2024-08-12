import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},

		fontFamily: {
			sans: ['Readex Pro Variable', 'sans-serif', 'Noto Color Emoji'],
		}
	},

	plugins: [typography]
} as Config;
