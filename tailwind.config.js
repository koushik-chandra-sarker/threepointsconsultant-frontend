module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
        container: {
            screens: {
                'sm': '100%',
                'md': '100%',
                'lg': '1424px',
                'xl': '1680px',
                '2xl': '1900px',
            },
            padding: '2rem',
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            roman: 'upper-roman'
        }

    },
    plugins: [
        require('tw-elements/dist/plugin')
    ]
}
