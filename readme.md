# gulp-bundle-assets-express-middleware

> [Express](http://expressjs.com/) middleware for [gulp-bundle-assets](https://github.com/areusjs/gulp-bundle-assets)

## Install

```bash
npm install --save gulp-bundle-assets-express-middleware
```

## Usage

```js
var gulpBundleAssets = require('gulp-bundle-assets-express-middleware');
var express = require('express');
var app = express();
// ... configure view engine

// configure "bundle" view property on every response
// to contain the contents of "bundle.result.json"
app.use(gulpBundleAssets());

app.get('/', function(req, res) {
  res.render('index', { title: 'My App' });
});

app.listen(3000);
```

[See here for a detailed explanation](examples/basic)

## API

#### `resultPath`

Type: `string`

Default: `<fully qualified path of file where call was made from>/bundle.result.json`
 
If your app is not in the same directory as your `bundle.result.json`, simply provide the fully qualified path to
its location, e.g.:
 
```js
app.use(gulpBundleAssets(path.join(__dirname, '../bundle.result.json')));
```

## License

[MIT](http://opensource.org/licenses/MIT)
