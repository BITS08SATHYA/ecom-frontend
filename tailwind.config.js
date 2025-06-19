/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customBlue: "rgba(28,100,242,1)",
                banner: {
                    color1: "#FDC200",
                    color2: "#FF2C2C",
                    color3: "#21AD61",
                    color4: "#723DA6",
                }
            }
        },
    },
    plugins: [],
};
