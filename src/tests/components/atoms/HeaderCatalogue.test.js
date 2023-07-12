import { shallow } from "enzyme";

import "../../setup";

import HeaderCatalogue from "../../../components/atoms/HeaderCatalogue/HeaderCatalogue.tsx";

describe("ini deskripsi test", () => {
  test("test pertama", () => {
    let a = 1;
    expect(a).toBe(1);

    const title = "this is a title header catalogue";
    const key = 100;
    // const atom = shallow(<HeaderCatalogue title={title} key={key} />);
    // console.log("atom", atom);
    // expect(atom.HeaderCatalogue.title).toBe(title);
    // expect(atom.HeaderCatalogue.key).toBe(key);
  });
});
