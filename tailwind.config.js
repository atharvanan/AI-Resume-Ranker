module.exports = {
  content: ['./src/**/*.{js,jsx,html}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{ mytheme: {
      primary: '#0ea5e9',
      'primary-focus': '#0284c7',
      'primary-content': '#ffffff',
      secondary: '#ffffff',
      neutral: '#f0f9ff'
    }}],
  },
};
