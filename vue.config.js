// cumstom webpack을 추가하기 위해선 vue.config.js 파일을 만들고 이곳에다가 plugin설정을 하면된다.
const configureWebpack = (config) => {
  if (process.env.NODE_ENV === 'production') {
    // mutate config for production...
  } else {
    // mutate for development...
  }
}

module.exports = {
  configureWebpack,
  devServer: {
    port: 10617
  }
}
