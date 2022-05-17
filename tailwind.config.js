module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'android': ['"Android 101"'],
      },
      colors:{
        'aDarkGray':'#3C3C3E',
        'aLightGray':'#595C63',
        'wStroke':'#B7182F',
        'wFill':'#111520',
        'aAccent':'#00E9EE',
        'aGradient2from':'#5F5EEB',
        'aGradient2to':'#5831C6',
        'aGradientFrom':'#00D3FC',
        'aGradientTo':'#728BEF',
        'aGrayText':'#B7B9BC',
        'mStroke':'#1AC0EF',
        'mBackground':'rgba(17,21,32,0.7)',
        'mGradientFrom':'#4C4BC2',
        'mGradientTo':'#43249A',
        'filterSelectedBg':'#4A49BF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
