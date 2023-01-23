import getPath from "./get-path";
import addMarkup from "./markup";

describe("getPath", () => {
  beforeAll(() => {
    addMarkup();
  });

  const mockData = [
    { selector: "html", uniquePath: "html" },
    { selector: "body", uniquePath: "body" },
    { selector: "header", uniquePath: "header" },
    { selector: "#section-1", uniquePath: "#section-1" },
    {
      selector: "section:last-child",
      uniquePath: "main > section.section:last-child",
    },
    { selector: ".menu_f", uniquePath: "nav.menu.menu_f" },
    {
      selector: ".menu_f > .menu__list",
      uniquePath: "nav.menu.menu_f > ul.menu__list",
    },
    {
      selector: ".menu_f .menu__item:first-child",
      uniquePath: "nav.menu.menu_f > ul.menu__list > li.menu__item:first-child",
    },
    {
      selector: ".menu_f .menu__item:first-child + .menu__item",
      uniquePath:
        "nav.menu.menu_f > ul.menu__list > li.menu__item:nth-child(2)",
    },
    {
      selector: ".menu_f .menu__item:last-child > .menu__link",
      uniquePath:
        "nav.menu.menu_f > ul.menu__list > li.menu__item:last-child > a.menu__link",
    },
  ];

  it.each(mockData)("returns unique path", ({ selector, uniquePath }) => {
    const element = document.querySelector(selector);
    const path = getPath(element);
    expect(path).toBe(uniquePath);

    const allElementsByPath = document.querySelectorAll(path);
    expect(allElementsByPath.length).toBe(1);
    expect(allElementsByPath[0]).toBe(element);
  });

  it("throws error if parameter is invalid", () => {
    expect(getPath).toThrow(new Error("Invalid HTMLElement"));
    expect(() => {
      getPath(null);
    }).toThrow(new Error("Invalid HTMLElement"));
  });
});
