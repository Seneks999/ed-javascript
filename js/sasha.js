function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  const totalWidth = contentWidth + 2 * (paddingWidth + borderWidth);

  return totalWidth;
}

let a, b, c;

a = getElementWidth("50px", "8px", "4px");
b = getElementWidth("60px", "12px", "8.5px");
c = getElementWidth("200px", "0px", "0px");

console.log(a); // 74
console.log(b); // 101
console.log(c); // 200
