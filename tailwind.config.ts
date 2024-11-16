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
				aqua: '#def7fe',
				blue: '#1f90ff',
				pink: '#fac6dd',
				orange: '#faa526',
				black: '#050326',
				gray: '#363551',
				'snow-white': '#f5f8fd',
				'crystal-blue': '#d9ebfd',
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
