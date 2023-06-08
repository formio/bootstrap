Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="tab-container' +
((__t = ( ctx.component.verticalLayout ? ' card-vertical' : '')) == null ? '' : __t) +
'">\n  <ul class="nav nav-tabs' +
((__t = ( ctx.component.verticalLayout ? ' nav-tabs-vertical' : '')) == null ? '' : __t) +
'">\n    ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\n    <li class="nav-item' +
((__t = ( ctx.currentTab === index ? ' active' : '')) == null ? '' : __t) +
'" role="presentation" ref="' +
((__t = (ctx.tabLikey)) == null ? '' : __t) +
'">\n      <a class="nav-link' +
((__t = ( ctx.currentTab === index ? ' active' : '')) == null ? '' : __t) +
'' +
((__t = ( ctx.component.verticalLayout ? ' nav-link-vertical' : '')) == null ? '' : __t) +
'" href="#' +
((__t = (tab.key)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.tabLinkKey)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(tab.label, { _userInput: true }))) == null ? '' : __t) +
'</a>\n    </li>\n    ';
 }) ;
__p += '\n  </ul>\n  <div class="tab-content">\n    ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\n    <div role="tabpanel" class="tab-pane' +
((__t = ( ctx.currentTab === index ? ' active' : '')) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.tabKey)) == null ? '' : __t) +
'">' +
((__t = (ctx.tabComponents[index])) == null ? '' : __t) +
'</div>\n    ';
 }) ;
__p += '\n  </div>\n</div>\n';
return __p
}