Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<p>' +
((__t = (ctx.t('error'))) == null ? '' : __t) +
'</p>\n<ul>\n  ';
 ctx.errors.forEach(function(err) { ;
__p += '\n    <li\n      data-component-key = "' +
((__t = (err.keyOrPath)) == null ? '' : __t) +
'"\n      aria-label = "' +
((__t = (err.message)) == null ? '' : __t) +
'. ' +
((__t = (ctx.t('errorsListNavigationMessage'))) == null ? '' : __t) +
'"\n      ref = "errorRef"\n      tabIndex = "0",\n      style = "cursor:pointer;"\n    ><span>' +
((__t = (err.message)) == null ? '' : __t) +
'</span></li>\n  ';
 }) ;
__p += '\n</ul>\n';
return __p
}