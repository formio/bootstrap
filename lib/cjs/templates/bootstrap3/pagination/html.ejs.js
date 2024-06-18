Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="common-pagination" role="toolbar" style="font-size: small; display: flex; align-items: center; margin-left: auto" ' +
((__t = (ctx.component.showAddBtn ? 'style="width: 95%;"' : 'style="width: 100%;"')) == null ? '' : __t) +
'>\n    <div class="items-per-page input-group" style="display: flex; align-items: center;">\n        <div class="input-group-append">\n            <span class="">Items per page:</span>\n        </div>\n        <select ref="itemsPerPage" class="mr-1" style="border: none;\n        border-bottom: 1px solid black; outline: none; cursor: pointer; margin-right: 10px">\n            <option value="5">5</option>\n            <option value="10">10</option>\n            <option value="25">25</option>\n            <option value="50">50</option>\n            <option value="100">100</option>\n            <option value="-1">All</option>\n        </select>\n    </div>\n    <span ref="itemsCount" class="items-count p-1">\n        ' +
((__t = ( ctx.itemsCount )) == null ? '' : __t) +
'\n      </span>\n    <button ref="firstPage" type="button" class="btn" style="outline: none; background-color: inherit; box-shadow: none">\n        <span aria-hidden="true" style="font-size: x-large">&laquo;</span>\n    </button>\n    <button ref="prevPage" type="button" class="btn" style="outline: none; background-color: inherit; box-shadow: none">\n        <span aria-hidden="true" style="font-size: x-large">&lsaquo;</span>\n    </button>\n    <button ref="nextPage" type="button" class="btn" style="outline: none; background-color: inherit; box-shadow: none">\n        <span aria-hidden="true" style="font-size: x-large">&rsaquo;</span>\n    </button>\n    <button ref="lastPage" type="button" class="btn" style="outline: none; background-color: inherit; box-shadow: none">\n        <span aria-hidden="true" style="font-size: x-large">&raquo;</span>\n    </button>\n</div>\n';
return __p
}