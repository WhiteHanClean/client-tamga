import React from "react";
import s from "./DetailsScheduleCard.module.scss";

interface detailsScheduleCard {
  title?: string;
  desc?: string;
  price?: number;
}

const DetailsScheduleCard = ({ title, desc, price }: detailsScheduleCard) => {
  return (
    <div className={s.details_schedule_card}>
      <div className={s.details_schedule_card_titles}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <h4>{price} сом</h4>
    </div>
  );
};

export default DetailsScheduleCard;
