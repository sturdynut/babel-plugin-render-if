const renderIf = "RenderIf";
const isTrue = "isTrue";
const IsMatch = (path) => path.node.openingElement.name.name === renderIf;

export default function renderIfPlugin({ types: t }) {
  return {
    inherits: require("@babel/plugin-syntax-jsx").default,
    visitor: {
      JSXElement(path) {
        if (IsMatch(path)) {
          const condition = path.node.openingElement.attributes.find(
            (attribute) => {
              return attribute.name.name === isTrue;
            }
          ).value.expression;

          const children = t.react.buildChildren(path.node);
          const [firstChild] = children;

          const result = t.ConditionalExpression(
            condition,
            firstChild,
            t.nullLiteral()
          );

          path.replaceWith(result);
        }
      },
    },
  };
}
