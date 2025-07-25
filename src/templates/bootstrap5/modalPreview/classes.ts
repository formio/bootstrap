export default {
  form: {
    label: [
      'control-label',
      '{{label.className}}'
    ],
    modalLabelValue: [
      'visually-hidden'
    ],
    modalPreviewLiveRegion: [
      'visually-hidden'
    ],
    openModal: [
      'btn',
      'btn-light',
      'btn-md',
      'open-modal-button',
      'form-control',
      '{{openModalBtnClasses || \'\'}}'
    ],
    messages: [
      'formio-errors',
      'invalid-feedback'
    ]
  },
};
