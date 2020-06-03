Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="panel panel-' +
((__t = (ctx.component.theme)) == null ? '' : __t) +
'">\r\n  <div class="panel-heading" ref="header">\r\n    <h4 class="mb-0 panel-title">\r\n      ';
 if (ctx.component.collapsible) { ;
__p += '\r\n        <i class="formio-collapse-icon ' +
((__t = (ctx.iconClass(ctx.collapsed ? 'plus' : 'minus'))) == null ? '' : __t) +
' text-muted" data-title="Collapse Panel"></i>\r\n      ';
 } ;
__p += '\r\n      ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\r\n      ';
 if (ctx.component.tooltip) { ;
__p += '\r\n        <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted"></i>\r\n      ';
 } ;
__p += '\r\n    </h4>\r\n  </div>\r\n  ';
 if (!ctx.collapsed || ctx.builder) { ;
__p += '\r\n  <div class="panel-body" ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\r\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\r\n  </div>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}