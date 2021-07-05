module.exports = {
  theme: {},
  variants: {},
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
