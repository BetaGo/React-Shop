const initialState = {
  showAppBar: true,
  showBottomNav: true,
  showLeftDrawer: false,
};

export function showAppBar() {
  return {
    type: 'SHOW_APP_BAR',
  };
}

export function showBottomNav() {
  return {
    type: 'SHOW_BOTTOM_NAV',
  };
}

export function showLeftDrawer() {
  return {
    type: 'SHOW_LEFT_DRAWER',
  };
}

export function hideAppBar() {
  return {
    type: 'HIDE_APP_BAR',
  };
}

export function hideBottomNav() {
  return {
    type: 'HIDE_BOTTOM_NAV',
  };
}

export function hideLeftDrawer() {
  return {
    type: 'HIDE_LEFT_DRAWER',
  };
}


export default function frame(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_APP_BAR': {
      return {
        ...state,
        showAppBar: true,
      };
    }

    case 'SHOW_BOTTOM_NAV': {
      return {
        ...state,
        showBottomNav: true,
      };
    }

    case 'SHOW_LEFT_DRAWER': {
      return {
        ...state,
        showLeftDrawer: true,
      };
    }

    case 'HIDE_APP_BAR': {
      return {
        ...state,
        showAppBar: false,
      };
    }

    case 'HIDE_BOTTOM_NAV': {
      return {
        ...state,
        showBottomNav: false,
      };
    }

    case 'HIDE_LEFT_DRAWER': {
      return {
        ...state,
        showLeftDrawer: false,
      };
    }

    default:
      return state;
  }
}
