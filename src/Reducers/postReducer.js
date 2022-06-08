const initialState = {
  items: [],
  favorites: []
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
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.concat([action.payload])
      };
    case "DELETE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id)
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        )
      };
    case "FAVORITES":
      return {
        ...state,
        favorites: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
