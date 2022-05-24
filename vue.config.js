module.exports = {
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/variables.scss"; `,
      },
    },
  },
}
