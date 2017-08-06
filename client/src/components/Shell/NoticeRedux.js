const initialState = {
  open: false,
  message: '',
};

export function hideNotice(){
  return {
    type: 'HIDE_NOTICE',
  };
}

export default function Notice(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_NOTICE': {
      return {
        ...state,
        open: true,
        message: action.payload,
      };
    }

    case 'HIDE_NOTICE': {
      return {
        ...state,
        open: false,
      }
    }

    default:
      return state;
  }
}
