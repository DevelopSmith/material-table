"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.defaultProps = void 0;

var _objectSpread2 = _interopRequireDefault(
  require("@babel/runtime/helpers/objectSpread")
);

var _extends2 = _interopRequireDefault(
  require("@babel/runtime/helpers/extends")
);

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(
  require("@material-ui/core/CircularProgress")
);

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _TablePagination = _interopRequireDefault(
  require("@material-ui/core/TablePagination")
);

var MComponents = _interopRequireWildcard(require("./components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _AddBox = _interopRequireDefault(require("@material-ui/icons/AddBox"));

var _ArrowDownward = _interopRequireDefault(
  require("@material-ui/icons/ArrowDownward")
);

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _ChevronLeft = _interopRequireDefault(
  require("@material-ui/icons/ChevronLeft")
);

var _ChevronRight = _interopRequireDefault(
  require("@material-ui/icons/ChevronRight")
);

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _DeleteOutline = _interopRequireDefault(
  require("@material-ui/icons/DeleteOutline")
);

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _FilterList = _interopRequireDefault(
  require("@material-ui/icons/FilterList")
);

var _FirstPage = _interopRequireDefault(
  require("@material-ui/icons/FirstPage")
);

var _LastPage = _interopRequireDefault(require("@material-ui/icons/LastPage"));

var _Remove = _interopRequireDefault(require("@material-ui/icons/Remove"));

var _SaveAlt = _interopRequireDefault(require("@material-ui/icons/SaveAlt"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _ViewColumn = _interopRequireDefault(
  require("@material-ui/icons/ViewColumn")
);

var _DragHandle = _interopRequireDefault(
  require("@material-ui/icons/DragHandle")
);

var _Replay = _interopRequireDefault(require("@material-ui/icons/Replay"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

var OverlayLoading = function OverlayLoading(props) {
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      style: {
        display: "table",
        width: "100%",
        height: "100%",
        backgroundColor: (0, _styles.alpha)(
          props.theme.palette.background.paper,
          0.7
        ),
      },
    },
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        style: {
          display: "table-cell",
          width: "100%",
          height: "100%",
          verticalAlign: "middle",
          textAlign: "center",
        },
      },
      /*#__PURE__*/ _react.default.createElement(
        _CircularProgress.default,
        null
      )
    )
  );
};

OverlayLoading.propTypes = {
  theme: _propTypes.default.any,
};

var OverlayError = function OverlayError(props) {
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      style: {
        display: "table",
        width: "100%",
        height: "100%",
        backgroundColor: (0, _styles.alpha)(
          props.theme.palette.background.paper,
          0.7
        ),
      },
    },
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        style: {
          display: "table-cell",
          width: "100%",
          height: "100%",
          verticalAlign: "middle",
          textAlign: "center",
        },
      },
      /*#__PURE__*/ _react.default.createElement(
        "span",
        null,
        props.error.message
      ),
      " ",
      /*#__PURE__*/ _react.default.createElement(props.icon, {
        onClick: props.retry,
        style: {
          cursor: "pointer",
          position: "relative",
          top: 5,
        },
      })
    )
  );
};

OverlayError.propTypes = {
  error: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.string,
  ]),
  retry: _propTypes.default.func,
  theme: _propTypes.default.any,
  icon: _propTypes.default.any,
};

var Container = function Container(props) {
  return /*#__PURE__*/ _react.default.createElement(
    _Paper.default,
    (0, _extends2.default)(
      {
        elevation: 2,
      },
      props
    )
  );
};

var defaultProps = {
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
    Pagination: _TablePagination.default,
    Row: MComponents.MTableBodyRow,
    Toolbar: MComponents.MTableToolbar,
  },
  data: [],
  icons: {
    /* eslint-disable react/display-name */
    Add: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _AddBox.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    Check: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _Check.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    Clear: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _Clear.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    Delete: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _DeleteOutline.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    DetailPanel: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _ChevronRight.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    Edit: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _Edit.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    Export: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _SaveAlt.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    Filter: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _FilterList.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    FirstPage: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _FirstPage.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    LastPage: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _LastPage.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    NextPage: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _ChevronRight.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    PreviousPage: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _ChevronLeft.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    ResetSearch: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _Clear.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    Resize: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _DragHandle.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
          style: (0, _objectSpread2.default)({}, props.style, {
            transform: "rotate(90deg)",
          }),
        })
      );
    }),
    Search: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _Search.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    SortArrow: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _ArrowDownward.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    ThirdStateCheck: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _Remove.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    ViewColumn: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _ViewColumn.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
    Retry: _react.default.forwardRef(function (props, ref) {
      return /*#__PURE__*/ _react.default.createElement(
        _Replay.default,
        (0, _extends2.default)({}, props, {
          ref: ref,
        })
      );
    }),
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
exports.defaultProps = defaultProps;
