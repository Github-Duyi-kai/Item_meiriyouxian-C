const px2rem = require('postcss-px2rem');
// 将css的px自动转换成rem的配置
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5,
          }),
        ],
      },
    },

  },
};
