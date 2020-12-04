# babel-plugin-render-if

A babel plugin if you prefer to use declarative-style conditional rendering.
Specifically, allows you to use `<RenderIf isTrue={foo}>...</RenderIf>` instead of `{foo && (...)}`

## Getting started

Install it:

`yarn add -D babel-plugin-render-if`

Add it to your babel config:

```
{
  "presets": ["es2015", "react"],
  "plugins": [
    "render-if"
  ]
}
```

## Linter Warnings?

Add `RenderIf` to your globals, like so:

```
"globals": {
  "RenderIf": true
}
```

That's it!
