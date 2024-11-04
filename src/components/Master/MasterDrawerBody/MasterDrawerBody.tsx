import React from "react";
import s from "./MasterDrawerBody.module.scss";
import MobileBtn from "@/components/ui/MobileBtn/MobileBtn";

interface masterBodyProps {
  onClick?: () => void;
}

const MasterDrawerBody = ({ onClick }: masterBodyProps) => {
  return (
    <div className={s.master_drawer_body}>
      <MobileBtn onClick={onClick} nameBtn="Далее" />
    </div>
  );
};

export default MasterDrawerBody;
