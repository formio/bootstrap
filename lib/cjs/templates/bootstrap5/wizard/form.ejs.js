Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = (ctx.className)) == null ? '' : __t) +
'">\r\n    <div style="position: relative;">\r\n        ';
 if (ctx.wizardHeaderType === 'wizardHeaderVertical') { ;
__p += '\r\n        <div class="row">\r\n            ';
 if (ctx.wizardHeaderLocation !== 'right') { ;
__p += '\r\n            <div class="col-sm-2">\r\n                ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\r\n            </div>\r\n            ';
 } ;
__p += '\r\n            <div class="wizard-page col-sm-10" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\r\n                ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\r\n            </div>\r\n            ';
 if (ctx.wizardHeaderLocation === 'right') { ;
__p += '\r\n            <div class="col-sm-2">\r\n                ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\r\n            </div>\r\n            ';
 } ;
__p += '\r\n        </div>\r\n        <div class="col-sm-offset-2 col-sm-10 ' +
((__t = (ctx.wizardHeaderLocation === 'right' ? 'col-sm-offset-0 col-md-offset-0' : '')) == null ? '' : __t) +
'">\r\n            ' +
((__t = ( ctx.wizardNav )) == null ? '' : __t) +
'\r\n        </div>\r\n        ';
 } else { ;
__p += '\r\n        ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\r\n        <div class="wizard-page" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\r\n            ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\r\n        </div>\r\n        ' +
((__t = ( ctx.wizardNav )) == null ? '' : __t) +
'\r\n        ';
 } ;
__p += '\r\n    </div>\r\n</div>\r\n';
return __p
}