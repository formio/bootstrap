export default {
  form: {
    componentModalWrapper: [
      'formio-component-modal-wrapper',
      'formio-component-modal-wrapper-{{component.type}}'
    ],
    modalWrapper: [
      'formio-dialog',
      'formio-dialog-theme-default',
      'component-rendering-hidden'
    ],
    modalOverlay: [
      'formio-dialog-overlay'
    ],
    modalContents: [
      'formio-dialog-content'
    ],
    label: [
      'visually-hidden'
    ],
    modalCloseButton: [
      'formio-dialog-close',
      'float-end'
    ],
    modalCloseButtonSecondary: [
      'formio-dialog-close',
      'float-end',
      'btn',
      'btn-secondary',
      'btn-sm'
    ],
    componentContent: [],
    dialogButtons: [
      'formio-dialog-buttons'
    ],
    modalClose: [
      'btn',
      'btn-secondary',
      'formio-dialog-button'
    ],
    modalSave: [
      'btn',
      'btn-success',
      'formio-dialog-button'
    ],
    modalLiveRegion: [
      'visually-hidden'
    ]
  },
};
