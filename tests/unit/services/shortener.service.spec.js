import ShortenerService from "../../../src/services/shortener.serivce";
import statics from "../../../src/constants/statics";
import { createLocalVue } from "@vue/test-utils";
import Storage from "vue-ls";
import testStatics from "../constancs/testStatics";

//creating local vue that has "vue-ls" for ShortenerService and StorageService
const localVue = createLocalVue();
const options = {
  namespace: "recent_",
  name: "ls",
  storage: "local"
};
localVue.use(Storage, options);

const matchUrlRegex = "^[a-zA-Z0-9]*$";

describe("ShortenerService", () => {
  const shortenerService = new ShortenerService(localVue);

  it("should generate tinyUrl with valid characters a-z A-Z 0-9", () => {
    const tinyUrl = shortenerService.generateTinyUrl(testStatics.original_link);
    expect(tinyUrl).toEqual(expect.stringMatching(matchUrlRegex));
  });

  it(`should generate tinyUrl with length of ${statics.tiny_url_length}`, () => {
    const tinyUrl = shortenerService.generateTinyUrl(testStatics.original_link);
    expect(tinyUrl).toHaveLength(statics.tiny_url_length);
  });
});
