Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="panel panel-' +
((__t = (ctx.component.theme)) == null ? '' : __t) +
'">\n  ';
 if (!ctx.component.hideLabel || ctx.builder || ctx.component.collapsible || ctx.component.tooltip) { ;
__p += '\n  <div class="panel-heading"\n    ';
 if (ctx.component.collapsible) { ;
__p += '\n    tabindex="0"\n    ';
 } ;
__p += '\n    role="button"\n    aria-expanded="' +
((__t = (ctx.component.collapsible ? !ctx.collapsed : true)) == null ? '' : __t) +
'"\n    aria-controls="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    ref="header"\n  >\n    <h4 class="mb-0 panel-title">\n      ';
 if (ctx.component.collapsible) { ;
__p += '\n        <i class="formio-collapse-icon ' +
((__t = (ctx.iconClass(ctx.collapsed ? 'plus' : 'minus'))) == null ? '' : __t) +
' text-muted" data-title="Collapse Panel"></i>\n      ';
 } ;
__p += '\n      ';
 if (!ctx.component.hideLabel || ctx.builder) { ;
__p += '\n      ' +
((__t = (ctx.t(ctx.component.title, { _userInput: true }))) == null ? '' : __t) +
'\n      ';
 } ;
__p += '\n      ';
 if (ctx.component.tooltip) { ;
__p += '\n        <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\n      ';
 } ;
__p += '\n    </h4>\n  </div>\n  ';
 } ;
__p += '\n  ';
 if (!ctx.collapsed || ctx.builder) { ;
__p += '\n  <div class="panel-body" ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}