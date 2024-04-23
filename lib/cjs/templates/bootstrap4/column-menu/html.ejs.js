Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="dropdown" ref="menu">\r\n  <ul class="dropdown-menu" ref="dropdown">\r\n    ';
 if (ctx.options.sortable && ctx.component && ctx.component.sortable) { ;
__p += '\r\n    <li class="dropdown-item" ref="sortAscending">↑ Sort Ascending</li>\r\n    <li class="dropdown-item" ref="sortDescending">↓ Sort Descending</li>\r\n    <li ref="rootItem" class="dropdown-divider"></li>\r\n    ';
 } ;
__p += '\r\n    <li ref="rootItem" class="dropdown-item">\r\n      Columns <span class="arrow-right">›</span>\r\n      <ul ref="nestedDropdown" class="dropdown-menu">\r\n        ';
 ctx.components.forEach(function(comp) { ;
__p += '\r\n        <li class="dropdown-item">\r\n          <label class="form-check form-check-label">\r\n            <input \r\n                ref="checkbox"\r\n                ' +
((__t = ( comp.show ? 'checked' : '' )) == null ? '' : __t) +
'\r\n                ' +
((__t = ( ctx.lastColumn && comp.show ? 'disabled' : '' )) == null ? '' : __t) +
'\r\n                type="checkbox"\r\n                class="form-check-input">\r\n            <span class="form-check-label">\r\n              ' +
((__t = ( comp.label )) == null ? '' : __t) +
'\r\n            </span>\r\n          </label>\r\n        </li>\r\n        ';
 }); ;
__p += '\r\n      </ul>\r\n    </li>\r\n    ';
 if (ctx.options.filterable && ctx.component && ctx.component.filterable) { ;
__p += '\r\n    <li ref="rootItem" class="dropdown-divider"></li>\r\n    <li ref="rootItem" class="dropdown-item">\r\n      Filter <span class="arrow-right">›</span>\r\n      <ul ref="nestedDropdown" class="dropdown-menu">\r\n        <form ref="filterForm" class="px-3 py-2">\r\n          Show items with value that:\r\n          <div class="form-group">\r\n            <select ref="filterType" class="form-control">\r\n              ';
 ctx.filterTypes.forEach(function(filterType) { ;
__p += '\r\n                ';
 if (!(ctx.hideFilters.includes(ctx.component.key) && (['startsWith', 'contain', 'notContain', 'endsWith', 'matches' ].includes(filterType.type)))) { ;
__p += '\r\n                  <option value="' +
((__t = ( filterType.type )) == null ? '' : __t) +
'">' +
((__t = ( filterType.label )) == null ? '' : __t) +
'</option>\r\n                ';
 } ;
__p += '\r\n              ';
 }); ;
__p += '\r\n            </select>\r\n          </div>\r\n          <div class="form-group">\r\n            <input type="text" ref="filterInput" name="' +
((__t = ( ctx.component && ctx.component.key )) == null ? '' : __t) +
'" class="form-control" placeholder="Filter">\r\n          </div>\r\n          <div class="form-row mx-0">\r\n            <button ref="filterButton" type="button" class="btn btn-primary">Filter</button>\r\n            <button ref="clearBtn" type="button" class="btn btn-secondary ml-1">Clear</button>\r\n          </div>\r\n        </form>\r\n      </ul>\r\n    </li>\r\n    ';
 } ;
__p += '\r\n  </ul>\r\n</div>\r\n';
return __p
}