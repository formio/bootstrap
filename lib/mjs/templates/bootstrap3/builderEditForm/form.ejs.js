export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="row">\n  <div class="col col-sm-6">\n    <p class="lead">' +
((__t = (ctx.t(ctx.componentInfo.title, { _userInput: true }))) == null ? '' : __t) +
' ' +
((__t = (ctx.t('component'))) == null ? '' : __t) +
'</p>\n  </div>\n  ';
 if (ctx.helplinks) { ;
__p += '\n  <div class="col col-sm-6">\n    <div class="pull-right" style="margin-right: 20px; margin-top: 10px">\n      <a href="' +
((__t = (ctx.t(ctx.helplinks + ctx.componentInfo.documentation))) == null ? '' : __t) +
'" target="_blank">\n        <i class="' +
((__t = (ctx.iconClass('new-window'))) == null ? '' : __t) +
'"> ' +
((__t = (ctx.t('help'))) == null ? '' : __t) +
'</i>\n      </a>\n    </div>\n  </div>\n';
 } ;
__p += '\n</div>\n<div class="row component-edit-content">\n  <div class="col component-edit-tabs ';
 if (ctx.preview) { ;
__p += 'col-sm-6';
 } else { ;
__p += 'col-sm-12';
 } ;
__p += '">\n    <div class="editForm" ref="editForm">\n      ' +
((__t = (ctx.editForm)) == null ? '' : __t) +
'\n    </div>\n    ';
 if (!ctx.preview) { ;
__p += '\n    <div style="margin-top: 10px;">\n      <button class="btn btn-success" style="margin-right: 10px;" ref="saveButton">' +
((__t = (ctx.t('save'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-default" style="margin-right: 10px;" ref="cancelButton">' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-danger" ref="removeButton">' +
((__t = (ctx.t('remove'))) == null ? '' : __t) +
'</button>\n    </div>\n    ';
 } ;
__p += '\n  </div>\n  ';
 if (ctx.preview) { ;
__p += '\n  <div class="col col-sm-6">\n    <div class="panel panel-default preview-panel">\n      <div class="panel-heading">\n        <h3 class="panel-title">' +
((__t = (ctx.t('preview'))) == null ? '' : __t) +
'</h3>\n      </div>\n      <div class="panel-body">\n        <div class="component-preview" ref="preview">\n          ' +
((__t = (ctx.preview)) == null ? '' : __t) +
'\n        </div>\n      </div>\n    </div>\n    ';
 if (ctx.componentInfo.help) { ;
__p += '\n    <div class="well formio-settings-help">\n      ' +
((__t = ( ctx.componentInfo.help )) == null ? '' : __t) +
'\n    </div>\n    ';
 } ;
__p += '\n    <div style="margin-top: 10px;">\n      <button class="btn btn-success" style="margin-right: 10px;" ref="saveButton">' +
((__t = (ctx.t('save'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-default" style="margin-right: 10px;" ref="cancelButton">' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-danger" ref="removeButton">' +
((__t = (ctx.t('remove'))) == null ? '' : __t) +
'</button>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}