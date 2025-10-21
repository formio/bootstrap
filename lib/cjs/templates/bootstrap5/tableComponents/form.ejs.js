Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 ctx.children.forEach(function(component) { ;
__p += '\r\n  <td class="editgrid-table-column">\r\n    ' +
((__t = ( component )) == null ? '' : __t) +
'\r\n  </td>\r\n';
 }) ;
__p += '\r\n';
return __p
}