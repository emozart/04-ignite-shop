import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "../styles/pages/home";

import camiseta_01 from "../assets/camisetas/shirt-01.png";
import camiseta_02 from "../assets/camisetas/shirt-02.png";
import camiseta_03 from "../assets/camisetas/shirt-03.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className={"keen-slider"}>
      <Product className="keen-slider__slide">
        <Image src={camiseta_01} alt={""} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 59,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta_02} alt={""} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 59,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta_03} alt={""} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 59,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta_03} alt={""} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 59,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta_03} alt={""} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 59,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
