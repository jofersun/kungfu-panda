export type PageTitleType = {
  type: string;
  payload: string;
};

function setPageTitle(title: string): PageTitleType {
  console.log("setPageTitle", title);
  return {
    type: "SET_PAGE_TITLE",
    payload: title,
  };
}

export default setPageTitle;
