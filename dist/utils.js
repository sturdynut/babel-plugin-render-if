"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IsMatch = exports.guard = exports.getChildren = exports.getCondition = void 0;
const errors = {
  missingChildren: "Missing children for RenderIf",
  missingConditions: "Missing condition for RenderIf"
};
const matchers = {
  renderIf: "RenderIf",
  isTrue: "isTrue"
};

const element = path => path.node.openingElement;

const elementName = el => el.name.name;

const getCondition = path => {
  var _element$attributes$f, _element$attributes$f2;

  return (_element$attributes$f = element(path).attributes.find(attribute => elementName(attribute) === matchers.isTrue)) === null || _element$attributes$f === void 0 ? void 0 : (_element$attributes$f2 = _element$attributes$f.value) === null || _element$attributes$f2 === void 0 ? void 0 : _element$attributes$f2.expression;
};

exports.getCondition = getCondition;

const getChildren = (path, t) => t.react.buildChildren(path.node);

exports.getChildren = getChildren;

const guard = (path, condition, children) => {
  if (typeof condition === "undefined") {
    throw path.buildCodeFrameError(errors.missingConditions);
  }

  if (!children || children.length === 0) {
    throw path.buildCodeFrameError(errors.missingChildren);
  }
};

exports.guard = guard;

const IsMatch = path => elementName(element(path)) === matchers.renderIf;

exports.IsMatch = IsMatch;