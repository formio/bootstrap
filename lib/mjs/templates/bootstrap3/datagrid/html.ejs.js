export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="table datagrid-table table-bordered\n    ' +
((__t = ( component.striped ? 'table-striped' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( component.hover ? 'table-hover' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( component.condensed ? 'table-condensed' : '')) == null ? '' : __t) +
'\n    ">\n  ';
 if (hasHeader) { ;
__p += '\n  <thead>\n    <tr>\n      ';
 columns.forEach(function(col) { ;
__p += '\n        <th class="' +
((__t = (col.validate && col.validate.required ? 'field-required' : '')) == null ? '' : __t) +
'">\n          ' +
((__t = ( col.hideLabel ? '' : t(col.label || col.title) )) == null ? '' : __t) +
'\n          ';
 if (col.tooltip) { ;
__p += ' <i ref="tooltip" data-title="' +
((__t = (col.tooltip)) == null ? '' : __t) +
'" class="' +
((__t = (iconClass('question-sign'))) == null ? '' : __t) +
' text-muted" data-tooltip="' +
((__t = (col.tooltip)) == null ? '' : __t) +
'"></i>';
 } ;
__p += '\n        </th>\n      ';
 }) ;
__p += '\n    </tr>\n  </thead>\n  ';
 } ;
__p += '\n  <tbody>\n    ';
 rows.forEach(function(row) { ;
__p += '\n    <tr>\n      ';
 columns.forEach(function(col) { ;
__p += '\n        <td ref="' +
((__t = (datagridKey)) == null ? '' : __t) +
'">\n          ' +
((__t = (row[col.key])) == null ? '' : __t) +
'\n        </td>\n      ';
 }) ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n  </tbody>\n</table>\n';
return __p
}