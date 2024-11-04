import React from "react";
import s from "./SpecialistCard.module.scss";
import classNames from "classnames";
import { Rate } from "antd";
import Image from "next/image";

interface cardProps {
  nameCard?: string;
  cardIcon?: string;
  className?: string;
  rate?: number;
  onClick?: () => void;
}

const SpecialistCard = ({
  onClick,
  className,
  cardIcon,
  nameCard,
  rate,
}: cardProps) => {
  return (
    <div onClick={onClick} className={classNames(s.specialist_card, className)}>
      <Image
        src={cardIcon || "/Specialist.png"}
        width={40}
        height={40}
        alt={nameCard || "specialist"}
      />
      <p>{nameCard}</p>
      <Rate disabled defaultValue={rate} />
    </div>
  );
};

export default SpecialistCard;
