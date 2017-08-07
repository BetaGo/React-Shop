const CHANGE_TITLE = 'CHANGE_TITLE';
const OPEN_DRAWER = 'OPEN_DRAWER';

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

    default:
      return state;
  }
}
