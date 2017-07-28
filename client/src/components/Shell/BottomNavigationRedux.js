const initialState = {
  hidden: false,
};

export default function bottomNavigation(state = initialState, action) {
  switch (action.type) {
    case 'HIDE_BOTTOM_NAV' : {
      return {
        ...state,
        hidden: true,
      };
    }

    case 'SHOW_BOTTOM_NAV' : {
      return {
        ...state,
        hidden: false,
      };
    }

    default:
      return state;
  }
}
