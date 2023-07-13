import { PageTitleType } from "./action";

const reducer = (state: any, action: PageTitleType) => {
  // console.log("current state", state);
  // console.log("current action", action);

  // const { type, payload } = action;
  switch (action.type) {
    case "SET_PAGE_TITLE":
      const result = {
        // ...state, // we should copy to create new instance of state, or else it will be referenced and will be unlimited nested state
        pageTitle: action.payload,
      };
      return result;
    default:
      return state;
  }
};

export default reducer;
