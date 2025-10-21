Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<p>' +
((__t = (ctx.t('error'))) == null ? '' : __t) +
'\r\n  ';
 if (ctx.options.vpat) { ;
__p += '\r\n  <span ref="errorTooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
'" tabindex="0"></span>\r\n  ';
 } ;
__p += '\r\n</p>\r\n<ul>\r\n  ';
 ctx.errors.forEach(function(err) { ;
__p += '\r\n  <li>\r\n    <span\r\n      data-component-key = "' +
((__t = (err.keyOrPath)) == null ? '' : __t) +
'"\r\n      ref = "errorRef"\r\n      tabIndex = "0"\r\n      role="link"\r\n    >\r\n      ' +
((__t = (err.message)) == null ? '' : __t) +
'\r\n    </span>\r\n  </li>\r\n  ';
 }) ;
__p += '\r\n</ul>\r\n';
return __p
}