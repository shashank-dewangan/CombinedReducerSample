export const valueState = {
  value: 0
};
export const ValueReducer = (state = valueState, action) => {
  switch (action.type) {
    case "INCREMENTVALUE":
      return { ...state, value: state.value + 1 };
    case "DECREMENTVALUE":
      return { ...state, value: state.value - 1 };
    default:
      return { ...state };
  }
};
