/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './js/**/*.js'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}