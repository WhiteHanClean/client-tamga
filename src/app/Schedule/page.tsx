"use client";
import React, { useState } from "react";
import SecondHeader from "@/components/SecondHeader/SecondHeader";
import HeaderSelect from "@/components/SecondHeader/items/HeaderSelect/HeaderSelect";
import s from "./Schedule.module.scss";
import Stepper from "@/components/ui/Stepper/Stepper";
import Container from "@/components/Container/Container";
import Services from "@/components/Services/Services";
import ServiceDrawer from "@/components/ui/ServiceDrawer/ServiceDrawer";
import SecondDrawerHeader from "@/components/SecondHeader/items/SecondDrawerHeader/SecondDrawerHeader";
import SecondDrawerBody from "@/components/SecondHeader/SeconDrawerBody/SecondDrawerBody";
import Master from "@/components/Master/Master";
import Date from "@/components/Date/Date";
import { useRouter } from "next/navigation";
import Rooms from "@/components/Rooms/Rooms";

const Schedule = () => {
  const router = useRouter();
  const [further, setFurther] = useState("service");
  const [searchValue, setSearchValue] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const onOpen = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  const hideStepper = (value: string) => {
    setSearchValue(value);
  };

  const furtherClick = () => {
    if (further === "service") {
      setFurther("master");
    } else if (further === "master") {
      setFurther("date");
    } else if (further === "date") {
      setFurther("rooms");
    } else if (further === "rooms") {
      router.push("/Details")
    }
  };

  const handleBackStep = () => {
    if (further === "service") {
      router.push("/");
    } else if (further === "rooms") {
      setFurther("date");
    } else if (further === "date") {
      setFurther("master");
    } else if (further === "master") {
      setFurther("service");
    }
  };

  return (
    <main className={s.schedule}>
      <SecondHeader
        select={<HeaderSelect onClick={onOpen} />}
        backStep={handleBackStep}
      />
      <Container>
        {!searchValue && further !== "rooms" && <Stepper step={further} />}
      </Container>
      {further === "service" && (
        <Services
          furtherClick={furtherClick}
          hideStepperSchedule={hideStepper}
        />
      )}
      {further === "master" && <Master furtherClick={furtherClick} />}
      {further === "date" && <Date furtherClick={furtherClick} />}
      {further === "rooms" && <Rooms furtherClick={furtherClick} />}
      <ServiceDrawer
        onClose={onClose}
        drawerOpen={openDrawer}
        placement="bottom"
        mask={true}
        headerItems={<SecondDrawerHeader />}
        className={s.schedule_drawer}
      >
        <SecondDrawerBody />
      </ServiceDrawer>
    </main>
  );
};

export default Schedule;
