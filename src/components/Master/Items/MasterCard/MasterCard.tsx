import SecondaryCharacter from "@/components/ui/SecondaryCharacter/SecondaryCharacter";
import React from "react";
import s from "./MasterCard.module.scss";
import MasterTime from "../MasterTime/MasterTime";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface masterCard {
  name?: string;
  rate?: number;
  icon?: string;
  onChange?: (e: CheckboxChangeEvent) => void;
}

const MasterCard = ({
  name = "name",
  rate = 5,
  icon = "/SecondaryChar/SecondaryChar.png",
  onChange,
}: masterCard) => {
  return (
    <div className={s.master_card}>
      <SecondaryCharacter
        className={s.master_card_character}
        icon={icon}
        name={name}
        rateDesc="20 отзывов"
        showRate
        rate={rate}
        showCheckbox
        onChange={onChange}
      />
      <MasterTime />
    </div>
  );
};

export default MasterCard;
