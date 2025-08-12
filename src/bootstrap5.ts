import { getFrameworkTemplates } from '@formio/standard-template';
import addressClasses from './templates/bootstrap5/address/classes.js';
import builderClasses from './templates/bootstrap5/builder/classes.js';
import builderComponentClasses from './templates/bootstrap5/builderComponent/classes.js';
import builderComponentsClasses from './templates/bootstrap5/builderComponents/classes.js';
import builderEditFormClasses from './templates/bootstrap5/builderEditForm/classes.js';
import builderPlaceholderClasses from './templates/bootstrap5/builderPlaceholder/classes.js';
import builderSidebarClasses from './templates/bootstrap5/builderSidebar/classes.js';
import builderSidebarGroupClasses from './templates/bootstrap5/builderSidebarGroup/classes.js';
import builderWizardClasses from './templates/bootstrap5/builderWizard/classes.js';
import buttonClasses from './templates/bootstrap5/button/classes.js';
import checkboxClasses from './templates/bootstrap5/checkbox/classes.js';
import columnsClasses from './templates/bootstrap5/columns/classes.js';
import componentClasses from './templates/bootstrap5/component/classes.js';
import componentModalClasses from './templates/bootstrap5/componentModal/classes.js';
import componentsClasses from './templates/bootstrap5/components/classes.js';
import tableComponentsClasses from './templates/bootstrap5/tableComponents/classes.js';
import containerClasses from './templates/bootstrap5/container/classes.js';
import datagridClasses from './templates/bootstrap5/datagrid/classes.js';
import dayClasses from './templates/bootstrap5/day/classes.js';
import dialogClasses from './templates/bootstrap5/dialog/classes.js';
import editgridClasses from './templates/bootstrap5/editgrid/classes.js';
import editgridTableClasses from './templates/bootstrap5/editgridTable/classes.js';
import fieldClasses from './templates/bootstrap5/field/classes.js';
import fieldsetClasses from './templates/bootstrap5/fieldset/classes.js';
import fileClasses from './templates/bootstrap5/file/classes.js';
import htmlClasses from './templates/bootstrap5/html/classes.js';
import iconClasses from './templates/bootstrap5/icon/classes.js';
import inputClasses from './templates/bootstrap5/input/classes.js';
import labelClasses from './templates/bootstrap5/label/classes.js';
import loaderClasses from './templates/bootstrap5/loader/classes.js';
import loadingClasses from './templates/bootstrap5/loading/classes.js';
import mapClasses from './templates/bootstrap5/map/classes.js';
import messageClasses from './templates/bootstrap5/message/classes.js';
import modaldialogClasses from './templates/bootstrap5/modaldialog/classes.js';
import modaleditClasses from './templates/bootstrap5/modaledit/classes.js';
import modalPreviewClasses from './templates/bootstrap5/modalPreview/classes.js';
import multipleMasksInputClasses from './templates/bootstrap5/multipleMasksInput/classes.js';
import multiValueRowClasses from './templates/bootstrap5/multiValueRow/classes.js';
import multiValueTableClasses from './templates/bootstrap5/multiValueTable/classes.js';
import panelClasses from './templates/bootstrap5/panel/classes.js';
import pdfClasses from './templates/bootstrap5/pdf/classes.js';
import pdfBuilderClasses from './templates/bootstrap5/pdfBuilder/classes.js';
import pdfBuilderUploadClasses from './templates/bootstrap5/pdfBuilderUpload/classes.js';
import radioClasses from './templates/bootstrap5/radio/classes.js';
import resourceAddClasses from './templates/bootstrap5/resourceAdd/classes.js';
import selectClasses from './templates/bootstrap5/select/classes.js';
import selectOptionClasses from './templates/bootstrap5/selectOption/classes.js';
import signatureClasses from './templates/bootstrap5/signature/classes.js';
import surveyClasses from './templates/bootstrap5/survey/classes.js';
import tabClasses from './templates/bootstrap5/tab/classes.js';
import tableClasses from './templates/bootstrap5/table/classes.js';
import treeClasses from './templates/bootstrap5/tree/classes.js';
import treePartialsClasses from './templates/bootstrap5/tree/partials/classes.js';
import webformClasses from './templates/bootstrap5/webform/classes.js';
import wellClasses from './templates/bootstrap5/well/classes.js';
import wizardClasses from './templates/bootstrap5/wizard/classes.js';
import wizardHeaderClasses from './templates/bootstrap5/wizardHeader/classes.js';
import wizardHeaderClassicClasses from './templates/bootstrap5/wizardHeaderClassic/classes.js';
import wizardHeaderVerticalClasses from './templates/bootstrap5/wizardHeaderVertical/classes.js';
import wizardNavClasses from './templates/bootstrap5/wizardNav/classes.js';
import errorsListClasses from './templates/bootstrap5/errorsList/classes.js';
import alertClasses from './templates/bootstrap5/alert/classes.js';
import gridClasses from './templates/bootstrap5/grid/classes.js';
import paginationClasses from './templates/bootstrap5/pagination/classes.js';
import columnMenuClasses from './templates/bootstrap5/column-menu/classes.js';
import tbodyClasses from './templates/bootstrap5/tbody/classes.js';
import paginationBottomClasses from './templates/bootstrap5/pagination-bottom/classes.js';
import selectAllContentClasses from './templates/bootstrap5/selectAllContent/classes.js';

