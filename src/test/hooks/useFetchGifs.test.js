import { renderHook } from "@testing-library/react-hooks";
import useFetchGifs from "../../hooks/useFetchGifs";

describe("Tests in hook useFetchGif", () => {
  test("Should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Dragon Ball")
    );
    const { gifs, loading } = result.current;
    await waitForNextUpdate();
    expect(gifs).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("Should return an array with gifs and loading in false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Dragon Ball")
    );
    await waitForNextUpdate();
    const { gifs, loading } = result.current;
    expect(gifs.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
