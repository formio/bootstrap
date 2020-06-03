Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.component.prefix || ctx.component.suffix) { ;
__p += '\r\n<div class="input-group">\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.prefix) { ;
__p += '\r\n<div class="input-group-addon" ref="prefix">' +
((__t = (ctx.component.prefix)) == null ? '' : __t) +
'</div>\r\n';
 } ;
__p += '\r\n';
 if (!ctx.component.editor && !ctx.component.wysiwyg) { ;
__p += '\r\n<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n  ref="' +
((__t = (ctx.input.ref ? ctx.input.ref : 'input')) == null ? '' : __t) +
'"\r\n  ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n>' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.editor || ctx.component.wysiwyg) { ;
__p += '\r\n<div ref="input"></div>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.showCharCount) { ;
__p += '\r\n<span class="text-muted pull-right" ref="charcount"></span>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.showWordCount) { ;
__p += '\r\n<span class="text-muted pull-right" ref="wordcount"></span>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.suffix) { ;
__p += '\r\n<div class="input-group-addon" ref="suffix">' +
((__t = (ctx.component.suffix)) == null ? '' : __t) +
'</div>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.prefix || ctx.component.suffix) { ;
__p += '\r\n</div>\r\n';
 } ;
__p += '\r\n';
return __p
}