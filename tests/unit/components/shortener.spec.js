import LinkBox from "@/components/LinkBox/index.vue";
import Shortener from "@/components/Shortener/index.vue";
import { shallowMount } from "@vue/test-utils";

describe("Shortener.vue", () => {
  it("should contains an input", () => {
    const wrapper = shallowMount(Shortener);
    expect(wrapper.find("input").isVisible()).toBe(true);
  });
  it("should contains a button", () => {
    const wrapper = shallowMount(Shortener);
    expect(wrapper.find("button").isVisible()).toBe(true);
  });

  it("should contains a LinkBox component", () => {
    const wrapper = shallowMount(Shortener);
    expect(wrapper.find(LinkBox).isVisible()).toBe(true);
  });
});
