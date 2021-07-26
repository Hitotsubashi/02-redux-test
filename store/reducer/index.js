const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMOJIS":
      return action.emojis;
    default:
      return state;
  }
};

export default reducer;
