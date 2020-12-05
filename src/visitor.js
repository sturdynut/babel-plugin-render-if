import * as utils from "./utils";

export const visitor = ({ types: t }) => ({
  JSXElement(path) {
    if (!utils.IsMatch(path)) return;

    const condition = utils.getCondition(path);
    const [children] = utils.getChildren(path, t);

    utils.guard(path, condition, children);

    const updatedExpression = t.ConditionalExpression(
      condition,
      children,
      t.nullLiteral()
    );

    path.replaceWith(updatedExpression);
  },
});
