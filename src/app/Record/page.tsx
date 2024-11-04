"use client";
import React, { useState } from "react";
import s from "./Record.module.scss";
import SecondHeader from "@/components/SecondHeader/SecondHeader";
import HeaderSelect from "@/components/SecondHeader/items/HeaderSelect/HeaderSelect";
import RecordCheck from "@/components/RecordCheck/RecordCheck";
import ServiceDrawer from "@/components/ui/ServiceDrawer/ServiceDrawer";
import SecondDrawerHeader from "@/components/SecondHeader/items/SecondDrawerHeader/SecondDrawerHeader";
import SecondDrawerBody from "@/components/SecondHeader/SeconDrawerBody/SecondDrawerBody";

const Record = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const onOpen = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <main className={s.record}>
      <SecondHeader select={<HeaderSelect onClick={onOpen} />} />
      <RecordCheck />
      <ServiceDrawer
        onClose={onClose}
        drawerOpen={openDrawer}
        placement="bottom"
        mask={true}
        headerItems={<SecondDrawerHeader />}
        className={s.record_drawer}
      >
        <SecondDrawerBody />
      </ServiceDrawer>
    </main>
  );
};

export default Record;
