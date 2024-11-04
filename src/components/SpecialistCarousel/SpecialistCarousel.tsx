import { useRouter } from "next/navigation";
import React from "react";
import CarouselComp from "../ui/CarouselComp/CarouselComp";
import SpecialistCard from "../ui/SpecialistCard/SpecialistCard";
import { specialistMocks } from "../utils/mocks/specialistMocks";

const SpecialistCarousel = () => {
  const router = useRouter();

  const goToReviews = () => {
    router.push("/Reviews");
  };

  return (
    <CarouselComp slidesToShow={2} slidesToScroll={1}>
      {specialistMocks.map((item, index) => (
        <SpecialistCard
          key={index}
          onClick={() => goToReviews()}
          cardIcon={item.icon}
          nameCard={item.nameCard}
          rate={item.rate}
        />
      ))}
    </CarouselComp>
  );
};

export default SpecialistCarousel;
