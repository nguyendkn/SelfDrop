const plugin = require('tailwindcss/plugin');

module.exports = {
  enable:
    process.env.NODE_ENV === 'production' ||
    [' build', ':build'].some((command) =>
      process.argv.join(' ').toLowerCase().includes(command)
    ),
  content: ['./apps/**/*.{html,scss,ts}', './libs/**/*.{html,scss,ts}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addVariant }) {
      addVariant('second-last', '&:nth-last-child(2)');
    }),
  ],
  theme: {
    extend: {
      colors: {
        main: 'rgba(0, 97, 193, 1)',
        'main-clear': 'rgba(0, 97, 193, 0.2)',
        'main-dark': 'rgba(0, 80, 159, 1)',
        gray3: 'rgba(130, 130, 130, 1)',
      },
      spacing: {
        '64px': '64px',
      },
    },
  },
  important: true,
};