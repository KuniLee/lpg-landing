module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/lpg-landing/' : '/',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/variables.scss"; `,
      },
    },
  },
}
