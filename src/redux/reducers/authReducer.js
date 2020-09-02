const initialState = {
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state };
    case "SIGN_IN_ERROR":
      return { ...state, error: action.payload.error };
    case "CREATE_USER":
      return { ...state };
    case "SIGN_UP_ERROR":
      return { ...state, error: action.payload.error };
    case "SIGN_OUT":
      return { ...state, error: false };

    default:
      return state;
  }
};

export default authReducer;
