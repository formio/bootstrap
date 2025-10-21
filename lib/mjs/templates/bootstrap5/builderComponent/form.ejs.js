export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="builder-component" ref="dragComponent" tabindex="-1">\r\n  ';
 if (!ctx.disableBuilderActions) { ;
__p += '\r\n    <div class="component-btn-group" data-noattach="true">\r\n      <div\r\n        role="button"\r\n        aria-label="Remove button. Click to remove component from the form"\r\n        tabindex="-1"\r\n        class="btn btn-xxs btn-danger component-settings-button component-settings-button-remove"\r\n        ref="removeComponent"\r\n      >\r\n        <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'"></i>\r\n      </div>\r\n      ';
 if (!ctx.design) { ;
__p += '\r\n        <div\r\n          role="button"\r\n          aria-label="Copy button. Click to copy component"\r\n          tabindex="-1"\r\n          class="btn btn-xxs btn-default component-settings-button component-settings-button-copy"\r\n          ref="copyComponent"\r\n        >\r\n          <i class="' +
((__t = (ctx.iconClass('copy'))) == null ? '' : __t) +
'"></i>\r\n        </div>\r\n        <div\r\n          role="button"\r\n          aria-label="Paste below button. Click to paste component below the current component"\r\n          tabindex="-1"\r\n          class="btn btn-xxs btn-default component-settings-button component-settings-button-paste"\r\n          ref="pasteComponent"\r\n        >\r\n          <i class="' +
((__t = (ctx.iconClass('save'))) == null ? '' : __t) +
'"></i>\r\n        </div>\r\n        ';
 if (ctx.editJson !== false) { ;
__p += '\r\n          <div\r\n            role="button"\r\n            aria-label="Edit json button. Click to edit json of the current component"\r\n            tabindex="-1"\r\n            class="btn btn-xxs btn-default component-settings-button component-settings-button-edit-json" \r\n            ref="editJson"\r\n          >\r\n            <i class="' +
((__t = (ctx.iconClass('wrench'))) == null ? '' : __t) +
'"></i>\r\n          </div>\r\n        ';
 } ;
__p += '\r\n      ';
 } ;
__p += '\r\n      <div\r\n        role="button"\r\n        aria-label="Move button"\r\n        tabindex="-1"\r\n        class="btn btn-xxs btn-default component-settings-button component-settings-button-move"\r\n        ref="moveComponent"\r\n      >\r\n        <i class="' +
((__t = (ctx.iconClass('move'))) == null ? '' : __t) +
'"></i>\r\n      </div>\r\n      ';
 if (!(ctx.design && ctx.childComponent.type === 'reviewpage') && ctx.editComponent) { ;
__p += '\r\n        <div\r\n          role="button"\r\n          aria-label="Edit button. Click to open component settings modal window"\r\n          tabindex="-1"\r\n          class="btn btn-xxs btn-secondary component-settings-button component-settings-button-edit"\r\n          ref="editComponent"\r\n        >\r\n          <i class="' +
((__t = (ctx.iconClass('cog'))) == null ? '' : __t) +
'"></i>\r\n        </div>\r\n      ';
 } ;
__p += '\r\n    </div>\r\n  ';
 } ;
__p += '\r\n  ' +
((__t = (ctx.html)) == null ? '' : __t) +
'\r\n</div>\r\n';
return __p
}