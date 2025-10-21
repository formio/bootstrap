export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 ctx.component.columns.forEach(function(column, index) { ;
__p += '\r\n<div class="col-' +
((__t = (column.size)) == null ? '' : __t) +
'-' +
((__t = (column.currentWidth)) == null ? '' : __t) +
'\r\n    offset-' +
((__t = (column.size)) == null ? '' : __t) +
'-' +
((__t = (column.offset)) == null ? '' : __t) +
'"\r\n    ref="' +
((__t = (ctx.columnKey)) == null ? '' : __t) +
'">\r\n  ' +
((__t = (ctx.columnComponents[index])) == null ? '' : __t) +
'\r\n</div>\r\n';
 }) ;

return __p
}