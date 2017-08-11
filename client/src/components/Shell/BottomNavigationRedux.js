const initialState = {
  open: false,
};

export function openBottomNav() {
  return {
    type: 'OPEN_BOTTOM_NAV',
  };
}

export function closeBottomNav() {
  return {
    type: 'CLOSE_BOTTOM_NAV',
  };
}

export default function bottomNavigation(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_BOTTOM_NAV' : {
      return {
        ...state,
        open: true,
      };
    }

    case 'CLOSE_BOTTOM_NAV' : {
      return {
        ...state,
        open: false,
      };
    }

    default:
      return state;
  }
}
