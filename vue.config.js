module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: "/",
  devServer: {
    proxy: 'http://localhost:8080',
    public: '127.0.0.1:8080',
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Login Register'
    }
  }
}