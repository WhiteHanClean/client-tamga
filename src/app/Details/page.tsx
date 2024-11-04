"use client";
import HeaderSelect from "@/components/SecondHeader/items/HeaderSelect/HeaderSelect";
import SecondDrawerHeader from "@/components/SecondHeader/items/SecondDrawerHeader/SecondDrawerHeader";
import SecondHeader from "@/components/SecondHeader/SecondHeader";
import SecondDrawerBody from "@/components/SecondHeader/SeconDrawerBody/SecondDrawerBody";
import ServiceDrawer from "@/components/ui/ServiceDrawer/ServiceDrawer";
import React, { useState } from "react";
import s from "./Details.module.scss";
import DetailsCheck from "@/components/DetailsCheck/DetailsCheck";

const Details = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const onOpen = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <main className={s.details}>
      <SecondHeader select={<HeaderSelect onClick={onOpen} />} />
      <DetailsCheck />
      <ServiceDrawer
        onClose={onClose}
        drawerOpen={openDrawer}
        placement="bottom"
        mask={true}
        headerItems={<SecondDrawerHeader />}
        className={s.details_drawer}
      >
        <SecondDrawerBody />
      </ServiceDrawer>
    </main>
  );
};

export default Details;
