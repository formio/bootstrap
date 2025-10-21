Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.prefix || ctx.suffix) { ;
__p += '\r\n<div class="input-group">\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.prefix) { ;
__p += '\r\n    <div class="input-group-text" ref="prefix">\r\n      ';
 if(ctx.prefix instanceof HTMLElement){ ;
__p += '\r\n        ' +
((__t = ( ctx.t(ctx.prefix.outerHTML, { _userInput: true }) )) == null ? '' : __t) +
'\r\n      ';
 } else{ ;
__p += '\r\n        ' +
((__t = ( ctx.t(ctx.prefix, { _userInput: true }) )) == null ? '' : __t) +
'\r\n      ';
 } ;
__p += '\r\n    </div>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.options.floatingLabels) { ;
__p += '\r\n  <div class="form-floating">\r\n  ';
 } ;
__p += '\r\n  ';
 if (!ctx.component.editor && !ctx.component.wysiwyg) { ;
__p += '\r\n    <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n      ref="' +
((__t = (ctx.input.ref ? ctx.input.ref : 'input')) == null ? '' : __t) +
'"\r\n      ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n        ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n      ';
 } ;
__p += '\r\n      id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n      aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
' ';
 if (ctx.component.description) { ;
__p += 'd-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t);
 } ;
__p += '"\r\n      aria-required="' +
((__t = (ctx.input.ref === 'input' || !ctx.input.ref ? ctx.component.validate.required :
        ctx.component.fields && ctx.component.fields[ctx.input.ref] && ctx.component.fields[ctx.input.ref].required || false)) == null ? '' : __t) +
'"\r\n    >' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n    ';
 if (ctx.options.floatingLabels) { ;
__p += '\r\n    <label ref="label" class="col-form-label ' +
((__t = (ctx.label.className)) == null ? '' : __t) +
'"\r\n      for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n      id="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    >' +
((__t = ( ctx.t(ctx.component.label, { _userInput: true }) )) == null ? '' : __t) +
'</label>\r\n    ';
 } ;
__p += '\r\n    ';
 if (ctx.hasValueMaskInput) { ;
__p += '\r\n      <input ref="valueMaskInput" />\r\n    ';
 } ;
__p += '\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.editor || ctx.component.wysiwyg) { ;
__p += '\r\n  <div ref="input"></div>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.type === 'datetime') { ;
__p += '\r\n<span aria-live="assertive" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-liveRegion" class="visually-hidden" ref="liveRegion"></span>\r\n';
 } ;
__p += '\r\n';
 if (ctx.suffix) { ;
__p += '\r\n  <div class="input-group-text"\r\n    ref="suffix"\r\n    ';
 if (ctx.readOnly) { ;
__p += '\r\n    role="presentation"\r\n    ';
 } ;
__p += '\r\n    >\r\n    ';
 if(ctx.suffix instanceof HTMLElement){ ;
__p += '\r\n      ' +
((__t = ( ctx.t(ctx.suffix.outerHTML, { _userInput: true }) )) == null ? '' : __t) +
'\r\n    ';
 } else{ ;
__p += '\r\n      ' +
((__t = ( ctx.t(ctx.suffix, { _userInput: true }) )) == null ? '' : __t) +
'\r\n    ';
 } ;
__p += '\r\n  </div>\r\n';
 } ;
__p += '\r\n';
 if (ctx.prefix || ctx.suffix || ctx.options.floatingLabels) { ;
__p += '\r\n  </div>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.showCharCount || ctx.component.showWordCount) { ;
__p += '\r\n<div class="form-text ' +
((__t = (ctx.component.description ? 'float-end' : 'text-end')) == null ? '' : __t) +
'">\r\n  ';
 if (ctx.component.showCharCount) { ;
__p += '\r\n  <span class="text-muted" ref="charcount" aria-live="polite"></span>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.component.showWordCount) { ;
__p += '\r\n  <span class="text-muted" ref="wordcount" aria-live="polite"></span>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
 } ;
__p += '\r\n';
return __p
}