export default {
  form: {
    radioGroup: [
      'form-radio',
      'radio'
    ],
    wrapper: [
      '{{input.attr.type}}',
      'form-check{{inline ? \'-inline\' : \'\'}}',
      '{{component.optionsLabelPosition && component.optionsLabelPosition !== \'right\' ? \'ps-0\' : \'\'}}'
    ],
    label: [
      'form-check-label',
      'label-position-{{component.optionsLabelPosition}}'
    ]
  },
  html: {
    radio: []
  },
};
