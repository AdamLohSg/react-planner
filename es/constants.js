// ACTIONS project
export var NEW_PROJECT = 'NEW_PROJECT';
export var LOAD_PROJECT = 'LOAD_PROJECT';
export var SAVE_PROJECT = 'SAVE_PROJECT';
export var OPEN_CATALOG = 'OPEN_CATALOG';
export var SELECT_TOOL_EDIT = 'SELECT_TOOL_EDIT';
export var UNSELECT_ALL = 'UNSELECT_ALL';
export var SET_PROPERTIES = 'SET_PROPERTIES';
export var SET_ITEMS_ATTRIBUTES = 'SET_ITEMS_ATTRIBUTES';
export var SET_LINES_ATTRIBUTES = 'SET_LINES_ATTRIBUTES';
export var SET_HOLES_ATTRIBUTES = 'SET_HOLES_ATTRIBUTES';
export var REMOVE = 'REMOVE';
export var UNDO = 'UNDO';
export var ROLLBACK = 'ROLLBACK';
export var SET_PROJECT_PROPERTIES = 'SET_PROJECT_PROPERTIES';
export var OPEN_PROJECT_CONFIGURATOR = 'OPEN_PROJECT_CONFIGURATOR';
export var INIT_CATALOG = 'INIT_CATALOG';

// ACTIONS viewer2D
export var SELECT_TOOL_ZOOM_IN = 'SELECT_TOOL_ZOOM_IN';
export var SELECT_TOOL_ZOOM_OUT = 'SELECT_TOOL_ZOOM_OUT';
export var SELECT_TOOL_PAN = 'SELECT_TOOL_PAN';
export var UPDATE_2D_CAMERA = 'UPDATE_2D_CAMERA';

//ACTIONS viewer3D
export var SELECT_TOOL_3D_VIEW = 'SELECT_TOOL_3D_VIEW';
export var SELECT_TOOL_3D_FIRST_PERSON = 'SELECT_TOOL_3D_FIRST_PERSON';

//ACTIONS items
export var SELECT_TOOL_DRAWING_ITEM = 'SELECT_TOOL_DRAWING_ITEM';
export var UPDATE_DRAWING_ITEM = 'UPDATE_DRAWING_ITEM';
export var END_DRAWING_ITEM = 'END_DRAWING_ITEM';
export var BEGIN_DRAGGING_ITEM = 'BEGIN_DRAGGING_ITEM';
export var UPDATE_DRAGGING_ITEM = 'UPDATE_DRAGGING_ITEM';
export var END_DRAGGING_ITEM = 'END_DRAGGING_ITEM';
export var BEGIN_ROTATING_ITEM = 'BEGIN_ROTATING_ITEM';
export var UPDATE_ROTATING_ITEM = 'UPDATE_ROTATING_ITEM';
export var END_ROTATING_ITEM = 'END_ROTATING_ITEM';

//ACTION drawings
export var SELECT_HOLE = 'SELECT_HOLE';
export var SELECT_AREA = 'SELECT_AREA';
export var SELECT_ITEM = 'SELECT_ITEM';
export var SELECT_LINE = 'SELECT_LINE';
export var SELECT_TOOL_DRAWING_LINE = 'SELECT_TOOL_DRAWING_LINE';
export var BEGIN_DRAWING_LINE = 'BEGIN_DRAWING_LINE';
export var UPDATE_DRAWING_LINE = 'UPDATE_DRAWING_LINE';
export var END_DRAWING_LINE = 'END_DRAWING_LINE';
export var SELECT_TOOL_DRAWING_HOLE = 'SELECT_TOOL_DRAWING_HOLE';
export var UPDATE_DRAWING_HOLE = 'UPDATE_DRAWING_HOLE';
export var END_DRAWING_HOLE = 'END_DRAWING_HOLE';
export var BEGIN_DRAGGING_LINE = 'BEGIN_DRAGGING_LINE';
export var UPDATE_DRAGGING_LINE = 'UPDATE_DRAGGING_LINE';
export var END_DRAGGING_LINE = 'END_DRAGGING_LINE';
export var SELECT_TOOL_UPLOAD_IMAGE = 'SELECT_TOOL_UPLOAD_IMAGE';
export var BEGIN_UPLOADING_IMAGE = 'BEGIN_UPLOADING_IMAGE';
export var END_UPLOADING_IMAGE = 'END_UPLOADING_IMAGE';
export var BEGIN_FITTING_IMAGE = 'BEGIN_FITTING_IMAGE';
export var END_FITTING_IMAGE = 'END_FITTING_IMAGE';
export var BEGIN_DRAGGING_HOLE = 'BEGIN_DRAGGING_HOLE';
export var UPDATE_DRAGGING_HOLE = 'UPDATE_DRAGGING_HOLE';
export var END_DRAGGING_HOLE = 'END_DRAGGING_HOLE';

