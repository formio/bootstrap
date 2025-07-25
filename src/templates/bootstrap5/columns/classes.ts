export default {
  form: {
    column: [
      // TODO: some classes here have to be interpolated inside of the cycle
      'col-{{column.size}}-{{column.currentWidth}}',
      'offset-{{column.size}}-{{column.offset}}'
    ]
  },
};
