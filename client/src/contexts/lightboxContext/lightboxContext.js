import { useStore } from "utils/useStore";
import lightboxFactory from "./lightboxFactory";

const initialState = () => ({
  getLightboxCurrentItem: {},
  isOpen: false,
});

const [LightboxProvider, useLightbox, withLightbox] = useStore(
  lightboxFactory,
  initialState
);

export const lightboxInitState = initialState();

export { useLightbox, LightboxProvider, withLightbox };

export default LightboxProvider;
