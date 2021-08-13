import { getGifs } from "../../api/gifs";

describe("Tests in getGifs fetch function", () => {
  test("Should return an array of 10 gifs", async () => {
    const gifs = await getGifs("test");
    expect(gifs.length).toBe(10);
  });

  test("Should have category param", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
