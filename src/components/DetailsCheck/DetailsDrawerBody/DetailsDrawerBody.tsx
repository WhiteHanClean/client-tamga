import React from "react";
import s from "./DetailsDrawerBody.module.scss";
import MobileBtn from "@/components/ui/MobileBtn/MobileBtn";

interface masterBodyProps {
  onClick?: () => void;
  disabled?: boolean;
}

const DetailsDrawerBody = ({ onClick, disabled }: masterBodyProps) => {
  return (
    <div className={s.details_drawer_body}>
      <MobileBtn onClick={onClick} disabled={disabled} nameBtn="Записаться" />
    </div>
  );
};

export default DetailsDrawerBody;
