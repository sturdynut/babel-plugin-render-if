import { visitor } from "./visitor";

const renderIfPlugin = (babel) => ({
  inherits: require("@babel/plugin-syntax-jsx").default,
  visitor: visitor(babel),
});

export default renderIfPlugin;
