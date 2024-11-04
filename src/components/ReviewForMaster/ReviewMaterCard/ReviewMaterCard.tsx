import React from "react";
import s from "./ReviewMaterCard.module.scss";
import Image from "next/image";
import MasterRate from "../Items/MasterRate/MasterRate";
import { Input } from "antd";

const { TextArea } = Input;

const ReviewMaterCard = () => {
  return (
    <div className={s.reviews_master_card}>
      <Image
        src={"/Specialists/Specialist.png"}
        width={60}
        height={60}
        alt="master"
      />
      <h3>Николай</h3>
      <h4>Среда, 16 мая, 16:00-18:30</h4>
      <MasterRate />
      <p>Комментарий</p>
      <TextArea
        placeholder="Оставьте комментарий"
        autoSize={{ minRows: 4, maxRows: 5 }}
      />
    </div>
  );
};

export default ReviewMaterCard;
