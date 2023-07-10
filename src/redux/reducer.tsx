// const reducer = (state, action) => {
//   switch (action.type){
//     case "SET_PAGE_TITLE":
//       return state;
//       default:
//         return state;
//   }
// }

const reducer = (state, action) => {
  // console.log("state", state);
  // console.log("action", action);

  const { type, payload } = action;
  switch (type) {
    case "SET_PAGE_TITLE":
      return {
        ...state,
        pageTitle: payload,
      };
    default:
      return state;
  }
};

export default reducer;
