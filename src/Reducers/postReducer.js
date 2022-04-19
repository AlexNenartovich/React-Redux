const initialState = {
  items: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        items: action.payload
      };
    case "ADD_POST":
      return {
        ...state,
        items: [action.payload].concat(state.items)
      };
    default:
      return state;
  }
};

export default postReducer;
