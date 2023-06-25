/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('assects/images/marketing-bg6.png')",
                'appDevelopment': "url('assects/images/app-development.jpg')",
                'certificateImage': "url('assects/images/watermark.jpg')",
                'homeBanner': "url('assects/images/bg-image.png')",
                'homeBanner2': "url('assects/images/meeting.jpg')",
                'drowing': "url('assects/images/drowing.PNG')",
                'app-learing': "url('dist/iamges/marketing-bg6.png')"
            }
        }
    },
    plugins: []
}
