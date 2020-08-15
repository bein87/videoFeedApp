import { useStore } from "utils/useStore";
import basicFactory from "./basicFactory";

//a function that creates an initial state for this context
const initialState = () => {
  const state = {
    error: "",
    message: "",
    isLoading: true,
    galleryItems: [],
    isEndOfData: false,
  };
  return state;
};

const [BasicProvider, useBasic, withBasic] = useStore(
  basicFactory,
  initialState
);

export const basicInitState = initialState();

export { useBasic, BasicProvider, withBasic };

export default BasicProvider;
