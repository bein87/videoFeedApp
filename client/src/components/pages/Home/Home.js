import React from "react";
import "./Home.scss";
import { useBasic } from "contexts/basicContext";
import Gallery from "./Gallery";
import Error from "components/reusable/Error";
import Message from "./Message";
import Loader from "./Loader";

const Home = () => {
  //if app will scale up and we will need to use context - its ready to use.
  const { getError, getMessage, getGalleryItems, isLoading } = useBasic();

  return (
    <div className="page-container">
      <h1>Most Viewed</h1>
      <hr></hr>
      {getGalleryItems() && <Gallery />}
      {isLoading() && <Loader />}
      {getMessage() && <Message />}
      {getError() && <Error />}
    </div>
  );
};

export default Home;