//ACTIONS vertices
export var BEGIN_DRAGGING_VERTEX = 'BEGIN_DRAGGING_VERTEX';
export var UPDATE_DRAGGING_VERTEX = 'UPDATE_DRAGGING_VERTEX';
export var END_DRAGGING_VERTEX = 'END_DRAGGING_VERTEX';

//ACTIONS scene
export var SET_LAYER_PROPERTIES = 'SET_LAYER_PROPERTIES';
export var ADD_LAYER = 'ADD_LAYER';
export var SELECT_LAYER = 'SELECT_LAYER';
export var OPEN_LAYER_CONFIGURATOR = 'OPEN_LAYER_CONFIGURATOR';
export var REMOVE_LAYER = 'REMOVE_LAYER';

//GROUPING ACTIONS
export var PROJECT_ACTIONS = {
  NEW_PROJECT: NEW_PROJECT,
  LOAD_PROJECT: LOAD_PROJECT,
  SAVE_PROJECT: SAVE_PROJECT,
  OPEN_CATALOG: OPEN_CATALOG,
  SELECT_TOOL_EDIT: SELECT_TOOL_EDIT,
  UNSELECT_ALL: UNSELECT_ALL,
  SET_PROPERTIES: SET_PROPERTIES,
  SET_ITEMS_ATTRIBUTES: SET_ITEMS_ATTRIBUTES,
  SET_LINES_ATTRIBUTES: SET_LINES_ATTRIBUTES,
  SET_HOLES_ATTRIBUTES: SET_HOLES_ATTRIBUTES,
  REMOVE: REMOVE,
  UNDO: UNDO,
  ROLLBACK: ROLLBACK,
  SET_PROJECT_PROPERTIES: SET_PROJECT_PROPERTIES,
  OPEN_PROJECT_CONFIGURATOR: OPEN_PROJECT_CONFIGURATOR,
  INIT_CATALOG: INIT_CATALOG
};

export var VIEWER2D_ACTIONS = {
  SELECT_TOOL_ZOOM_IN: SELECT_TOOL_ZOOM_IN,
  SELECT_TOOL_ZOOM_OUT: SELECT_TOOL_ZOOM_OUT,
  SELECT_TOOL_PAN: SELECT_TOOL_PAN,
  UPDATE_2D_CAMERA: UPDATE_2D_CAMERA
};

export var VIEWER3D_ACTIONS = {
  SELECT_TOOL_3D_VIEW: SELECT_TOOL_3D_VIEW,
  SELECT_TOOL_3D_FIRST_PERSON: SELECT_TOOL_3D_FIRST_PERSON
};

export var ITEMS_ACTIONS = {
  SELECT_ITEM: SELECT_ITEM,
  SELECT_TOOL_DRAWING_ITEM: SELECT_TOOL_DRAWING_ITEM,
  UPDATE_DRAWING_ITEM: UPDATE_DRAWING_ITEM,
  END_DRAWING_ITEM: END_DRAWING_ITEM,
  BEGIN_DRAGGING_ITEM: BEGIN_DRAGGING_ITEM,
  UPDATE_DRAGGING_ITEM: UPDATE_DRAGGING_ITEM,
  END_DRAGGING_ITEM: END_DRAGGING_ITEM,
  BEGIN_ROTATING_ITEM: BEGIN_ROTATING_ITEM,
  UPDATE_ROTATING_ITEM: UPDATE_ROTATING_ITEM,
  END_ROTATING_ITEM: END_ROTATING_ITEM
};

