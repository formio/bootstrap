import builder from './builder/index.js';
import builderComponent from './builderComponent/index.js';
import builderComponents from './builderComponents/index.js';
import builderEditForm from './builderEditForm/index.js';
import builderPlaceholder from './builderPlaceholder/index.js';
import builderSidebar from './builderSidebar/index.js';
import builderSidebarGroup from './builderSidebarGroup/index.js';
import columns from './columns/index.js';
import cssClasses from './cssClasses.js';
import datagrid from './datagrid/index.js';
import day from './day/index.js';
import dialog from './dialog/index.js';
import editgrid from './editgrid/index.js';
import field from './field/index.js';
import file from './file/index.js';
import icon from './icon/index.js';
import iconClass from './iconClass.js';
import input from './input/index.js';
import label from './label/index.js';
import message from './message/index.js';
import modaldialog from './modaldialog/index.js';
import modaledit from './modaledit/index.js';
import multiValueRow from './multiValueRow/index.js';
import multiValueTable from './multiValueTable/index.js';
import panel from './panel/index.js';
import radio from './radio/index.js';
import resourceAdd from './resourceAdd/index.js';
import signature from './signature/index.js';
import survey from './survey/index.js';
import tab from './tab/index.js';
import table from './table/index.js';
import well from './well/index.js';
import wizard from './wizard/index.js';
import wizardHeader from './wizardHeader/index.js';
import wizardHeaderClassic from './wizardHeaderClassic/index.js';
import wizardHeaderVertical from './wizardHeaderVertical/index.js';
import wizardNav from './wizardNav/index.js';
import alert from './alert/index.js';
import errorsList from './errorsList/index.js';
import grid from './grid/index.js';
import pagination from './pagination/index.js';
import columnMenu from './column-menu/index.js';
import tbody from './tbody/index.js';
import paginationBottom from './pagination-bottom/index.js';

export default {
  transform(type, text) {
    if (!text) {
      return text;
    }
    switch (type) {
      case 'class':
        return this.cssClasses.hasOwnProperty(text.toString()) ? this.cssClasses[text.toString()] : text;
    }
    return text;
  },
  handleBuilderSidebarScroll(builder) {
    if (builder.scrollResizeObserver) {
      builder.scrollResizeObserver.disconnect();
    }
    builder.scrollResizeObserver = new ResizeObserver(() => {
      setTimeout(() => {
        const { form, sidebar } = builder.refs;
        const formHeight = form && form.parentNode && form.parentNode.clientHeight;
        const sidebarHeight = sidebar && sidebar.clientHeight;
        const style = sidebar && sidebar.parentNode && sidebar.parentNode.style;

        if (style && formHeight && sidebarHeight) {
          style.height = `${Math.max(sidebarHeight + 20, formHeight)}px`;
        }
      });
    });

    builder.scrollResizeObserver.observe(builder.refs.form);
    builder.scrollResizeObserver.observe(builder.refs.sidebar);
  },
  clearBuilderSidebarScroll(builder) {
    if (builder.scrollResizeObserver) {
      builder.scrollResizeObserver.disconnect();
      builder.scrollResizeObserver = null;
    }
  },
  defaultIconset: 'glyphicon',
  iconClass,
  cssClasses,
  builder,
  builderComponent,
  builderComponents,
  builderEditForm,
  builderPlaceholder,
  builderSidebar,
  builderSidebarGroup,
  columns,
  datagrid,
  day,
  dialog,
  editgrid,
  field,
  file,
  icon,
  input,
  label,
  message,
  modaldialog,
  modaledit,
  multiValueRow,
  multiValueTable,
  panel,
  radio,
  resourceAdd,
  signature,
  survey,
  tab,
  table,
  well,
  wizard,
  wizardHeader,
  wizardHeaderClassic,
  wizardHeaderVertical,
  wizardNav,
  errorsList,
  alert,
  grid,
  pagination,
  columnMenu,
  tbody,
  paginationBottom
};
