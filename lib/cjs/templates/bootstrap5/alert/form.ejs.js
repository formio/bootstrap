Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div\r\n  ';
 for (var attr in ctx.attrs) { ;
__p += '\r\n    ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.attrs[attr])) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n>\r\n  ' +
((__t = (ctx.message)) == null ? '' : __t) +
'\r\n  ';
 if (ctx.options.vpat) { ;
__p += '\r\n    <span class="visually-hidden" id="hotkey-i-' +
((__t = (ctx.form._id)) == null ? '' : __t) +
'">' +
((__t = (ctx.t('errorListHotkey'))) == null ? '' : __t) +
'</span>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}