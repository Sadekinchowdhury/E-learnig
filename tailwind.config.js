/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('assects/images/marketing-bg6.png')",
                'appDevelopment': "url('assects/images/app-development.jpg')",
                'certificateImage': "url('assects/images/watermark.jpg')",
                'homeBanner': "url('assects/images/bg-image.png')",
                'returnPolicy': "url('assects/images/return-policy.jpeg')",
                'privacyPolicy': "url('assects/images/19965637_6186698.jpg')",
                'aboutUs': "url('assects/images/blue-abstract-gradient-wave-wallpaper.jpg')",
                'support': "url('assects/images/Parallels-Support.png')",
                'drowing': "url('assects/images/drowing.PNG')",
                'app-learing': "url('dist/iamges/marketing-bg6.png')"
            }
        }
    },
    plugins: [require("daisyui")],
}
