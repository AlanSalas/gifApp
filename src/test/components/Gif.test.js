import { shallow } from "enzyme";
import Gif from "../../components/Gif";

describe("Tests in Gif component", () => {
  const title = "title";
  const url = "https://test.com";
  const wrapper = shallow(<Gif title={title} url={url} />);

  test("Should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Img should have src, title, alt", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
    expect(img.prop("title")).toBe(title);
  });
});
