import LinkBox from "@/components/LinkBox/index.vue";
import Link from "@/components/Link/index.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Storage from "vue-ls";
import generate from "../../../src/store/modules/generate";
import recentUrls from "../../../src/store/modules/recentUrls";
import testStatics from "../constancs/testStatics";

const localVue = createLocalVue();

const options = {
  namespace: "recent_",
  name: "ls",
  storage: "local"
};
localVue.use(Storage, options);

localVue.use(Vuex);

describe("LinkBox.vue", () => {
  const store = new Vuex.Store({
    modules: {
      generate,
      recentUrls
    }
  });

  //manage vue-ls for storage service, to pervent showing errors in running tests
  it("should not contains a Link Component if newUrl doesn't exists in Vuex", () => {
    const wrapper = shallowMount(LinkBox, { store, localVue });
    expect(wrapper.find(Link).isVisible()).toBe(false);
  });
  it("should not contains a button if newUrl doesn't exists in Vuex", () => {
    const wrapper = shallowMount(LinkBox, { store, localVue });
    expect(wrapper.find("button").isVisible()).toBe(false);
  });
  it("should not contains a p tage for title if newUrl doesn't exists in Vuex", () => {
    const wrapper = shallowMount(LinkBox, { store, localVue });
    expect(wrapper.find(".your-tiny-url-title").isVisible()).toBe(false);
  });

  it("should contains a Link Component if newUrl exists in Vuex", () => {
    store.dispatch("generate/setTinyUrl", {
      original: testStatics.original_link,
      tiny: testStatics.tiny_link
    });
    const wrapper = shallowMount(LinkBox, { store, localVue });
    wrapper.vm.ls = Storage;
    expect(wrapper.find(Link).isVisible()).toBe(true);
  });

  it("should contains a button if newUrl exists in Vuex", () => {
    store.dispatch("generate/setTinyUrl", {
      original: testStatics.original_link,
      tiny: testStatics.tiny_link
    });
    const wrapper = shallowMount(LinkBox, { store, localVue });
    wrapper.vm.ls = Storage;
    expect(wrapper.find("button").isVisible()).toBe(true);
  });

  it("should contains a a p tage for title if newUrl exists in Vuex", () => {
    store.dispatch("generate/setTinyUrl", {
      original: testStatics.original_link,
      tiny: testStatics.tiny_link
    });
    const wrapper = shallowMount(LinkBox, { store, localVue });
    wrapper.vm.ls = Storage;
    expect(wrapper.find(".your-tiny-url-title").isVisible()).toBe(true);
  });
});
