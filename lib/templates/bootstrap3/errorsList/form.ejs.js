Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<p>' +
((__t = (ctx.t('error'))) == null ? '' : __t) +
'</p>\r\n<ul>\r\n  ';
 ctx.errors.forEach(function(err) { ;
__p += '\r\n    <li\r\n      data-component-key = "' +
((__t = (err.keyOrPath)) == null ? '' : __t) +
'"\r\n      aria-label = "' +
((__t = (err.message)) == null ? '' : __t) +
'. ' +
((__t = (ctx.t('errorsListNavigationMessage'))) == null ? '' : __t) +
'"\r\n      ref = "errorRef"\r\n      tabIndex = "0",\r\n      style = "cursor:pointer;"\r\n    ><span>' +
((__t = (err.message)) == null ? '' : __t) +
'</span></li>\r\n  ';
 }) ;
__p += '\r\n</ul>\r\n';
return __p
}