export var HOLE_ACTIONS = {
  SELECT_HOLE: SELECT_HOLE,
  SELECT_TOOL_DRAWING_HOLE: SELECT_TOOL_DRAWING_HOLE,
  UPDATE_DRAWING_HOLE: UPDATE_DRAWING_HOLE,
  END_DRAWING_HOLE: END_DRAWING_HOLE,
  BEGIN_DRAGGING_HOLE: BEGIN_DRAGGING_HOLE,
  UPDATE_DRAGGING_HOLE: UPDATE_DRAGGING_HOLE,
  END_DRAGGING_HOLE: END_DRAGGING_HOLE
};

export var LINE_ACTIONS = {
  SELECT_LINE: SELECT_LINE,
  SELECT_TOOL_DRAWING_LINE: SELECT_TOOL_DRAWING_LINE,
  BEGIN_DRAWING_LINE: BEGIN_DRAWING_LINE,
  UPDATE_DRAWING_LINE: UPDATE_DRAWING_LINE,
  END_DRAWING_LINE: END_DRAWING_LINE,
  BEGIN_DRAGGING_LINE: BEGIN_DRAGGING_LINE,
  UPDATE_DRAGGING_LINE: UPDATE_DRAGGING_LINE,
  END_DRAGGING_LINE: END_DRAGGING_LINE
};

export var AREA_ACTIONS = {
  SELECT_AREA: SELECT_AREA
};

export var SCENE_ACTIONS = {
  ADD_LAYER: ADD_LAYER,
  SET_LAYER_PROPERTIES: SET_LAYER_PROPERTIES,
  SELECT_LAYER: SELECT_LAYER,
  OPEN_LAYER_CONFIGURATOR: OPEN_LAYER_CONFIGURATOR,
  REMOVE_LAYER: REMOVE_LAYER
};

export var VERTEX_ACTIONS = {
  BEGIN_DRAGGING_VERTEX: BEGIN_DRAGGING_VERTEX,
  UPDATE_DRAGGING_VERTEX: UPDATE_DRAGGING_VERTEX,
  END_DRAGGING_VERTEX: END_DRAGGING_VERTEX
};

//MODES
export var MODE_IDLE = 'IDLE';
export var MODE_2D_ZOOM_IN = 'MODE_2D_ZOOM_IN';
export var MODE_2D_ZOOM_OUT = 'MODE_2D_ZOOM_OUT';
export var MODE_2D_PAN = 'MODE_2D_PAN';
export var MODE_3D_VIEW = 'MODE_3D_VIEW';
export var MODE_3D_FIRST_PERSON = 'MODE_3D_FIRST_PERSON';
export var MODE_WAITING_DRAWING_LINE = 'MODE_WAITING_DRAWING_LINE';
export var MODE_DRAGGING_LINE = 'MODE_DRAGGING_LINE';
export var MODE_DRAGGING_VERTEX = 'MODE_DRAGGING_VERTEX';
export var MODE_DRAGGING_ITEM = 'MODE_DRAGGING_ITEM';
export var MODE_DRAGGING_HOLE = 'MODE_DRAGGING_HOLE';
export var MODE_DRAWING_LINE = 'MODE_DRAWING_LINE';
export var MODE_DRAWING_HOLE = 'MODE_DRAWING_HOLE';
export var MODE_DRAWING_ITEM = 'MODE_DRAWING_ITEM';
export var MODE_ROTATING_ITEM = 'MODE_ROTATING_ITEM';
export var MODE_UPLOADING_IMAGE = 'MODE_UPLOADING_IMAGE';
export var MODE_FITTING_IMAGE = 'MODE_FITTING_IMAGE';
export var MODE_VIEWING_CATALOG = 'MODE_VIEWING_CATALOG';
export var MODE_CONFIGURING_PROJECT = 'MODE_CONFIGURING_PROJECT';
export var MODE_CONFIGURING_LAYER = 'MODE_CONFIGURING_LAYER';

//UNITS
export var UNIT_MILLIMETER = 'mm';
export var UNIT_CENTIMETER = 'cm';
export var UNIT_METER = 'm';
export var UNIT_INCH = 'in';
export var UNIT_FOOT = 'ft';
export var UNIT_MILE = 'mi';

export var UNITS_LENGTH = [UNIT_MILLIMETER, UNIT_CENTIMETER, UNIT_METER, UNIT_INCH, UNIT_FOOT, UNIT_MILE];

export var EPSILON = 1e-6;