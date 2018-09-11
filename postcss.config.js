module.exports = {
  plugins: [
     require('autoprefixer')({
       browsers: [
         "last 5 versions",
         "not ie < 11",
         "ios >= 7",
         "android >= 4.0"
       ]
     }),
     require('cssnano')
  ]
}
