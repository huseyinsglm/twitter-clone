module.exports = {
    purge: [
        "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    base: "hsl(203, 89%, 53%)",
                    dark: "hsl(203, 89%, 46%)",
                    light: "hsl(203, 89%, 96%)"
                },
                gray: {
                    dark: "#657786",
                    light: "#AAB8C2",
                    extraLight: "#E1E8ED",
                    lightes: "#F5F8FA",
                },
                black: "#14171A",
            },
        },
    },
    variant: {
        extend: {},
    },
    plugins: [],
};
