module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/component-definition-name-casing': 'off',
    'no-console': 'off',
    'import/namespace': 'off',
    'object-shorthand': 'off',
    'vue/no-unused-vars': 'warn',
    'vue/valid-template-root': 'warn',
    'vue/require-v-for-key': 'warn',
    'require-await': 'warn',
  },
}
