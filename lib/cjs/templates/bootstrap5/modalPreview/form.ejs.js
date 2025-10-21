Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<label id="l-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" class="control-label ' +
((__t = ( ctx.label.className )) == null ? '' : __t) +
'">\r\n  ' +
((__t = ( ctx.t(ctx.component.label, { _userInput: true }) )) == null ? '' : __t) +
'<span ref="modalLabelValue" class="visually-hidden">. ' +
((__t = ( ctx.component.type === 'signature' ? ctx.self.getValueAsString(ctx.previewText) : ctx.previewText )) == null ? '' : __t) +
'</span>\r\n</label><br>\r\n<span class="visually-hidden" ref="modalPreviewLiveRegion" aria-live="assertive"></span>\r\n<button\r\n  lang="en"\r\n  class="btn btn-light btn-md open-modal-button form-control ' +
((__t = (ctx.openModalBtnClasses || '')) == null ? '' : __t) +
'"\r\n  ref="openModal"\r\n  aria-labelledby="l-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n>\r\n  ' +
((__t = ( ctx.previewText )) == null ? '' : __t) +
'\r\n</button>\r\n<div class="formio-errors invalid-feedback">\r\n  ' +
((__t = ( ctx.messages )) == null ? '' : __t) +
'\r\n</div>\r\n';
return __p
}