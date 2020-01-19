class ValidatorService {
  isValidUrl(url) {
    //TODO proper url validation
    if (!url || url === "") {
      return false;
    }
    if (!url.startsWith("http") && !url.startsWith("https")) return false;
    return true;
  }
}

export default ValidatorService;
