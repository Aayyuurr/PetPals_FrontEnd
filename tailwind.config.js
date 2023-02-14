/** @type {import('tailwindcss').Config} */
module.exports = {
	// add dark mode

	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,svg}'],
	theme: {
		extend: {},
		fontFamily: {
			satoshi: ['Satoshi', 'sans-serif'],
			clashDisplay: ['ClashDisplay', 'sans-serif'],
		},
	},
	plugins: [],
};
