export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="card form-builder-panel accordion-item" ref="group-panel-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'">\r\n  <div class="card-header form-builder-group-header p-0" id="heading-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'">\r\n    <h5 class="mb-0 mt-0 d-grid accordion-header">\r\n      <button\r\n        class="btn builder-group-button"\r\n        type="button"\r\n        data-bs-toggle="collapse"\r\n        data-bs-target="#group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n        data-bs-parent="#' +
((__t = (ctx.groupId)) == null ? '' : __t) +
'"\r\n        aria-expanded="' +
((__t = (ctx.group.default)) == null ? '' : __t) +
'"\r\n        aria-controls="group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n        ref="sidebar-anchor"\r\n      >\r\n        ' +
((__t = (ctx.t(ctx.group.title, { _userInput: true }))) == null ? '' : __t) +
'\r\n      </button>\r\n    </h5>\r\n  </div>\r\n  <div\r\n    id="group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n    class="accordion-collapse collapse ' +
((__t = (ctx.group.default ? ' show' : '')) == null ? '' : __t) +
'"\r\n    data-bs-parent="#' +
((__t = (ctx.groupId)) == null ? '' : __t) +
'"\r\n    data-default="' +
((__t = (ctx.group.default)) == null ? '' : __t) +
'"\r\n    aria-labelledby="heading-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n    ref="sidebar-group"\r\n  >\r\n    <div id="group-container-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'" class="d-grid gap-1 no-drop p-2 w-100" ref="sidebar-container">\r\n      ';
 if (ctx.group.componentOrder.length || ctx.subgroups.length) { ;
__p += '\r\n        ';
 !ctx.group.componentOrder || ctx.group.componentOrder.forEach(function(componentKey) { ;
__p += '\r\n          <span\r\n            ref="sidebar-component"\r\n            data-group="' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n            data-key="' +
((__t = (ctx.group.components[componentKey].key)) == null ? '' : __t) +
'"\r\n            data-type="' +
((__t = (ctx.group.components[componentKey].schema.type)) == null ? '' : __t) +
'"\r\n            class="btn btn-outline-primary btn-sm formcomponent drag-copy m-0"\r\n            tabindex="' +
((__t = (ctx.keyboardActionsEnabled ? 0 : -1)) == null ? '' : __t) +
'"\r\n          >\r\n            ';
 if (ctx.group.components[componentKey].icon) { ;
__p += '\r\n              <i class="' +
((__t = (ctx.iconClass(ctx.group.components[componentKey].icon))) == null ? '' : __t) +
'" style="margin-right: 5px;"></i>\r\n            ';
 } ;
__p += '\r\n            ' +
((__t = (ctx.t(ctx.group.components[componentKey].title, { _userInput: true }))) == null ? '' : __t) +
'\r\n          </span>\r\n        ';
 }) ;
__p += '\r\n        ' +
((__t = (ctx.subgroups.join(''))) == null ? '' : __t) +
'\r\n      ';
 } else { ;
__p += '\r\n        <div>' +
((__t = (ctx.t('No Matches Found'))) == null ? '' : __t) +
'</div>\r\n      ';
 } ;
__p += '\r\n    </div>\r\n  </div>\r\n</div>\r\n';
return __p
}