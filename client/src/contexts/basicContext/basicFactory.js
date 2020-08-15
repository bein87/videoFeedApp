import { updater } from "utils/updater";

// basicFactory name is due to basic functionality of the app. in larger app, it is advised to rename it
export function basicFactory({ state, setState }) {
  // shorthand for setState(produce(draft => {...}))
  const updateState = updater(setState);

  //getters
  const getGalleryItems = () => state.galleryItems;
  const getMessage = () => state.message;
  const getError = () => state.error;
  const isLoading = () => state.isLoading;
  const isEndOfData = () => state.isEndOfData;

  //setters
  const setIsLoading = (value) =>
    updateState((draft) => {
      draft.isLoading = value;
    });
  const setGalleryItems = (data) => {
    updateState((draft) => {
      if (data["items"])
        draft.galleryItems = [...draft.galleryItems, ...data["items"]];
    });
  };
  const setError = (value) => {
    updateState((draft) => {
      draft.error = value;
    });
  };
  const setMessage = (value) => {
    updateState((draft) => {
      draft.message = value;
    });
  };
  const setIsEndOfData = (value) => {
    console.log(value);
    updateState((draft) => {
      draft.isEndOfData = value;
    });
  };

  //api requests:
  const fetchData = async (page) => {
    //fetch data from api
    setIsLoading(true);
    const response = await fetch(
      `http://localhost:8000/api/videos?page=${page}`
    );
    let result;
    // should add more cases as needed
    switch (response.status) {
      case 200:
        result = await response.json();
        if (result["items"]) {
          setGalleryItems(result);
        }
        break;

      case 204:
        setMessage("No more videos to show");
        setIsEndOfData(true);
        break;

      case 500:
        result = await response.json();
        if (result["error"]) setError(result["error"]);
        break;
    }
    setIsLoading(false);
    return true;
  };

  return {
    getGalleryItems,
    getMessage,
    getError,
    fetchData,
    isEndOfData,
    isLoading,
  };
}

export default basicFactory;
