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
        items: state.items.concat([action.payload])
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.concat([action.payload])
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
