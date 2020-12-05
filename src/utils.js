const errors = {
  missingChildren: "Missing children for RenderIf",
  missingConditions: "Missing condition for RenderIf",
};

const matchers = {
  renderIf: "RenderIf",
  isTrue: "isTrue",
};

const element = (path) => path.node.openingElement;

const elementName = (el) => el.name.name;

export const getCondition = (path) =>
  element(path).attributes.find(
    (attribute) => elementName(attribute) === matchers.isTrue
  )?.value?.expression;

export const getChildren = (path, t) => t.react.buildChildren(path.node);

export const guard = (path, condition, children) => {
  if (typeof condition === "undefined") {
    throw path.buildCodeFrameError(errors.missingConditions);
  }
  if (!children || children.length === 0) {
    throw path.buildCodeFrameError(errors.missingChildren);
  }
};

export const IsMatch = (path) =>
  elementName(element(path)) === matchers.renderIf;
