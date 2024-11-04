import { CheckboxProps } from "antd/lib";
import React, { useState } from "react";
import Container from "../Container/Container";
import ServiceDrawer from "../ui/ServiceDrawer/ServiceDrawer";
import Title from "../ui/Title/Title";
import s from "./Rooms.module.scss";
import RoomsDrawerBody from "./RoomsDrawerBody/RoomsDrawerBody";
import SelectRooms from "./SelectRooms/SelectRooms";

interface roomsProps {
  furtherClick?: () => void;
}

const Rooms = ({ furtherClick }: roomsProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const checkActiveCheckbox: CheckboxProps["onChange"] = (value) => {
    if (value.target.checked) {
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false);
    }
  };

  return (
    <div className={s.rooms}>
      <Container>
        <Title title="Какую комнату предпочитаете?" />
        <SelectRooms onChange={checkActiveCheckbox} />
      </Container>
      <ServiceDrawer closable={false} drawerOpen={drawerOpen} mask={false} placement="bottom">
        <RoomsDrawerBody onClick={furtherClick}/>
      </ServiceDrawer>
    </div>
  );
};

export default Rooms;
