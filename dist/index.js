"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _visitor = require("./visitor");

const renderIfPlugin = babel => ({
  inherits: require("@babel/plugin-syntax-jsx").default,
  visitor: (0, _visitor.visitor)(babel)
});

var _default = renderIfPlugin;
exports.default = _default;