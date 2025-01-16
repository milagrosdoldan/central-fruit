import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            'phone': '0px',
            'tablet': '768px',
            'laptop': '1024px',
            'desktop': '1280px',

        },
        extend: {
            animation: {
                slideDown: 'slideDown 800ms ease-out',
                slideInFromRight: 'slideInFromRight 1s ease-out',
                slideUp: 'slideUp 1s ease-out',
                fadeSlide: 'fadeSlide 5s infinite',
                moveUpAndDown: 'moveUpAndDown 5s ease-in-out infinite'

            },
            keyframes: {
                fadeSlide: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '50%': { opacity: '1', transform: 'translateY(0)' },
                    '100%': { opacity: '0', transform: 'translateY(-20px)' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100vh)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInFromRight: {
                    '0%': {
                        transform: 'translateX(100%)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateX(0)',
                        opacity: '1',
                    },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100vh)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                moveUpAndDown: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0)' }
                }
            },
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
            },
            fontWeight: {
                superbold: '1000',
            },
            minHeight: {
                '100vh': '100vh',
            },
            colors: {
                primary: {
                    main: '#7bb234',
                    dark: '#476d1f',
                    light: '#7fbd43'
                },
                secondary: {
                    main: '#ff8800',
                    dark: '#085627',
                },
                common: {
                    primary: '#fff4e8'
                },
                text: {
                    primary: '#333333',
                    secondary: '#959594'
                }
            },

        },
    },
    plugins: [require('@tailwindcss/forms')],
};
export default config;
