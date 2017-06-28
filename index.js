var svg = require('svgo');

var svgo = new svg({
  plugins: ['removeDoctype', 'removeComments', 'removeStyleElement', 'removeScriptElement'],
});

module.exports = function (content) {
  this.cacheable && this.cacheable(true);
  this.addDependency(this.resourcePath);

  var cb = this.async();

  svgo.optimize(content).then(function (result) {
    if (result.error) {
      return cb(result.error);
    }
    cb(null, "module.exports = {template: '" + result.data + "'};");
  });
};
