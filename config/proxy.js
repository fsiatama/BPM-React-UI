/**
 * In the production environment, the proxy cannot take effect, so there is no production environment configuration here
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://172.17.32.1:3000/v1',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  test: {
    '/api/': {
      target: 'http://172.17.32.1:3000/v1',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'http://172.17.32.1:3000/v1',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
};
