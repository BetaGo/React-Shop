const CHANGE_TITLE = 'CHANGE_TITLE';
const OPEN_DRAWER = 'OPEN_DRAWER';
const CHANGE_APP_BAR_TOP_POSITION = 'CHANGE_APP_BAR_TOP_POSITION';
const OPEN_APP_BAR = 'OPEN_APP_BAR';
const CLOSE_APP_BAR = 'CLOSE_APP_BAR';

const initialState = {
  title: ' ',
  open: true,
};

export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    payload: title,
  };
}

export function handleMenu(e) {
  e.stopPropagation();
  e.preventDefault();
  return {
    type: OPEN_DRAWER,
  };
}

export function handleSearch() {
  // TODO:
}

export default function AppBar(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE: {
      return {
        ...state,
        title: action.payload,
      };
    }

    case CHANGE_APP_BAR_TOP_POSITION: {
      return {
        ...state,
        top: action.payload,
      };
    }

    case OPEN_APP_BAR: {
      return {
        ...state,
        open: true,
      };
    }

    case CLOSE_APP_BAR: {
      return {
        ...state,
        open: false,
      };
    }

    default:
      return state;
  }
}
