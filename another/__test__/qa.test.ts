import { it, describe, expect, jest } from "@jest/globals";
import { add } from "../qa";

describe("음식 관련 테스트 집합입니다.", () => {
  it("should add two numbers", () => {
    // jest.fn()으로 새로운 모의 함수를 생성합니다.
    const mockFunction = jest.fn(add);

    // mockFunction의 호출 결과를 미리 정의합니다.
    mockFunction.mockReturnValue(10);

    // mockFunction을 호출하면 10이 반환됩니다.
    const result = mockFunction(5, 5);

    // mockFunction이 호출되었는지 확인합니다.
    expect(mockFunction).toHaveBeenCalled();
    expect(result).toBe(10);
  });
});
