export default (iconset, name, spinning) => {
  if (iconset === 'fa') {
    switch (name) {
      case 'save':
        name = 'download';
        break;
      case 'zoom-in':
        name = 'search-plus';
        break;
      case 'zoom-out':
        name = 'search-minus';
        break;
      case 'question-sign':
        name = 'question-circle';
        break;
      case 'remove-circle':
      case 'circle-xmark':
        name = 'times-circle-o';
        break;
      case 'new-window':
        name = 'window-restore';
        break;
      case 'move':
        name = 'arrows';
        break;
      case 'time':
        name = 'clock-o';
        break;
      case 'ok-sign':
        name = 'check-circle';
        break;
      case 'remove-sign':
        name = 'times-circle';
        break;
    }
  }

  return spinning ? `${iconset} ${iconset}-${name} ${iconset}-spin` : `${iconset} ${iconset}-${name}`;
};
