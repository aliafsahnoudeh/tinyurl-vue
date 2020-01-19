import Vue from "vue";
import Link from "@/components/Link/index.vue";
import TinyUrlModel from "@/constants/tinyUrl.js";
import testStatics from "../constancs/testStatics";

function mountComponentWithProps(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();

  return vm.$el;
}

describe("Link.vue", () => {
  it("should show original url if showOriginal prop is true", () => {
    const SomeLink = mountComponentWithProps(Link, {
      tinyUrl: new TinyUrlModel(
        testStatics.original_link,
        testStatics.tiny_link
      ),
      showOriginal: true
    });
    const textContent = SomeLink.textContent;
    expect(textContent).toMatch(testStatics.original_link);
  });

  it("should not show original url if showOriginal prop is false", () => {
    const SomeLink = mountComponentWithProps(Link, {
      tinyUrl: new TinyUrlModel(
        testStatics.original_link,
        testStatics.tiny_link
      ),
      showOriginal: false
    });
    const textContent = SomeLink.textContent;
    expect(textContent).not.toMatch(testStatics.original_link);
  });

  it("should show tinyUrl if showOriginal prop is false", () => {
    const SomeLink = mountComponentWithProps(Link, {
      tinyUrl: new TinyUrlModel(
        testStatics.original_link,
        testStatics.tiny_link
      ),
      showOriginal: false
    });
    const textContent = SomeLink.textContent;
    expect(textContent).toMatch(testStatics.tiny_link);
  });

  it("should not show tinyUrl if showOriginal prop is true", () => {
    const SomeLink = mountComponentWithProps(Link, {
      tinyUrl: new TinyUrlModel(
        testStatics.original_link,
        testStatics.tiny_link
      ),
      showOriginal: true
    });
    const textContent = SomeLink.textContent;
    expect(textContent).not.toMatch(testStatics.tiny_link);
  });

  //TODO test opening the link on Link Component
});
