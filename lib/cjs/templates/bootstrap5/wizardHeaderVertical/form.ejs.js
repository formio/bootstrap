Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav aria-label="navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header">\r\n  <ul class="pagination flex-column">\r\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\r\n    <li class="col-xs-12 page-item' +
((__t = (ctx.currentPage === index ? ' active' : '')) == null ? '' : __t) +
'" style="cursor: pointer;">\r\n      <span class="page-link" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link" style="margin-left: 0px;">\r\n        ' +
((__t = (ctx.t(panel.title, { _userInput: true }))) == null ? '' : __t) +
'\r\n        ';
 if (panel.tooltip && ctx.currentPage === index) { ;
__p += '\r\n        <i ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted" data-tooltip="' +
((__t = (panel.tooltip)) == null ? '' : __t) +
'"></i>\r\n        ';
 } ;
__p += '\r\n      </span>\r\n    </li>\r\n    ';
 }) ;
__p += '\r\n  </ul>\r\n</nav>\r\n';
return __p
}