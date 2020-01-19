import statics from "../constants/statics";
import StorageService from "./storage.service";
import TinyUrlModel from "../constants/tinyUrl";
import ValidatorService from "./validator.service";
import store from "../store";
import Vue from "vue";

class ShortenerService {
  constructor(vueInstance) {
    this.storageService = new StorageService();
    this.validatorService = new ValidatorService();
    if (vueInstance) {
      this.vueInstance = vueInstance;
    } else {
      // for unit tests we need to provide a vue instance with vue-ls
      this.vueInstance = Vue;
    }
  }
  generateTinyUrl(original) {
    if (!this.validatorService.isValidUrl(original)) {
      return alert(`invalid url`);
    }
    let tinyUrl = "";
    const allChars = statics.valid_chars;
    for (var i = 0; i < statics.tiny_url_length; i++) {
      tinyUrl += allChars[Math.floor(Math.random() * allChars.length)];
    }
    this.saveGeneratedUrl(original, tinyUrl);
    return tinyUrl;
  }
  saveGeneratedUrl(original, tinyUrl) {
    try {
      const newUrl = window.location.href + tinyUrl;
      const tinyUrlObject = new TinyUrlModel(original, newUrl);
      store.dispatch("generate/setTinyUrl", tinyUrlObject);
      this.storageService.saveNewUrl(tinyUrlObject, this.vueInstance);
    } catch (error) {
      // TODO proper error handeling
      console.error(error);
    }
  }
}

export default ShortenerService;
