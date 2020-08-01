import React from "react";
import GalleryCarousel from "../../../components/GalleryCarousel";
import {
  cestaBasicaPhotos,
  festaNatalPhotos,
  jantarBeneficientePhotos,
  reforcoEscolarPhotos,
  treinamentoProfissionalPhotos,
} from "./mocks";

export default function Gallery() {
  return (
    <>
      <GalleryCarousel
        title="Entrega de cesta Básica"
        gallery={cestaBasicaPhotos}
        numVisible={8}
        numScroll={8}
      ></GalleryCarousel>
      <GalleryCarousel
        title="Reforço escolar"
        gallery={reforcoEscolarPhotos}
        numVisible={1}
        numScroll={2}
      ></GalleryCarousel>
      <GalleryCarousel
        title="Treinamentos dos profissionais 2020"
        gallery={treinamentoProfissionalPhotos}
        numVisible={8}
        numScroll={8}
      ></GalleryCarousel>
      <GalleryCarousel
        title="Jantar Beneficente 2019"
        gallery={jantarBeneficientePhotos}
        numVisible={8}
        numScroll={8}
      ></GalleryCarousel>
      <GalleryCarousel
        title="Festa de natal das crianças 2019"
        gallery={festaNatalPhotos}
        numVisible={8}
        numScroll={8}
      ></GalleryCarousel>
    </>
  );
}
