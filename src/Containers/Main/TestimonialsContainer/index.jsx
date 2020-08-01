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

const CarouselDemo = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials([
      {
        title:
          "Meu nome é X, tenho 8 anos e fui abusada sexualmente pelo filho da tia que cuida de mim.",
        text:
          "Quando eu tinha 5 anos, ficava na casa da tia M, ela cuidava de mim enquanto meu papai e minha mamãe iam trabalhar. O filho dela de 23 anos, me chamou para assistirmos um filme enquanto ela estava ausente (não me lembro o que ela foi fazer nesse dia), esse filme tinham pessoas peladas e fazendo coisas que eu não entendia muito bem, e ele, passando a mão em minhas pernas e pedindo para que eu ficasse de calcinha e blusa, pediu que eu repetisse a moça do filme. Eu só consegui contar para a minha mamãe quando fiz 7 anos, pois fiquei com muito medo de não acreditarem em mim.",
      },
      {
        title:
          "Meu nome é X, tenho 8 anos e fui abusada sexualmente pelo filho da tia que cuida de mim.",
        text:
          "Quando eu tinha 5 anos, ficava na casa da tia M, ela cuidava de mim enquanto meu papai e minha mamãe iam trabalhar. O filho dela de 23 anos, me chamou para assistirmos um filme enquanto ela estava ausente (não me lembro o que ela foi fazer nesse dia), esse filme tinham pessoas peladas e fazendo coisas que eu não entendia muito bem, e ele, passando a mão em minhas pernas e pedindo para que eu ficasse de calcinha e blusa, pediu que eu repetisse a moça do filme. Eu só consegui contar para a minha mamãe quando fiz 7 anos, pois fiquei com muito medo de não acreditarem em mim.",
      },
      {
        title:
          "Meu nome é X, tenho 8 anos e fui abusada sexualmente pelo filho da tia que cuida de mim.",
        text:
          "Quando eu tinha 5 anos, ficava na casa da tia M, ela cuidava de mim enquanto meu papai e minha mamãe iam trabalhar. O filho dela de 23 anos, me chamou para assistirmos um filme enquanto ela estava ausente (não me lembro o que ela foi fazer nesse dia), esse filme tinham pessoas peladas e fazendo coisas que eu não entendia muito bem, e ele, passando a mão em minhas pernas e pedindo para que eu ficasse de calcinha e blusa, pediu que eu repetisse a moça do filme. Eu só consegui contar para a minha mamãe quando fiz 7 anos, pois fiquei com muito medo de não acreditarem em mim.",
      },
    ]);
  }, []);

  const testimonialTemplate = (testimonials) => {
    return <Testimonials title={testimonials.title} text={testimonials.text} />;
  };

  const basicHeader = <CarouselTitle>DEPOIMENTOS</CarouselTitle>;
  
  return (
    <Container>
      <CentralContainer className="carousel-demo">
        <Carousel
          circular={true}
          value={testimonials}
          itemTemplate={testimonialTemplate}
          numVisible={1}
          header={basicHeader}
          responsiveOptions={responsiveOptions}
        ></Carousel>
      </CentralContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 80px 0;
`;

export default CarouselDemo;
