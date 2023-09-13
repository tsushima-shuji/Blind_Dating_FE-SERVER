/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      nightRider: '#353131',
      white: '#FFFFFF',
      whiteSmoke: '#F3F3F3' /* */,
      whiteLilac: '#E8E6EA' /* input border, */,
      redAmaranth: '#E94057' /* basic red */,
      graySlate: '#505965' /* tag text */,
      grayLignt: '#d9d9d9' /* progress bar bg*/,
      grayIsh: '#828693' /* explain text */,
      labelColor: 'rgba(0, 0, 0, 0.40)' /* input label */,
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
      Lobster: ['Lobster', 'sans-serif'],
      NotoSans: ['Noto Sans', 'sans-serif'],
      Lora: ['Lora Variable', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.625rem', '1rem'] /* 10px */,
      ss: ['0.688rem', '1.125rem'] /* 11px */,
      s: ['0.75rem', '1.125rem'] /* 12px */,
      sm: ['0.875rem', '1.25rem'] /* 14px */,
      base: ['1rem', '1.5rem'] /* 16px */,
      lg: ['1.125rem', '1.75rem'] /* 18px */,
      xl: ['1.25rem', '1.875rem'] /* 20px */,
      '2xl': ['2.125rem', '3.125rem'] /* 32px*/,
      '3xl': ['2.25rem', '3.375rem'] /* 36px*/,
      '8xl': ['6rem', '1'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px',
      },
      boxShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
