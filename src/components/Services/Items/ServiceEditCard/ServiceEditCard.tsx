import React from "react";
import s from "./ServiceEditCard.module.scss";
import { CloseOutlined } from "@ant-design/icons";

interface serviceEditProps {
  minutes?: number;
  hours?: number;
  price?: number;
  onClose?: () => void;
}

const ServiceEditCard = ({
  minutes,
  hours,
  price,
  onClose,
}: serviceEditProps) => {
  return (
    <div className={s.service_edit_card}>
      <div className={s.service_edit_card_title}>
        <h3>Классический массаж {minutes} мин</h3>
        <h4>{hours} час</h4>
      </div>
      <div className={s.service_edit_card_price}>
        <p>{price} сом</p>
      </div>
      <button onClick={onClose}>
        <CloseOutlined />
      </button>
    </div>
  );
};

export default ServiceEditCard;
