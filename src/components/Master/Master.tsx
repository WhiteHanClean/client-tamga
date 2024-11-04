import React, { useState } from "react";
import s from "./Master.module.scss";
import Container from "../Container/Container";
import Title from "../ui/Title/Title";
import SearchInput from "../ui/SearchInput/SearchInput";
import MasterCheck from "./Items/MasterCheck/MasterCheck";
import MasterList from "./MasterList/MasterList";
import { CheckboxProps } from "antd";
import ServiceDrawer from "../ui/ServiceDrawer/ServiceDrawer";
import MasterDrawerBody from "./MasterDrawerBody/MasterDrawerBody";

interface masterProps {
  furtherClick?: () => void;
}

const Master = ({ furtherClick }: masterProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCheckboxCount, setActiveCheckboxCount] = useState(0);

  const onSearch = () => { };

  const checkActiveCheckbox: CheckboxProps["onChange"] = (value) => {
    if (value.target.checked) {
      setActiveCheckboxCount((prevCount) => prevCount + 1);
      setDrawerOpen(true);
    } else {
      setActiveCheckboxCount((prevCount) => {
        const newCount = prevCount - 1;
        if (newCount === 0) {
          setDrawerOpen(false);
        }
        return newCount;
      });
    }
  };

  return (
    <div className={s.master}>
      <Container>
        <Title title="Выберите мастера" />
        <SearchInput onChange={onSearch} />
        <MasterCheck />
        <MasterList onChange={checkActiveCheckbox} />
      </Container>
      <ServiceDrawer
        drawerOpen={drawerOpen}
        placement="bottom"
        mask={false}
        closable={false}
        className={s.master_drawer}
      >
        <MasterDrawerBody onClick={furtherClick}/>
      </ServiceDrawer>
    </div>
  );
};

export default Master;
