import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Tests in AddCategory component", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Input should change his value", () => {
    const input = wrapper.find("input");
    const value = "spiderman";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("Dont submit if inputValue is empty", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Should submit and reset inputValue", () => {
    const input = wrapper.find("input");
    const value = "superman";
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
