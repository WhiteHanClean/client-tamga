import { Carousel } from "antd";
import React from "react";
import s from "./CarouselComp.module.scss";

interface carouselProps {
  children: React.ReactNode;
  infinite?: boolean;
  classNameCard?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
}

const CarouselComp = ({
  children,
  infinite,
  classNameCard,
  autoplay,
  autoplaySpeed,
  slidesToShow,
  slidesToScroll,
}: carouselProps) => {
  return (
    <div className={s.carousel_comp}>
      <Carousel
        autoplaySpeed={autoplaySpeed}
        dots={false}
        autoplay={autoplay}
        infinite={infinite}
        arrows={false}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        draggable={true}
      >
        {children &&
          React.Children.map(children, (child, index) => (
            <div className={classNameCard} key={index}>
              {child}
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
