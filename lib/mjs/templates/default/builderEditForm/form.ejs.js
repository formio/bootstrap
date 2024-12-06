export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="row">\n  <div class="col col-sm-6">\n    <p class="lead">' +
((__t = (ctx.t(ctx.componentInfo.title, { _userInput: true }))) == null ? '' : __t) +
' ' +
((__t = (ctx.t('Component'))) == null ? '' : __t) +
'</p>\n  </div>\n  ';
 if (ctx.helplinks) { ;
__p += '\n  <div class="col col-sm-6">\n    <div class="float-end" style="margin-right: 20px; margin-top: 10px">\n      <a href="' +
((__t = (ctx.t(ctx.helplinks + ctx.componentInfo.documentation))) == null ? '' : __t) +
'" target="_blank" rel="noopener noreferrer">\n        <i class="' +
((__t = (ctx.iconClass('new-window'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Help'))) == null ? '' : __t) +
'\n      </a>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n</div>\n<div class="row">\n  <div class="col component-edit-tabs ' +
((__t = ( (ctx.preview && ctx.showPreview) ? 'col-sm-6' : 'col-sm-12' )) == null ? '' : __t) +
'">\n    <div ref="editForm">\n        ' +
((__t = (ctx.editForm)) == null ? '' : __t) +
'\n    </div>\n    ';
 if (!ctx.showPreview) { ;
__p += '\n    <div style="margin-top: 10px;">\n      <button class="btn btn-success" style="margin-right: 10px;" ref="saveButton">' +
((__t = (ctx.t('Save'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-secondary" style="margin-right: 10px;" ref="cancelButton">' +
((__t = (ctx.t('Cancel'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-danger" ref="removeButton">' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'</button>\n      ';
 if (ctx.preview) { ;
__p += '\n      <button class="btn btn-primary float-right" ref="previewButton">' +
((__t = (ctx.t('Show preview'))) == null ? '' : __t) +
'</button>\n      ';
 } ;
__p += '\n    </div>\n    ';
 } ;
__p += '\n  </div>\n  ';
 if (ctx.showPreview && ctx.preview) { ;
__p += '\n  <div class="col col-sm-6">\n    <div class="card panel preview-panel">\n      <div class="card-header">\n        <h4 class="card-title mb-0">' +
((__t = (ctx.t('Preview'))) == null ? '' : __t) +
'</h4>\n      </div>\n      <div class="card-body">\n        <div class="component-preview" ref="preview">\n          ' +
((__t = (ctx.preview)) == null ? '' : __t) +
'\n        </div>\n      </div>\n    </div>\n    ';
 if (ctx.componentInfo.help) { ;
__p += '\n    <div class="card card-body bg-light formio-settings-help">\n      ' +
((__t = ( ctx.t(ctx.componentInfo.help) )) == null ? '' : __t) +
'\n    </div>\n    ';
 } ;
__p += '\n    <div style="margin-top: 10px;">\n      <button class="btn btn-success" style="margin-right: 10px;" ref="saveButton">' +
((__t = (ctx.t('Save'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-secondary" style="margin-right: 10px;" ref="cancelButton">' +
((__t = (ctx.t('Cancel'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-danger" ref="removeButton">' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-primary float-right" ref="previewButton">' +
((__t = (ctx.t('Hide preview'))) == null ? '' : __t) +
'</button>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}