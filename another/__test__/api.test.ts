import { jest, it, expect } from "@jest/globals";

import { fetchData } from "../api";
import axios from "axios";

// axios 모듈을 모의 처리합니다.
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("should fetch data", async () => {
  // axios.get의 모의 응답을 설정합니다.
  mockedAxios.get.mockResolvedValue({ data: "mocked data" });

  // fetchData를 호출하면 모의된 axios.get이 사용됩니다.
  const data = await fetchData("http://example.com");

  // fetchData 함수의 결과를 검증합니다.
  expect(data).toEqual("mocked data");
});
