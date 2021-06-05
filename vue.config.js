module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader")
      .tap(() => {
        return {
          name: "files/[name].[hash:8].[ext]",
        };
      });
  },
};
