import React from "react";
import s from "./SecondDrawerCard.module.scss";
import PhilialBtn from "@/components/ui/PhilialBtn/PhilialBtn";

const SecondDrawerCard = () => {
  return (
    <div className={s.second_drawer_card}>
      <div className={s.second_drawer_card_title}>
        <h3>Ташиева Кулназара, 10</h3>
        <h4>Ежедневно, 10:00-23:30</h4>
      </div>
      <PhilialBtn link="/" title="Сменить филиал" />
    </div>
  );
};

export default SecondDrawerCard;
