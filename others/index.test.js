const { someFunction, someAsyncFunction } = require("./index");

describe("foo", () => {
  it("should say bar", () => {
    const bar = someFunction();
    expect(bar).toEqual("bar");
  });

  it("should say bar on async function", async () => {
    const fetch = jest.fn(() => Promise.resolve("bar"));
    const bar = await someAsyncFunction(fetch);

    expect(bar).toEqual("bar");
    expect(fetch).toHaveBeenCalledWith("someUrl");
  });
});
