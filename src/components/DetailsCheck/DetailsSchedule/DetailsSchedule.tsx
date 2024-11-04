import React from "react";
import s from "./DetailsSchedule.module.scss";
import Title from "@/components/ui/Title/Title";
import EditIcon from "@/icons/EditIcon/EditIcon";
import DetailsScheduleCard from "../Items/DetailsScheduleCard/DetailsScheduleCard";
import { detailsMocks } from "@/components/utils/mocks/detailsMocks";

const DetailsSchedule = () => {
  return (
    <div className={s.details_schedule}>
      <div className={s.details_schedule_header}>
        <Title title="Услуги" className={s.details_schedule_title} />
        <button>
          <EditIcon />
        </button>
      </div>
      {detailsMocks.map((item, index) => (
        <DetailsScheduleCard
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

export default DetailsSchedule;
