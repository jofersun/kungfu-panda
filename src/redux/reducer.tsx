// const reducer = (state, action) => {
//   switch (action.type){
//     case "SET_PAGE_TITLE":
//       return state;
//       default:
//         return state;
//   }
// }

const reducer = (state, action) => {
  if (action.type === "SET_PAGE_TITLE") {
    return {
      ...state,
      pageTitle: action.payload,
    };
  }
  return state;

  // const { type, payload } = action;
  // switch (type) {
  //   case "SET_PAGE_TITLE":
  //     return {
  //       ...state,
  //       pageTitle: payload,
  //     };
  //   default:
  //     return state;
  // }
};

export default reducer;
