import { updater } from "utils/updater";

/**
 * lightbox API factory.
 *
 */
export function lightboxFactory({ state, setState }) {
  // shorthand for setState(produce(draft => {...}))
  const updateState = updater(setState);

  /**
   * closing and removing lightbox data
   */
  const closeLightbox = () => {
    updateState((draft) => {
      draft.currentItem = {};
      draft.isOpen = false;
    });
  };

  /**
   * showing lightbox with requested data
   * @param {object } currentItem -the current item you wish to show in the lightbox
   */
  const setLightbox = (currentItem) => {
    updateState((draft) => {
      draft.currentItem = currentItem;
      if (!draft.isOpen) draft.isOpen = true;
    });
  };
  const getLightboxCurrentItem = () =>
    state.isOpen ? state.currentItem : null;
  return { getLightboxCurrentItem, setLightbox, closeLightbox };
}

export default lightboxFactory;
