export default function getPath(el) {
  if (!(el instanceof HTMLElement)) {
    throw new Error("Invalid HTMLElement");
  }

  if (el.id) {
    return `#${el.id}`;
  }

  let path = el.tagName.toLowerCase();

  if (
    ["html", "body"].includes(path) ||
    document.querySelectorAll(path).length === 1
  ) {
    return path;
  }

  for (let i = 0; i < el.classList.length; i++) {
    path += `.${el.classList[i]}`;
  }

  if (document.querySelectorAll(path).length > 1) {
    const parentPath = getPath(el.parentElement);
    path = `${parentPath} > ${path}`;
  }

  if (document.querySelectorAll(path).length > 1) {
    const identicalElements = document.querySelectorAll(path);

    for (let i = 0; i < identicalElements.length; i++) {
      if (identicalElements[i] !== el) {
        continue;
      }

      switch (i) {
        case 0:
          return `${path}:first-child`;
        case identicalElements.length - 1:
          return `${path}:last-child`;
        default:
          return `${path}:nth-child(${i + 1})`;
      }
    }
  }

  return path;
}
