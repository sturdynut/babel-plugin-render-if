const babel = require("@babel/core");
const plugin = require("../");

const example = `
var foo = 1;
if (foo) console.log(foo)
`;

it("works", () => {
  const { code } = babel.transform(example, { plugins: [plugin] });
  expect(code).toMatchSnapshot();
});
