import React from "react";
import s from "./RoomsDrawerBody.module.scss";
import MobileBtn from "@/components/ui/MobileBtn/MobileBtn";

interface roomsBodyProps {
  onClick?: () => void;
}

const RoomsDrawerBody = ({ onClick }: roomsBodyProps) => {
  return (
    <div className={s.rooms_drawer_body}>
      <MobileBtn onClick={onClick} nameBtn="Далее" />
    </div>
  );
};

export default RoomsDrawerBody;
