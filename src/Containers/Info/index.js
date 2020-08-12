import React, { useEffect } from "react";
import ArticleContainer from "../../components/ArticleContainer";
import Gallery from "./Gallery";

const Info = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ArticleContainer />
      <Gallery></Gallery>
    </>
  );
};

export default Info;
