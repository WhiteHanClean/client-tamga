import React from "react";
import s from "./RecordSchedule.module.scss";
import Title from "@/components/ui/Title/Title";
import { detailsMocks } from "@/components/utils/mocks/detailsMocks";
import RecordScheduleCard from "../Items/RecordScheduleCard/RecordScheduleCard";

const RecordSchedule = () => {
  return (
    <div className={s.details_schedule}>
      <Title title="Услуги" className={s.details_schedule_title} />
      {detailsMocks.map((item, index) => (
        <RecordScheduleCard
          key={index}
          title={item.title}
          desc={item.desc}
          price={item.price}
        />
      ))}
      <div className={s.details_schedule_resut}>
        <h3>Итого</h3>
        <h2>3900 сом</h2>
      </div>
    </div>
  );
};

export default RecordSchedule;
