import { describe, expect, it } from "vitest";
import isISODate from ".";

describe("testing isISODate", () => {
  it("Should be exported as a function", () => {
    expect(typeof isISODate).toBe("function");
  });

  it("Should return true for valid ISO Strings", () => {
    // YYYY-MM-DDTHH:MM:SS.mmmZ
    expect(isISODate("2015-02-21T00:52:43.822Z")).toBe(true);

    // YYYY-MM-DDTHH:MM:SSZ
    expect(isISODate("2015-02-21T00:52:43Z")).toBe(true);

    // YYYY-MM-DDTHH:MMZ
    expect(isISODate("2015-02-21T00:52Z")).toBe(true);
  });

  it("Should be false: No timezone", () => {
    // YYYY-MM-DDTHH:MM:SS.mmm
    expect(isISODate("2015-02-21T00:52:43.822")).toBe(false);
    // YYYY-MM-DDTHH:MM:SS
    expect(isISODate("2015-02-21T00:52:43")).toBe(false);
    // YYYY-MM-DDTHH:MM
    expect(isISODate("2015-02-21T00:52")).toBe(false);
  });

  it("Should be false: No minutes", () => {
    // YYYY-MM-DDTHHZ
    expect(isISODate("2015-02-21T00Z")).toBe(false);
  });
});
