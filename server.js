//Adding a Development Server
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.development.config')
var path = require('path')
var Express = require('express')


var app = new Express()
var port = 9000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}))
app.use(webpackHotMiddleware(compiler))
delete process.env.BROWSER;


app.get('/dist/main.css', function (req, res) {
<<<<<<< HEAD
  res.sendFile(path.join(__dirname, '/public/main.css'))
<<<<<<< HEAD
});
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'index.html'))
=======
>>>>>>> 0682ab1d8e6fc138e5b860eb0bddba7aaf553a01
=======
  res.sendFile(path.join(__dirname, '/dist/main.css'))
>>>>>>> d291b46bd59abc3a09a4e7551fb86f360a016c9a
});

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
