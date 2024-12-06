export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="form-check checkbox">\n  <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n      ref="input"\n      id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n      aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n      ';
 for (var attr in ctx.input.attr) { ;
__p += '\n      ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n      ';
 } ;
__p += '\n      ';
 if (ctx.checked) { ;
__p += 'checked=true';
 } ;
__p += '\n      aria-required="' +
((__t = (ctx.component.validate.required)) == null ? '' : __t) +
'"\n      ';
 if (ctx.component.description) { ;
__p += '\n      aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n      ';
 } ;
__p += '\n      >\n  ';
 if (!ctx.self.labelIsHidden()) { ;
__p += '\n    <label\n      class="' +
((__t = (ctx.input.labelClass)) == null ? '' : __t) +
' form-check-label"\n      for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n      id="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    >\n       <span>' +
((__t = (ctx.input.label)) == null ? '' : __t) +
'</span>\n    </label>\n  ';
 } ;
__p += '\n  ';
 if (ctx.component.tooltip) { ;
__p += '\n    <i ref="tooltip" tabindex="0" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}