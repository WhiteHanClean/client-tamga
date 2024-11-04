import TickIcon from "@/icons/TickIcon/TickIcon";
import Link from "next/link";
import React from "react";
import s from "./PhilialBtn.module.scss";

interface philialBtnProps {
  title?: string;
  subTitle?: string;
  tickTitle?: string;
  showTickTitle?: boolean;
  link?: string;
}

const PhilialBtn = ({ link = "#", title, subTitle, showTickTitle, tickTitle}: philialBtnProps) => {
  return (
    <Link href={link} className={s.philial_btn}>
      <div className={s.philial_btn_title}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div className={s.philial_btn_tick}>
        {showTickTitle ? <p>{tickTitle}</p> : null}
        <TickIcon/>
      </div>
    </Link>
  );
};

export default PhilialBtn;
