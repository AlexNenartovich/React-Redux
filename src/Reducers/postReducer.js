const initialState = {
  items: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        items: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
