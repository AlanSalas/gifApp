import { shallow } from "enzyme";
import GifContainer from "../../components/GifContainer";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Tests in GifContainer Component", () => {
  test("Should render properly", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      loading: true,
    });
    const wrapper = shallow(<GifContainer category="Messi" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should render items with the return data of useFetchGifs", () => {
    const gifs = [
      {
        id: "test",
        title: "test",
        url: "https://test.com/image/test.gif",
      },
      {
        id: "123",
        title: "test",
        url: "https://test.com/image/test.gif",
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs,
      loading: false,
    });
    const wrapper = shallow(<GifContainer category="Messi" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Spinner").exists()).toBe(false);
    expect(wrapper.find("Gif").length).toBe(gifs.length);
  });
});
