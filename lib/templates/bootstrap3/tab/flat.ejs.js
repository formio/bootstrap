Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 ctx.component.components.forEach(function(tab, index) { ;
__p += '\r\n  <div class="panel panel-default">\r\n    <div class="panel-heading">\r\n      <h4 class="panel-title">' +
((__t = ( ctx.t(tab.label) )) == null ? '' : __t) +
'</h4>\r\n    </div>\r\n    <div class="panel-body" ref="' +
((__t = (ctx.tabKey)) == null ? '' : __t) +
'">\r\n      ' +
((__t = ( ctx.tabComponents[index] )) == null ? '' : __t) +
'\r\n    </div>\r\n  </div>\r\n';
 }) ;
__p += '\r\n';
return __p
}