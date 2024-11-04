import React from "react";
import s from "./DetailsDateCard.module.scss";
import CalendarIcon from "@/icons/CalendarIcon/CalendarIcon";
import EditIcon from "@/icons/EditIcon/EditIcon";

const DetailsDateCard = () => {
  return (
    <div className={s.details_date_card}>
      <span>
        <CalendarIcon />
      </span>
      <div className={s.details_date_card_title}>
        <p>Среда, 22 мая</p>
        <h3>16:00-18:30</h3>
      </div>
      <button>
        <EditIcon/>
      </button>
    </div>
  );
};

export default DetailsDateCard;
