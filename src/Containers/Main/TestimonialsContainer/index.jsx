import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "./TestimonialsContainer.css";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { responsiveOptions } from "./config";
import { Testimonials } from "./Testimonials";
import { CentralContainer, CarouselTitle } from "./style";
import styled from "styled-components";
import axios from "axios";

const url =
  "https://instituto-sonhar-backend.herokuapp.com/public_testimonies/";
const fetchTestimonials = () => axios.get(url);

const CarouselDemo = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials().then((res) => {
      setTestimonials(res.data);
    });
  }, []);

  const testimonialTemplate = (testimonials, key) => {
    return (
      <Testimonials
        key={key}
        title={testimonials.title}
        text={testimonials.body}
      />
    );
  };
  return (
    <Container>
      <CarouselTitle>DEPOIMENTOS</CarouselTitle>
      <CentralContainer className="carousel-demo">
        <Carousel
          circular={true}
          value={testimonials}
          itemTemplate={testimonialTemplate}
          numVisible={1}
          responsiveOptions={responsiveOptions}
        ></Carousel>
      </CentralContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 80px 0;
  width: 100%;
  max-width: 1356px;
`;

export default CarouselDemo;
