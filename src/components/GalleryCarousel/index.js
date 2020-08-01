import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { CarouselTitle, Img, ImgContainer } from "./styles";
import { responsiveOptions } from "./config";

const GalleryCarousel = (props) => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery(props.gallery);
  }, []);

  const galleryTemplate = (gallery) => {
    return <Img src={require(`../../assets/photos/${gallery.photo}`)} />;
  };

  const header = <CarouselTitle>{props.title}</CarouselTitle>;

  return (
    <Carousel
      circular={true}
      value={gallery}
      itemTemplate={galleryTemplate}
      numVisible={props.numVisible}
      numScroll={props.numScroll}
      header={header}
      responsiveOptions={props.numVisible > 2 && responsiveOptions}
    ></Carousel>
  );
};

export default GalleryCarousel;
