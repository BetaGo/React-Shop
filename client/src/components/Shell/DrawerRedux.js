const initialState = {
  open: false,
};

export function handleClose() {
  return {
    type: 'CLOSE_DRAWER',
  };
}

export default function drawer(state = initialState, action) {
  switch (action.type) {
    case 'CLOSE_DRAWER': {
      return {
        ...state,
        open: false,
      };
    }

    case 'OPEN_DRAWER': {
      return {
        ...state,
        open: true,
      };
    }

    default:
      return state;
  }
}
