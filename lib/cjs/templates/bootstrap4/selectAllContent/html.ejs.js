Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formio-grid-select-wrapper alert text-secondary text-center">\n  <span class="formio-grid-select-info">\n    ';
 if (!ctx.allRowsSelected) { ;
__p += '\n    ' +
((__t = (ctx.t('gridAllItems'))) == null ? '' : __t) +
' <span>' +
((__t = (ctx.totalSelected)) == null ? '' : __t) +
'</span> ' +
((__t = (ctx.t('recordsSelectedOnPage'))) == null ? '' : __t) +
'\n    ';
 } ;
__p += '\n    ';
 if (ctx.allRowsSelected) { ;
__p += '\n    ' +
((__t = (ctx.t('gridAllItems'))) == null ? '' : __t) +
' <span>' +
((__t = (ctx.totalItems)) == null ? '' : __t) +
'</span> ' +
((__t = (ctx.t('recordsSelectedInTable'))) == null ? '' : __t) +
'\n    ';
 } ;
__p += '\n  </span>\n  <span class="formio-grid-select-spinner">\n    <div class="spinner-grow"></div>\n  </span>\n  <span ref="selectAllBtn" class="formio-grid-select-btn text-primary">\n    <span>\n      ';
 if (!ctx.allRowsSelected) { ;
__p += '\n      ' +
((__t = (ctx.t('gridSelectAll'))) == null ? '' : __t) +
' <span>' +
((__t = (ctx.totalItems)) == null ? '' : __t) +
'</span> ' +
((__t = (ctx.t('itemsInTable'))) == null ? '' : __t) +
'\n      ';
 } ;
__p += '\n      ';
 if (ctx.allRowsSelected) { ;
__p += '\n      ' +
((__t = (ctx.t('clearSelection'))) == null ? '' : __t) +
'\n      ';
 } ;
__p += '\n    </span>\n  </span>\n</div>';
return __p
}