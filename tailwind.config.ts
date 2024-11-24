import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				body: '#212529',
				heading: '#2d465e',
				blue: '#0d83fd',
				light: '#f3f9ff',
				'light-blue': '#b6d9fe',
			},

			boxShadow: {
				xl: 'inset 0 0 0 4px #ba9cff',
				'2xl': '0 0 0 8px rgba(255,255,255,0.5)',
				'3xl': '0 0 0 20px rgba(255,255,255,0.8)',
				'4xl': '0 0 0 8px rgba(173, 203, 255,0.2)',
			},
		},

		screens: {
			xs: '0px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
		},

		fontFamily: {
			heading: ['Poppins', 'sans-serif'],
			body: ['Quicksand', 'sans-serif'],
		},
	},
	plugins: [],
} satisfies Config;
