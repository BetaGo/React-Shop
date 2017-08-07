const initialState = {
  open: false,
  message: '',
};

export function hideNotice() {
  return {
    type: 'CLOSE_NOTICE',
  };
}

export default function Notice(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_NOTICE': {
      return {
        ...state,
        open: true,
        message: action.payload,
      };
    }

    case 'CLOSE_NOTICE': {
      return {
        ...state,
        open: false,
      };
    }

    default:
      return state;
  }
}
