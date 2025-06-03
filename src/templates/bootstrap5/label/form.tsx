import { Component } from '@formio/core';
import {templateUtils } from '@formio/standard-template';

type LabelContext = {
  component: Component;
  iconClass: (icon: string) => string;
  t: (val: string, options?: { _userInput: boolean }) => string;
  instance: { id: string };
  customStyles?: {
    [refName: string]: {
      classes: string[] | undefined,
      override?: boolean
    }
  };
};

type DefaultClasses = {
  [refName: string]: string[] | undefined,
} | undefined;

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

export default (classes: DefaultClasses) => {
  return (context: LabelContext) => {
    const defaultClasses: DefaultClasses = classes;
    const { component, t, instance, customStyles } = context;
    const templateClasses = templateUtils.getTemplateClasses(defaultClasses, customStyles, context);
    const numericOnly =
      component.type === 'number' ||
      component.type === 'phoneNumber' ||
      component.type === 'currency';

    return (
      <label
        ref="label"
        class={templateClasses.label}
        for={`${instance.id}-${component.key}`}
        id={`l-${instance.id}-${component.key}`}
      >
        <div>FROM BOOTSTRAP</div>
        {t(component.label ?? '', { _userInput: true })}
        {numericOnly && <span class={templateClasses.hiddenForNumbers}>, {t('numeric only')},</span>}
        {component.tooltip && (
          <i
            ref="tooltip"
            tabindex="0"
            class={templateClasses.tooltipIcon}
            data-tooltip={component.tooltip}
          ></i>
        )}
      </label>
    );
  }
};
