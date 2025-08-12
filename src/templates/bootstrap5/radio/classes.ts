export default {
  form: {
    radioGroup: [
      'form-radio',
      'radio'
    ],
    wrapper: [
      '{{input.attr.type}}',
      'form-check{{inline ? \'-inline\' : \'\'}}',
    ],
    wrapperLabelRight: [],
    wrapperLabelNonRight: [
      'ps-0',
    ],
    label: [
      'form-check-label',
      'label-position-{{component.optionsLabelPosition}}'
    ],
    input: [
      'form-check-input'
    ],
  },
  html: {
    radio: []
  },
};
