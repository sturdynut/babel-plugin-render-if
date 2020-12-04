const babel = require("@babel/core");
const plugin = require("../");

const example = `
<RenderIf isTrue={foo}>THE CHILDREN</RenderIf>
`;

it("works", () => {
  const { code } = babel.transform(example, { plugins: [plugin] });
  expect(code).toMatchSnapshot();
});
