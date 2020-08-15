import React, { useMemo, useState } from "react";
import { useBasic } from "contexts/basicContext/basicContext";
import Card from "components/reusable/Card";
import { InView } from "react-intersection-observer";
/**
 * @return the results body (the main gallery).
 */
const Gallery = () => {
  const { getGalleryItems, fetchData, isEndOfData } = useBasic();
  //useState to control which page to request from server + to know if a request has already been made
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  //fetching data and setting page number
  const handleChange = async () => {
    if (!isEndOfData() && !isFetching) {
      setIsFetching(true);
      await fetchData(page);
      setPage(page + 1);
      setIsFetching(false);
    }
  };
  //returning useMemo in order to prevent multi un-needed component rendering
  return useMemo(() => {
    return (
      <div className="gallery">
        {/* looping over the result and showing cards of the videos */}
        {getGalleryItems().map((itemKey, index) => (
          <Card key={`card-${index}`} item={itemKey} />
        ))}
        {/* element for loading more triggering / lazy loading. */}
        {!isEndOfData() && (
          <InView
            triggerOnce={false}
            as="div"
            onChange={() => {
              handleChange();
            }}
          >
            <div className="load-more-placeholder"></div>
          </InView>
        )}
      </div>
    );
  }, [getGalleryItems(), isEndOfData(), isFetching]);
};

export default Gallery;
