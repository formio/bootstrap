export default {
  form: {
    panel: [
      'mb-2',
      'card',
      'border'
    ],
    header: [
      'card-header',
      '{{transform(\'class\', \'bg-\' + component.theme)}}'
    ],
    title: [
      'mb-0',
      'card-title'
    ],
    titleLight: [
      'text-light'
    ],
    collapseIcon: [
      'formio-collapse-icon',
      'text-muted'
    ],
    openIcon: [
      '{{iconClass(\'plus-square-o\')}}'
    ],
    closeIcon: [
      '{{iconClass(\'minus-square-o\')}}'
    ],
    tooltip: [
      'text-muted',
      '{{iconClass(\'question-sign\')}}'
    ],
    body: [
      'card-body'
    ]
  },
};
