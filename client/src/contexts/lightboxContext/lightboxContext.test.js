import React from "react";
import { shallow } from "enzyme";
import { createTestApi } from "utils/useApi";
import lightboxFactory from "./lightboxFactory";
import { lightboxInitState } from "./lightboxContext";

/**
 * constant default value
 */
const defaultValue = lightboxInitState;

const testLightbox = createTestApi(lightboxFactory, defaultValue);
afterEach(() => testLightbox.api.setLightbox(defaultValue));

/**
 * initialize the testApi in a non-react enviroment
 * Remember, we are only checking if it works, not if its in React
 */
describe("lightboxContext", () => {
  it("returns null when theres no lightbox", () => {
    expect(testLightbox.api.getLightboxInfo()).toEqual(defaultValue.lightbox);
  });

  it("can set a lightbox directly", () => {
    const NewLightbox = () => <div>I passed the test</div>;

    testLightbox.api.setLightbox(NewLightbox);
    const lightbox = testLightbox.state.lightbox;
    // expect(shallow(<lightbox />).text()).toEqual("I passed the test");
  });
});
