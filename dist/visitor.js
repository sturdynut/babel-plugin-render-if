"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visitor = void 0;

var utils = _interopRequireWildcard(require("./utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const visitor = ({
  types: t
}) => ({
  JSXElement(path) {
    if (!utils.IsMatch(path)) return;
    const condition = utils.getCondition(path);
    const [children] = utils.getChildren(path, t);
    utils.guard(path, condition, children);
    const updatedExpression = t.ConditionalExpression(condition, children, t.nullLiteral());
    path.replaceWith(updatedExpression);
  }

});

exports.visitor = visitor;