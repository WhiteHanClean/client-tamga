import React from "react";
import s from "./HeaderSelect.module.scss";
import HeaderSelectIcon from "@/icons/HeaderSelectIcon/HeaderSelectIcon";

interface headerSelectProps {
  title?: string;
  onClick?: () => void;
}

const HeaderSelect = ({
  title = "Ташиева Кулназара, 10",
  onClick,
}: headerSelectProps) => {
  return (
    <button onClick={onClick} className={s.header_select}>
      <h2>{title}</h2>
      <HeaderSelectIcon />
    </button>
  );
};

export default HeaderSelect;
