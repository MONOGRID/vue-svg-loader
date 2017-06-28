# vue-svg-loader
Forked from https://github.com/visualfanatic/vue-svg-loader and added the following options

- `removeTitle` 
- `removeXMLNS`
- `removeStyleElement`
- `removeScriptElement` 
- `removeDimensions` 

to svggo (https://github.com/svg/svgo) in order to avoid situations where an SVG produces an error when used as template in Vue.js
