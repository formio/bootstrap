"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./builder/index.js");
const index_js_2 = require("./builderComponent/index.js");
const index_js_3 = require("./builderComponents/index.js");
const index_js_4 = require("./builderEditForm/index.js");
const index_js_5 = require("./builderPlaceholder/index.js");
const index_js_6 = require("./builderSidebar/index.js");
const index_js_7 = require("./builderSidebarGroup/index.js");
const index_js_8 = require("./columns/index.js");
const cssClasses_js_1 = require("./cssClasses.js");
const index_js_9 = require("./datagrid/index.js");
const index_js_10 = require("./day/index.js");
const index_js_11 = require("./dialog/index.js");
const index_js_12 = require("./editgrid/index.js");
const index_js_13 = require("./field/index.js");
const index_js_14 = require("./file/index.js");
const index_js_15 = require("./icon/index.js");
const iconClass_js_1 = require("./iconClass.js");
const index_js_16 = require("./input/index.js");
const index_js_17 = require("./label/index.js");
const index_js_18 = require("./message/index.js");
const index_js_19 = require("./modaldialog/index.js");
const index_js_20 = require("./modaledit/index.js");
const index_js_21 = require("./multiValueRow/index.js");
const index_js_22 = require("./multiValueTable/index.js");
const index_js_23 = require("./panel/index.js");
const index_js_24 = require("./radio/index.js");
const index_js_25 = require("./resourceAdd/index.js");
const index_js_26 = require("./signature/index.js");
const index_js_27 = require("./survey/index.js");
const index_js_28 = require("./tab/index.js");
const index_js_29 = require("./table/index.js");
const index_js_30 = require("./well/index.js");
const index_js_31 = require("./wizard/index.js");
const index_js_32 = require("./wizardHeader/index.js");
const index_js_33 = require("./wizardHeaderClassic/index.js");
const index_js_34 = require("./wizardHeaderVertical/index.js");
const index_js_35 = require("./wizardNav/index.js");
const index_js_36 = require("./alert/index.js");
const index_js_37 = require("./errorsList/index.js");
const index_js_38 = require("./grid/index.js");
const index_js_39 = require("./pagination/index.js");
const index_js_40 = require("./column-menu/index.js");
const index_js_41 = require("./tbody/index.js");
const index_js_42 = require("./pagination-bottom/index.js");
exports.default = {
    transform(type, text) {
        if (!text) {
            return text;
        }
        switch (type) {
            case 'class':
                return this.cssClasses.hasOwnProperty(text.toString()) ? this.cssClasses[text.toString()] : text;
        }
        return text;
    },
    handleBuilderSidebarScroll(builder) {
        if (builder.scrollResizeObserver) {
            builder.scrollResizeObserver.disconnect();
        }
        builder.scrollResizeObserver = new ResizeObserver(() => {
            setTimeout(() => {
                const { form, sidebar } = builder.refs;
                const formHeight = form && form.parentNode && form.parentNode.clientHeight;
                const sidebarHeight = sidebar && sidebar.clientHeight;
                const style = sidebar && sidebar.parentNode && sidebar.parentNode.style;
                if (style && formHeight && sidebarHeight) {
                    style.height = `${Math.max(sidebarHeight + 20, formHeight)}px`;
                }
            });
        });
        builder.scrollResizeObserver.observe(builder.refs.form);
        builder.scrollResizeObserver.observe(builder.refs.sidebar);
    },
    clearBuilderSidebarScroll(builder) {
        if (builder.scrollResizeObserver) {
            builder.scrollResizeObserver.disconnect();
            builder.scrollResizeObserver = null;
        }
    },
    defaultIconset: 'glyphicon',
    iconClass: iconClass_js_1.default,
    cssClasses: cssClasses_js_1.default,
    builder: index_js_1.default,
    builderComponent: index_js_2.default,
    builderComponents: index_js_3.default,
    builderEditForm: index_js_4.default,
    builderPlaceholder: index_js_5.default,
    builderSidebar: index_js_6.default,
    builderSidebarGroup: index_js_7.default,
    columns: index_js_8.default,
    datagrid: index_js_9.default,
    day: index_js_10.default,
    dialog: index_js_11.default,
    editgrid: index_js_12.default,
    field: index_js_13.default,
    file: index_js_14.default,
    icon: index_js_15.default,
    input: index_js_16.default,
    label: index_js_17.default,
    message: index_js_18.default,
    modaldialog: index_js_19.default,
    modaledit: index_js_20.default,
    multiValueRow: index_js_21.default,
    multiValueTable: index_js_22.default,
    panel: index_js_23.default,
    radio: index_js_24.default,
    resourceAdd: index_js_25.default,
    signature: index_js_26.default,
    survey: index_js_27.default,
    tab: index_js_28.default,
    table: index_js_29.default,
    well: index_js_30.default,
    wizard: index_js_31.default,
    wizardHeader: index_js_32.default,
    wizardHeaderClassic: index_js_33.default,
    wizardHeaderVertical: index_js_34.default,
    wizardNav: index_js_35.default,
    errorsList: index_js_37.default,
    alert: index_js_36.default,
    grid: index_js_38.default,
    pagination: index_js_39.default,
    columnMenu: index_js_40.default,
    tbody: index_js_41.default,
    paginationBottom: index_js_42.default
};