const classes = {
  address: addressClasses,
  builder: builderClasses,
  builderComponent: builderComponentClasses,
  builderComponents: builderComponentsClasses,
  builderEditForm: builderEditFormClasses,
  builderPlaceholder: builderPlaceholderClasses,
  builderSidebar: builderSidebarClasses,
  builderSidebarGroup: builderSidebarGroupClasses,
  builderWizard: builderWizardClasses,
  button: buttonClasses,
  checkbox: checkboxClasses,
  columns: columnsClasses,
  component: componentClasses,
  componentModal: componentModalClasses,
  components: componentsClasses,
  tableComponents: tableComponentsClasses,
  container: containerClasses,
  datagrid: datagridClasses,
  day: dayClasses,
  dialog: dialogClasses,
  editgrid: editgridClasses,
  editgridTable: editgridTableClasses,
  field: fieldClasses,
  fieldset: fieldsetClasses,
  file: fileClasses,
  html: htmlClasses,
  icon: iconClasses,
  input: inputClasses,
  label: labelClasses,
  loader: loaderClasses,
  loading: loadingClasses,
  map: mapClasses,
  message: messageClasses,
  modaledit: modaleditClasses,
  modaldialog: modaldialogClasses,
  modalPreview: modalPreviewClasses,
  multipleMasksInput: multipleMasksInputClasses,
  multiValueRow: multiValueRowClasses,
  multiValueTable: multiValueTableClasses,
  panel: panelClasses,
  pdf: pdfClasses,
  pdfBuilder: pdfBuilderClasses,
  pdfBuilderUpload: pdfBuilderUploadClasses,
  radio: radioClasses,
  resourceAdd: resourceAddClasses,
  select: selectClasses,
  selectOption: selectOptionClasses,
  signature: signatureClasses,
  survey: surveyClasses,
  tab: tabClasses,
  table: tableClasses,
  tbody: tbodyClasses,
  tree: treeClasses,
  ...treePartialsClasses,
  webform: webformClasses,
  well: wellClasses,
  wizard: wizardClasses,
  wizardHeader: wizardHeaderClasses,
  wizardHeaderClassic: wizardHeaderClassicClasses,
  wizardHeaderVertical: wizardHeaderVerticalClasses,
  wizardNav: wizardNavClasses,
  errorsList: errorsListClasses,
  alert: alertClasses,
  grid: gridClasses,
  pagination: paginationClasses,
  columnMenu: columnMenuClasses,
  paginationBottom: paginationBottomClasses,
  selectAllContent: selectAllContentClasses,
};

const templates = {
};


const framework = getFrameworkTemplates('bootstrapnew', classes, templates);
export default framework;

