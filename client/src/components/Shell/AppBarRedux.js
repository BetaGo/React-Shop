const CHANGE_TITLE = 'CHANGE_TITLE';

const initialState = {
  title: ' ',
};

export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    payload: title,
  };
}

export default function AppBar(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TITLE': {
      return {
        ...state,
        title: action.payload,
      };
    }

    default:
      return state;
  }
}
