var path = require('path');
var stack = require('callsite');

module.exports = function (resultPath) {
  if (!resultPath) {
    var requestor = stack()[1].getFileName();
    resultPath = path.join(path.dirname(requestor), 'bundle.result.json');
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