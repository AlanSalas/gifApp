import { shallow } from "enzyme";
import GifApp from "../GifApp";

describe("Tests in GifApp component", () => {
  const wrapper = shallow(<GifApp />);

  test("Should render propertly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should have at least 1 GifContainer", () => {
    expect(wrapper.find("GifContainer").length).toBe(1);
  });
});
