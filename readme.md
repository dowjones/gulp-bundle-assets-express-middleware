# gulp-bundle-assets-express-middleware

> [Express](http://expressjs.com/) middleware for [gulp-bundle-assets](https://github.com/areusjs/gulp-bundle-assets)

## Install

```bash
npm install --save gulp-bundle-assets-express-middleware
```

## Usage

```js
var browserify = require('gulp-bundle-assets-express-middleware');
var express = require('express');
var app = express();

// configure "bundle" view object on every response to contain the contents of "bundle.result.json"
app.use(gulpBundleAssets());

app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

app.listen(3000);
```

[See here for a detailed explanation](examples/basic)

## License

[MIT](http://opensource.org/licenses/MIT)