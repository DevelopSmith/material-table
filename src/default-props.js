import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import * as MComponents from "./components";
import PropTypes from "prop-types";
import { alpha } from "@material-ui/core/styles";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import DragHandle from "@material-ui/icons/DragHandle";
import Replay from "@material-ui/icons/Replay";

const OverlayLoading = (props) => (
  <div
    style={{
      display: "table",
      width: "100%",
      height: "100%",
      backgroundColor: alpha(props.theme.palette.background.paper, 0.7),
    }}
  >
    <div
      style={{
        display: "table-cell",
        width: "100%",
        height: "100%",
        verticalAlign: "middle",
        textAlign: "center",
      }}
    >
      <CircularProgress />
    </div>
  </div>
);
OverlayLoading.propTypes = {
  theme: PropTypes.any,
};

const OverlayError = (props) => (
  <div
    style={{
      display: "table",
      width: "100%",
      height: "100%",
      backgroundColor: alpha(props.theme.palette.background.paper, 0.7),
    }}
  >
    <div
      style={{
        display: "table-cell",
        width: "100%",
        height: "100%",
        verticalAlign: "middle",
        textAlign: "center",
      }}
    >
      <span>{props.error.message}</span>{" "}
      <props.icon
        onClick={props.retry}
        style={{ cursor: "pointer", position: "relative", top: 5 }}
      />
    </div>
  </div>
);
OverlayError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  retry: PropTypes.func,
  theme: PropTypes.any,
  icon: PropTypes.any,
};

const Container = (props) => <Paper elevation={2} {...props} />;

export const defaultProps = {
  actions: [],
  classes: {},
  columns: [],
  components: {
    Action: MComponents.MTableAction,
    Actions: MComponents.MTableActions,
    Body: MComponents.MTableBody,
    Cell: MComponents.MTableCell,
    Container: Container,
    EditCell: MComponents.MTableEditCell,
    EditField: MComponents.MTableEditField,
    EditRow: MComponents.MTableEditRow,
    FilterRow: MComponents.MTableFilterRow,
    Groupbar: MComponents.MTableGroupbar,
    GroupRow: MComponents.MTableGroupRow,
    Header: MComponents.MTableHeader,
    OverlayLoading: OverlayLoading,
    OverlayError: OverlayError,
    Pagination: TablePagination,
    Row: MComponents.MTableBodyRow,
    Toolbar: MComponents.MTableToolbar,
  },
  data: [],
  icons: {
    /* eslint-disable react/display-name */
    Add: React.forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: React.forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: React.forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: React.forwardRef((props, ref) => (
      <DeleteOutline {...props} ref={ref} />
    )),
    DetailPanel: React.forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: React.forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: React.forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: React.forwardRef((props, ref) => (
      <FilterList {...props} ref={ref} />
    )),
    FirstPage: React.forwardRef((props, ref) => (
      <FirstPage {...props} ref={ref} />
    )),
    LastPage: React.forwardRef((props, ref) => (
      <LastPage {...props} ref={ref} />
    )),
    NextPage: React.forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    PreviousPage: React.forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: React.forwardRef((props, ref) => (
      <Clear {...props} ref={ref} />
    )),
    Resize: React.forwardRef((props, ref) => (
      <DragHandle
        {...props}
        ref={ref}
        style={{ ...props.style, transform: "rotate(90deg)" }}
      />
    )),
    Search: React.forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: React.forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: React.forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: React.forwardRef((props, ref) => (
      <ViewColumn {...props} ref={ref} />
    )),
    Retry: React.forwardRef((props, ref) => <Replay {...props} ref={ref} />),
    /* eslint-enable react/display-name */
  },
  isLoading: false,
  title: "Table Title",
  options: {
    actionsColumnIndex: 0,
    addRowPosition: "last",
    columnsButton: false,
    detailPanelType: "multiple",
    debounceInterval: 200,
    doubleHorizontalScroll: false,
    emptyRowsWhenPaging: true,
    exportAllData: false,
    exportButton: false,
    exportDelimiter: ",",
    filtering: false,
    groupTitle: false,
    header: true,
    headerSelectionProps: {},
    hideFilterIcons: false,
    loadingType: "overlay",
    padding: "default",
    searchAutoFocus: false,
    paging: true,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    paginationType: "normal",
    paginationPosition: "bottom",
    showEmptyDataSourceMessage: true,
    showFirstLastPageButtons: true,
    showSelectAllCheckbox: true,
    search: true,
    showTitle: true,
    showTextRowsSelected: true,
    tableLayout: "auto",
    toolbarButtonAlignment: "right",
    searchFieldAlignment: "right",
    searchFieldStyle: {},
    searchFieldVariant: "standard",
    selection: false,
    selectionProps: {},
    sorting: true,
    toolbar: true,
    defaultExpanded: false,
    detailPanelColumnAlignment: "left",
    thirdSortClick: true,
    overflowY: "auto",
  },
  localization: {
    error: "Data could not be retrieved",
    grouping: {
      groupedBy: "Grouped By:",
      placeholder: "Drag headers here to group by",
    },
    pagination: {
      labelDisplayedRows: "{from}-{to} of {count}",
      labelRowsPerPage: "Rows per page:",
      labelRowsSelect: "rows",
    },
    toolbar: {},
    header: {},
    body: {
      filterRow: {},
      editRow: {
        saveTooltip: "Save",
        cancelTooltip: "Cancel",
        deleteText: "Are you sure you want to delete this row?",
      },
      addTooltip: "Add",
      deleteTooltip: "Delete",
      editTooltip: "Edit",
      bulkEditTooltip: "Edit All",
      bulkEditApprove: "Save all changes",
      bulkEditCancel: "Discard all changes",
    },
  },
  style: {},
};
