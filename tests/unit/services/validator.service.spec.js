import ValidatorService from "../../../src/services/validator.service.js";
import testStatics from "../constancs/testStatics";

describe("ValidatorService", () => {
  const validatorService = new ValidatorService();

  it("should should work correctly with empty string", () => {
    const result = validatorService.isValidUrl("");
    expect(result).toEqual(false);
  });

  it("should should work correctly with null", () => {
    const result = validatorService.isValidUrl(null);
    expect(result).toEqual(false);
  });

  it("should should work correctly with null", () => {
    const result = validatorService.isValidUrl(undefined);
    expect(result).toEqual(false);
  });

  it("should should work correctly with url not starting with http or https", () => {
    const result = validatorService.isValidUrl(
      `hhhh` + testStatics.original_link
    );
    expect(result).toEqual(false);
  });

  it("should should work correctly with url starting with http or https", () => {
    const result = validatorService.isValidUrl(testStatics.original_link);
    expect(result).toEqual(true);
  });
});
