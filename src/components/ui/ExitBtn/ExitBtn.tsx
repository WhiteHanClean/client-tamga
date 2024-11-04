import ExitIcon from "@/icons/ExitIcon/ExitIcon";
import React from "react";
import s from "./ExitBtn.module.scss";

const ExitBtn = () => {
  return (
    <button className={s.exit_btn}>
      <ExitIcon />
      Выйти
    </button>
  );
};

export default ExitBtn;
