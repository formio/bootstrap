"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@formio/jsx/jsx-runtime");
const standard_template_1 = require("@formio/standard-template");
// const defaultClasses = {
//   // label: {
//     label: [
//     "col-form-label", 
//    "{{ctx.label.className}}"    
//     ],
//     tooltipIcon: [
//       "{{ctx.iconClass('question-sign')}}", 
//       "text-muted"
//     ],
//     hiddenForNumbers: [
//       "visually-hidden"
//     ]
//   // }
// };
exports.default = (classes) => {
    return (context) => {
        var _a;
        const defaultClasses = classes;
        const { component, t, instance, customStyles } = context;
        const templateClasses = standard_template_1.templateUtils.getTemplateClasses(defaultClasses, customStyles, context);
        const numericOnly = component.type === 'number' ||
            component.type === 'phoneNumber' ||
            component.type === 'currency';
        return ((0, jsx_runtime_1.jsxs)("label", { ref: "label", class: templateClasses.label, for: `${instance.id}-${component.key}`, id: `l-${instance.id}-${component.key}`, children: [(0, jsx_runtime_1.jsx)("div", { children: "FROM BOOTSTRAP" }), t((_a = component.label) !== null && _a !== void 0 ? _a : '', { _userInput: true }), numericOnly && (0, jsx_runtime_1.jsxs)("span", { class: templateClasses.hiddenForNumbers, children: [", ", t('numeric only'), ","] }), component.tooltip && ((0, jsx_runtime_1.jsx)("i", { ref: "tooltip", tabindex: "0", class: templateClasses.tooltipIcon, "data-tooltip": component.tooltip }))] }));
    };
};
