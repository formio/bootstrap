export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="data-grid-wrapper">\n  <div class="data-grid">\n    <span class="menu-container">\n      <div class="dropdown" ref="menu"></div>\n    </span>\n    <div style="position: relative; max-width: 86vw; display: flex; align-items: center; justify-content: space-between">\n        ';
 if (ctx.component.enableRowSelect) { ;
__p += '\n        <div style="min-height: 20px" >\n            ';
 if (ctx.selectedRows) { ;
__p += '\n            <span style=" font-size: 13px">' +
((__t = (ctx.selectedRows)) == null ? '' : __t) +
' selected</span>\n            ';
 } ;
__p += '\n        </div>\n        ';
 } ;
__p += '\n        <div ref="pagination" class="formio-pagination" style="margin-left: auto"></div>\n    </div>\n    <div class="responsive-table">\n      <div class="spinner-wrapper" ref="loader">\n        <div class="spinner-grow"></div>\n      </div>\n      <table class="table' +
((__t = ( ctx.classes )) == null ? '' : __t) +
' formio-grid">\n        <thead>\n          <tr>\n            ';
 if (!ctx.component.components.length) { ;
__p += '\n              <th>No components have been set up to display in the Data Table. "Table View" must be checked for components to render.</th>\n            ';
 } ;
__p += '\n            ';
 if (ctx.component.enableRowSelect) { ;
__p += '\n            <th style="width: 2rem">\n              <input type="checkbox" name="selectAll" id="selectAll" ref="selectAll" title="select All" ' +
((__t = (ctx.selectedAll && 'checked')) == null ? '' : __t) +
' >\n              <span style="display: none">(' +
((__t = (ctx.selectedRows)) == null ? '' : __t) +
' of <span ref="totalRows"></span>)</span>\n            </th>\n            ';
 } ;
__p += '\n            ';
 ctx.component.components.forEach(function(comp, i) { ;
__p += '\n              ';
 if (comp.show) { ;
__p += '\n              <th>\n                <span>' +
((__t = ( comp.label || comp.key )) == null ? '' : __t) +
'</span>\n                ';
 if (ctx.options.sortable && comp.sortable) { ;
__p += '\n                <span class="sort-btn ' +
((__t = ( ctx.component.sort.key === comp.key ? 'sorted' : '' )) == null ? '' : __t) +
'" ref="sort">\n                  ' +
((__t = ( ctx.component.sort.isAsc ? '↑' : '↓' )) == null ? '' : __t) +
'\n                </span>\n                ';
 } ;
__p += '\n                ';
 if (!ctx.options.hideMenu) { ;
__p += '\n                <span class="menu">\n                  <div class="menu-container">\n                    <span class="menu-btn' +
((__t = ( (ctx.component.filters[comp.key] || ctx.component.filters[comp.columnQueryProperty]) ? ' filters-applied' : '' )) == null ? '' : __t) +
'" ref="menuBtn">⋮</span>\n                  </div>\n                </span>\n                ';
 } ;
__p += '\n              </th>\n              ';
 } ;
__p += '\n            ';
 }); ;
__p += '\n            ';
 if ((ctx.component.showEditBtn || ctx.component.showDeleteBtn || ctx.component.showDeleteAllBtn) 
              && ctx.data.length
              && !ctx.options.pdf) { ;
__p += '\n            <th class="formio-grid-ops border-left-0" style="background-color: white; position: sticky; padding: 0;">\n              <div class="formio-actions-header">\n                <span>Actions</span>\n                ';
 if (ctx.component.showDeleteAllBtn && ctx.data.length) { ;
__p += '\n                <button class="btn btn p-0 delete-all-btn delete-all-btn formio-grid-ops-button ' +
((__t = ( ctx.options.readOnly ? 'disabled' : '' )) == null ? '' : __t) +
'" ref="deleteAll" style="padding: 0;"><i class="fa fa-trash" aria-hidden="true"></i></button>\n                ';
 } ;
__p += '\n              </div>\n            </th>\n            ';
 } ;
__p += '\n          </tr>\n        </thead>\n        <tbody ref="tbody"></tbody>\n      </table>\n    </div>\n    <div class="formio-grid-bottom" ' +
((__t = (ctx.component.showAddBtn ? 'style="margin-top: 10px"' : "")) == null ? '' : __t) +
'>\n      <div ref="paginationBottom"></div>\n      ';
 if (ctx.component.showAddBtn && !ctx.options.pdf) { ;
__p += '\n        <div class="btn btn-primary formio-new-button ' +
((__t = ( ctx.options.readOnly ? 'disabled' : '' )) == null ? '' : __t) +
'" ref="addRow">+</div>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>\n';
return __p
}