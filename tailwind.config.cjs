/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
			  '12': '.75rem',
			  '14': '.875rem',
			  '16': '1rem',
			  '18': 'clamp(0.8rem, 3.2vw, 1.125rem)',
			  '20': 'clamp(1.1rem, 3.5vw, 1.25rem)',
			  '24': 'clamp(1.25rem, 4vw, 1.5rem)',
			  '28': 'clamp(1.4rem, 4.5vw, 1.75rem)',
			  '32': 'clamp(1.625rem, 5.2vw, 2rem)',
			  '36': 'clamp(1.7rem, 5.8vw, 2.25rem)',
			  '40': 'clamp(1.8rem, 6.5vw, 2.5rem)',
			  '48': 'clamp(1.875rem, 7vw, 3rem)',
			  '60': 'clamp(2rem, 8vw, 3.75rem)',
			  '76': 'clamp(2.25rem, 10vw, 4.75rem)',
			},
			fontFamily: {
				title: ['Raleway', 'sans-serif'],
				subtitle: ['Mandali', 'sans-serif'],
				text: ['Amiko', 'sans-serif'],
			},
			letterSpacing: {
				'4-5': '4.5px',
			},
			backgroundPosition: {
				'cero': '0 0',
			},
			backgroundSize: {
				'32': '32px',
				'28': '28px',
				'24': '24px',
				'16': '16px',
			},
			transitionDuration: {
				'0': '0ms',
				'2000': '2000ms', 
			},
			transform: ['hover', 'focus'],
			opacity: {
				'0': '0',
				'100': '1',
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
		  addUtilities({
			'.display-inherit': { display: 'inherit' },
		  })
		},
	  ],
}
