Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="panel panel-default form-builder-panel" ref="group-panel-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'">\r\n  <div class="panel-heading form-builder-group-header">\r\n    <h5 class="panel-title">\r\n      <button\r\n        class="btn btn-block builder-group-button"\r\n        type="button"\r\n        data-toggle="collapse"\r\n        data-target="#group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n        data-parent="#' +
((__t = (ctx.groupId)) == null ? '' : __t) +
'"\r\n        href="#group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n        ref="sidebar-anchor"\r\n      >\r\n        ' +
((__t = (ctx.t(ctx.group.title))) == null ? '' : __t) +
'\r\n      </button>\r\n    </h5>\r\n  </div>\r\n  <div\r\n    id="group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n    class="panel-collapse collapse' +
((__t = (ctx.group.default ? ' in' : '')) == null ? '' : __t) +
'"\r\n    data-parent="#' +
((__t = (ctx.groupId)) == null ? '' : __t) +
'"\r\n    data-default="' +
((__t = (ctx.group.default)) == null ? '' : __t) +
'"\r\n    ref="sidebar-group"\r\n  >\r\n    <div id="group-container-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'" class="panel-body no-drop" ref="sidebar-container">\r\n      ';
 ctx.group.componentOrder.forEach(function(componentKey) { ;
__p += '\r\n      <span\r\n        data-group="' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n        data-key="' +
((__t = (ctx.group.components[componentKey].key)) == null ? '' : __t) +
'"\r\n        data-type="' +
((__t = (ctx.group.components[componentKey].schema.type)) == null ? '' : __t) +
'"\r\n        class="btn btn-primary btn-xs btn-block formcomponent drag-copy"\r\n      >\r\n        ';
 if (ctx.group.components[componentKey].icon) { ;
__p += '\r\n          <i class="' +
((__t = (ctx.iconClass(ctx.group.components[componentKey].icon))) == null ? '' : __t) +
'" style="margin-right: 5px;"></i>\r\n        ';
 } ;
__p += '\r\n        ' +
((__t = (ctx.t(ctx.group.components[componentKey].title))) == null ? '' : __t) +
'\r\n      </span>\r\n      ';
 }) ;
__p += '\r\n      ' +
((__t = (ctx.subgroups.join(''))) == null ? '' : __t) +
'\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n';
return __p
}