export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'" class="' +
((__t = (ctx.classes)) == null ? '' : __t) +
'"';
 if (ctx.styles) { ;
__p += ' style="' +
((__t = (ctx.styles)) == null ? '' : __t) +
'"';
 } ;
__p += ' ref="component">\n  ';
 if (ctx.visible) { ;
__p += '\n  ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  <div ref="messageContainer"></div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}