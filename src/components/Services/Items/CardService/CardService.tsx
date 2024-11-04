import React from "react";
import s from "./CardService.module.scss";
import Image from "next/image";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface cardServiceProps {
  icon?: string;
  desc?: string;
  subDesc?: string;
  price?: number;
  checkActiveCheckbox?: (e: CheckboxChangeEvent) => void;
}

const CardService = ({
  icon = "/Service/Service.png",
  desc,
  subDesc,
  price,
  checkActiveCheckbox,
}: cardServiceProps) => {
  return (
    <div className={s.card_service}>
      <Image priority src={icon} width={88} height={88} alt="card-service" />
      <div className={s.card_service_items}>
        <h3>{desc}</h3>
        <h4>{subDesc}</h4>
        <p>{price} сом</p>
      </div>
      <div className={s.card_service_checkbox}>
        <Checkbox onChange={checkActiveCheckbox} />
      </div>
    </div>
  );
};

export default CardService;
