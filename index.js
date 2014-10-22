module.exports = function (resultPath) {
  if (!resultPath) {
    throw Error('gulp-bundle-assets-express-middleware:', 'bundle.result.json path is required');
  }
  return function (req, res, next) {
    var oldRender = res.render;
    // for each request, wrap the render function so that we can execute our own code
    res.render = function (viewName, options, cb) {
      res.locals.bundle = require(resultPath);
      oldRender.call(res, viewName, options, cb);
    };
    next();
  };
};