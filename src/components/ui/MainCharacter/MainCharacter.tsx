import React from "react";
import s from "./MainCharacter.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Rate } from "antd";

interface mainCharacter {
  className?: string;
  icon?: string;
  showRate?: boolean;
  rate?: number;
  rateDesc?: string;
  name?: string;
}

const MainCharacter = ({
  className,
  name,
  rateDesc,
  rate,
  showRate,
  icon = "/Specialist/Specialist.png",
}: mainCharacter) => {
  return (
    <div className={classNames(s.main_character, className)}>
      <Image src={icon} width={60} height={60} alt="main-character" />
      <div className={s.main_character_items}>
        <h3>{name}</h3>
        {showRate ? (
          <div className={s.main_character_items_rate}>
            <Rate disabled defaultValue={rate} />
            <p>{rateDesc}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainCharacter;
