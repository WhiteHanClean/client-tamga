import React from "react";
import s from "./SecondaryCharacter.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Rate } from "antd";
import CheckboxService from "../CheckboxService/CheckboxService";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import EditIcon from "@/icons/EditIcon/EditIcon";

interface mainCharacter {
  className?: string;
  icon?: string;
  showRate?: boolean;
  rate?: number;
  rateDesc?: string;
  name?: string;
  decs?: string;
  date?: string;
  showCheckbox?: boolean;
  showEdit?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
}

const SecondaryCharacter = ({
  className,
  name,
  rateDesc,
  rate,
  showRate,
  decs,
  date,
  icon = "/SecondaryChar/SecondaryChar.png",
  showCheckbox = false,
  showEdit = false,
  onChange,
}: mainCharacter) => {
  return (
    <div className={s.secondary_char}>
      <div className={classNames(s.secondary_character, className)}>
        <Image src={icon} width={40} height={40} alt="secondary-character" />
        <div className={s.secondary_character_items}>
          <h3>{name}</h3>
          {showRate ? (
            <div className={s.secondary_character_items_rate}>
              <Rate disabled defaultValue={rate} />
              <p>{rateDesc}</p>
            </div>
          ) : null}
        </div>
        <p>{date}</p>
        {showCheckbox && <CheckboxService onChange={onChange}/>}
        {showEdit && <button><EditIcon/></button>}
      </div>
      <h4 className={s.description}>{decs}</h4>
    </div>
  );
};

export default SecondaryCharacter;
