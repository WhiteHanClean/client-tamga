import React from "react";
import s from "./RecordScheduleCard.module.scss";

interface recordScheduleCard {
  title?: string;
  desc?: string;
  price?: number;
}

const RecordScheduleCard = ({ title, desc, price }: recordScheduleCard) => {
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

export default RecordScheduleCard;
