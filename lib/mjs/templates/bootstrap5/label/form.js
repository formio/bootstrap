import { jsx as _jsx, jsxs as _jsxs } from "@formio/jsx/jsx-runtime";
import { templateUtils } from '@formio/standard-template';
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
export default (classes) => {
    return (context) => {
        const defaultClasses = classes;
        const { component, t, instance, customStyles } = context;
        const templateClasses = templateUtils.getTemplateClasses(defaultClasses, customStyles, context);
        const numericOnly = component.type === 'number' ||
            component.type === 'phoneNumber' ||
            component.type === 'currency';
        return (_jsxs("label", { ref: "label", class: templateClasses.label, for: `${instance.id}-${component.key}`, id: `l-${instance.id}-${component.key}`, children: [_jsx("div", { children: "FROM BOOTSTRAP" }), t(component.label ?? '', { _userInput: true }), numericOnly && _jsxs("span", { class: templateClasses.hiddenForNumbers, children: [", ", t('numeric only'), ","] }), component.tooltip && (_jsx("i", { ref: "tooltip", tabindex: "0", class: templateClasses.tooltipIcon, "data-tooltip": component.tooltip }))] }));
    };
};
