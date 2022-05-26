module.exports = {
  prefix: 'tw-',
  important: true,
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid'
  ],
  theme: {
    screens: {
      md: '750px',
      lg: '990px'
    }
  },
  plugins: []
}
