import React from "react";
import * as babel from "@babel/core";
import plugin from "../";

describe("RenderIf", () => {
  const options = { plugins: [plugin] };

  const transform = (renderIf) => babel.transform(renderIf, options);

  describe("with text child", () => {
    const renderIf = `<RenderIf isTrue={isTextChild}>THE CHILDREN</RenderIf>`;

    it("transforms as expected", () => {
      const { code } = transform(renderIf);
      expect(code).toMatchSnapshot();
    });
  });

  describe("with single child", () => {
    const renderIf = `<RenderIf isTrue={isSingleChild}>
        <span>THE CHILDREN</span>
      </RenderIf>`;

    it("transforms as expected", () => {
      const { code } = transform(renderIf);
      expect(code).toMatchSnapshot();
    });
  });

  describe("with nested children", () => {
    const renderIf = `<RenderIf isTrue={isNestChildren}>
        <div><span>THE CHILDREN</span></div>
      </RenderIf>`;

    it("transforms as expected", () => {
      const { code } = transform(renderIf);
      expect(code).toMatchSnapshot();
    });
  });

  describe("with array children", () => {
    const renderIf = `<RenderIf isTrue={isNestChildren}>
        {[
          <span>CHILD 1</span>,
          <span>CHILD 2</span>,
        ]}
      </RenderIf>`;

    it("transforms as expected", () => {
      const { code } = transform(renderIf);
      expect(code).toMatchSnapshot();
    });
  });

  describe("with js expression as child", () => {
    const renderIf = `<RenderIf isTrue={isNestChildren}>{\`foo\`}</RenderIf>`;

    it("transforms as expected", () => {
      const { code } = transform(renderIf);
      expect(code).toMatchSnapshot();
    });
  });

  describe("with no children", () => {
    const renderIf = `<RenderIf isTrue={isNestChildren}></RenderIf>`;

    it("throws error", () => {
      expect(() => transform(renderIf)).toThrowError(
        "Missing children for RenderIf"
      );
    });
  });

  describe("with no condition", () => {
    const renderIf = `<RenderIf>BLOW UP!</RenderIf>`;

    it("throws error", () => {
      expect(() => transform(renderIf)).toThrowError(
        "Missing condition for RenderIf"
      );
    });
  });
});
