import builder from './builder';
import builderComponent from './builderComponent';
import builderComponents from './builderComponents';
import builderEditForm from './builderEditForm';
import builderPlaceholder from './builderPlaceholder';
import builderSidebar from './builderSidebar';
import builderSidebarGroup from './builderSidebarGroup';
import columns from './columns';
import cssClasses from './cssClasses';
import datagrid from './datagrid';
import day from './day';
import dialog from './dialog';
import editgrid from './editgrid';
import field from './field';
import file from './file';
import icon from './icon';
import iconClass from './iconClass';
import input from './input';
import label from './label';
import message from './message';
import modaldialog from './modaldialog';
import modaledit from './modaledit';
import multiValueRow from './multiValueRow';
import multiValueTable from './multiValueTable';
import panel from './panel';
import radio from './radio';
import resourceAdd from './resourceAdd';
import signature from './signature';
import survey from './survey';
import tab from './tab';
import table from './table';
import well from './well';
import wizard from './wizard';
import wizardHeader from './wizardHeader';
import wizardHeaderClassic from './wizardHeaderClassic';
import wizardHeaderVertical from './wizardHeaderVertical';
import wizardNav from './wizardNav';
import alert from './alert';
import errorsList from './errorsList';
import grid from './grid';
import pagination from './pagination';
import columnMenu from './column-menu';
import tbody from './tbody';
import paginationBottom from './pagination-bottom';
import selectAllContent from './selectAllContent';

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
    // @ts-ignore
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
  paginationBottom,
  selectAllContent
};
