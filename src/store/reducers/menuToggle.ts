interface action {
  type: string;
}

const initialState = {
  toggle: false,
};

const menuToggle = (state = initialState, action: action) => {
  switch (action.type) {
    case "MENU_TOGGLE_ON":
      return {
        ...state,
        toggle: true,
      };
    case "MENU_TOGGLE_OFF":
      return {
        ...state,
        toggle: false,
      };
    default:
      return state;
  }
};

export default menuToggle;
