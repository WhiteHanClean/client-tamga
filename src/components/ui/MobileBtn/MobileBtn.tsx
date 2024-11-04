import React from "react";
import s from "./MobileBtn.module.scss";

interface mobileBtnProps {
  nameBtn: string;
  onClick?: () => void;
  fixed?: boolean;
  disabled?: boolean;
}

const MobileBtn = ({ nameBtn, onClick, fixed, disabled }: mobileBtnProps) => {  
  return (
    <div className={`${s.mobile_btn} ${fixed ? s.fixed : ""}`}>
      <button disabled={disabled} onClick={onClick}>{nameBtn}</button>
    </div>
  );
};

export default MobileBtn;
