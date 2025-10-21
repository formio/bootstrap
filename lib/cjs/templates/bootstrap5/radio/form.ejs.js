Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div\r\n  class="form-radio radio"\r\n  ref="radioGroup"\r\n  role="' +
((__t = (ctx.component.type === 'selectboxes' ? 'group' : 'radiogroup')) == null ? '' : __t) +
'"\r\n  aria-required="' +
((__t = (ctx.input.component.validate.required)) == null ? '' : __t) +
'"\r\n  aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  ';
 if (ctx.component.description) { ;
__p += '\r\n    aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n>\r\n  ';
 ctx.values.forEach(function(item, index) { ;
__p += '\r\n  <div class="' +
((__t = (ctx.input.attr.type)) == null ? '' : __t) +
' ' +
((__t = ( ctx.component.optionsLabelPosition && ctx.component.optionsLabelPosition !== 'right' ? 'ps-0' : '')) == null ? '' : __t) +
' form-check' +
((__t = (ctx.inline ? '-inline' : '')) == null ? '' : __t) +
'" ref="wrapper">\r\n    ';
 if (['left', 'top'].includes(ctx.component.optionsLabelPosition)) { ;
__p += '\r\n    <label class="form-check-label label-position-' +
((__t = ( ctx.component.optionsLabelPosition )) == null ? '' : __t) +
'" for="' +
((__t = (ctx.instance.root && ctx.instance.root.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = ((typeof item.value === 'object') ? item.value + '-' + index : item.value)) == null ? '' : __t) +
'"><span>' +
((__t = (ctx.t(item.label, { _userInput: true }))) == null ? '' : __t) +
'</span></label>\r\n    ';
 } ;
__p += '\r\n    <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n        ref="input"\r\n        ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n        ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n        ';
 } ;
__p += '\r\n        value="' +
((__t = (item.value)) == null ? '' : __t) +
'"\r\n        ';
 if (ctx.value && (ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value]))) { ;
__p += '\r\n          checked=true\r\n        ';
 } ;
__p += '\r\n        ';
 if (item.disabled) { ;
__p += '\r\n          disabled=true\r\n        ';
 } ;
__p += '\r\n        id="' +
((__t = (ctx.instance.root && ctx.instance.root.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = ((typeof item.value === 'object') ? item.value + '-' + index : item.value)) == null ? '' : __t) +
'"\r\n        role="' +
((__t = (ctx.component.type === 'selectboxes' ? 'checkbox' : 'radio')) == null ? '' : __t) +
'"\r\n      >\r\n    ';
 if (!ctx.component.optionsLabelPosition || ['right', 'bottom'].includes(ctx.component.optionsLabelPosition)) { ;
__p += '\r\n    <label class="form-check-label label-position-' +
((__t = ( ctx.component.optionsLabelPosition )) == null ? '' : __t) +
'" for="' +
((__t = (ctx.instance.root && ctx.instance.root.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = ((typeof item.value === 'object') ? item.value + '-' + index : item.value)) == null ? '' : __t) +
'"><span>' +
((__t = (ctx.t(item.label, { _userInput: true }))) == null ? '' : __t) +
'</span></label>\r\n    ';
 } ;
__p += '\r\n  </div>\r\n  ';
 }) ;
__p += '\r\n</div>\r\n';
return __p
}