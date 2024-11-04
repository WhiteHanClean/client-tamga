import React from "react";
import s from "./ReviewForMaster.module.scss";
import Container from "../Container/Container";
import ReviewMaterCard from "./ReviewMaterCard/ReviewMaterCard";
import MobileBtn from "../ui/MobileBtn/MobileBtn";

const ReviewForMaster = () => {
  return (
    <div className={s.review_for_master}>
      <Container>
        <ReviewMaterCard />
      </Container>
      <MobileBtn nameBtn="Оставить отзыв" />
    </div>
  );
};

export default ReviewForMaster;
