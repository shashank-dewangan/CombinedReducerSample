export const indexState = {
  index: 0
};
export const IndexReducer = (state = indexState, action) => {
  switch (action.type) {
    case "INCREMENTINDEX":
      return { ...state, index: state.index + 1 };
    case "DECREMENTINDEX":
      return { ...state, index: state.index - 1 };
    default:
      return { ...state };
  }
};
