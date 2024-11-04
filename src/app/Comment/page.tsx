"use client";
import HeaderSelect from "@/components/SecondHeader/items/HeaderSelect/HeaderSelect";
import SecondHeader from "@/components/SecondHeader/SecondHeader";
import ServiceDrawer from "@/components/ui/ServiceDrawer/ServiceDrawer";
import React, { useState } from "react";
import s from "./Comment.module.scss";
import SecondDrawerHeader from "@/components/SecondHeader/items/SecondDrawerHeader/SecondDrawerHeader";
import SecondDrawerBody from "@/components/SecondHeader/SeconDrawerBody/SecondDrawerBody";
import ReviewForMaster from "@/components/ReviewForMaster/ReviewForMaster";

const Comment = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const onOpen = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <main className={s.comment}>
      <SecondHeader select={<HeaderSelect onClick={onOpen} />} />
      <ReviewForMaster />
      <ServiceDrawer
        onClose={onClose}
        drawerOpen={openDrawer}
        placement="bottom"
        mask={true}
        headerItems={<SecondDrawerHeader />}
        className={s.comment_drawer}
      >
        <SecondDrawerBody />
      </ServiceDrawer>
    </main>
  );
};

export default Comment;
