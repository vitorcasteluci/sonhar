import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "./TestimonialsContainer.css";
import React from "react";
import { Container, CentralContainer } from "./style";

const CarouselContainer = () => {
  return (
    <Container>
      <CentralContainer className="carousel-demo">
        {props.children}
      </CentralContainer>
    </Container>
  );
};

export default CarouselContainer;
