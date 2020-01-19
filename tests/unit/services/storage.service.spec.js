import { createLocalVue } from "@vue/test-utils";
import StorageService from "../../../src/services/storage.service";
import TinyUrlModel from "../../../src/constants/tinyUrl";
import statics from "../../../src/constants/statics";
import Storage from "vue-ls";
import testStatics from "../constancs/testStatics";

const localVue = createLocalVue();

const options = {
  namespace: "recent_",
  name: "ls",
  storage: "local"
};
localVue.use(Storage, options);

describe("StorageService", () => {
  const storageService = new StorageService();

  it("should last url in storage equals new url", () => {
    const newUrl = new TinyUrlModel(
      testStatics.original_link,
      testStatics.tiny_link
    );
    storageService.saveNewUrl(newUrl, localVue);
    const urls = localVue.ls.get("urls", []);
    expect(urls[0]).toEqual(newUrl);
  });

  it(`should not length of urls be more than ${statics.saved_url_count}`, () => {
    const newUrl = new TinyUrlModel(
      testStatics.original_link,
      testStatics.tiny_link
    );
    for (let i = 0; i < statics.saved_url_count + 1; i++) {
      storageService.saveNewUrl(newUrl, localVue);
    }
    const urls = localVue.ls.get("urls", []);
    expect(urls.length).toBeLessThanOrEqual(statics.saved_url_count);
  });
});

//TODO check saving data in Vuex
