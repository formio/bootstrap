import label from './templates/bootstrap5/label/form.js';
import inputClasses from './templates/bootstrap5/input/classes.js';
import labelClasses from './templates/bootstrap5/label/classes.js';
import componentClasses from './templates/bootstrap5/component/classes.js';
import { getFrameworkTemplates } from '@formio/standard-template'

const classes = {
  component: componentClasses,
  label: labelClasses,
  input: inputClasses
};

const templates = {
  label: {
    form: label
  },
};


const framework = getFrameworkTemplates('bootstrapnew', classes, templates);
export default framework;

