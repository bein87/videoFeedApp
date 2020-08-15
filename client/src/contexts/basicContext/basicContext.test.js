import { createTestApi } from "utils/useApi";
import basicFactory from "./basicFactory";

/**
 * constant default value
 */
const defaultValue = {
  value: 1,
};

/**
 * initialize the testApi in a non-react environment
 * Remember, we are only checking if it works, not if its in React
 */
const testBasic = createTestApi(basicFactory, defaultValue);
describe("basicContext", () => {
  it("returns initial value", () => {
    expect(testBasic.api.getValue()).toEqual(defaultValue.value);
  });

  it("can change value", () => {
    testBasic.api.setValue(2);
    expect(testBasic.api.getValue()).toEqual(2);
  });
});
