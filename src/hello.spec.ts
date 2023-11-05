import { greeting } from "./hello";

describe("target element after greeting", () => {
  it("has a last child of a `div` element", () => {
    const element = document.createElement("div");
    greeting(element);
    expect(element.lastChild).toBeInstanceOf(HTMLDivElement);
  });
});
