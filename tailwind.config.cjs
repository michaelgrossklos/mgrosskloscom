/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue,html}'],
    theme: {
        extend: {
            invert: {
                63: '80%',
            },
            sepia: {
                46: '0',
            },
            saturate: {
                1165: '1165%',
            },
            hueRotate: {
                356: '356deg',
            },
            brightness: {
                98: '98%',
            },
            contrast: {
                95: '95%',
            },
            backgroundImage: {
                'hero-home': "url('/src/assets/bg-hero.png')",
                'warumich-home': "url('/src/assets/webdesign-michael-grossklos.png')",
                'hero-screencasts': "url('/src/assets/software-tutorials-screencasts.jpg')",
                'lizenzrecht-screencasts': "url('src/assets/lizenzrecht-videotutorials.jpg')",
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}