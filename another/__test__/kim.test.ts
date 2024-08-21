import { describe, expect, test, it } from "@jest/globals";
import kim from "../kim";

describe("sum module", () => {
  it("should equal 3", () => {
    expect(kim(1, 2)).toEqual(3);
  });
});
