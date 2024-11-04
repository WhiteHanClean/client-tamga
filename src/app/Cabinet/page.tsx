"use client";
import CabinetRoutes from "@/components/CabinetRoutes/CabinetRoutes";
import Container from "@/components/Container/Container";
import ExitBtn from "@/components/ui/ExitBtn/ExitBtn";
import SecondHeader from "@/components/SecondHeader/SecondHeader";
import MainCharacter from "@/components/ui/MainCharacter/MainCharacter";
import MobileBtn from "@/components/ui/MobileBtn/MobileBtn";
import React from "react";
import s from "./Cabinet.module.scss";

const Cabinet = () => {
  return (
    <main className={s.cabinet}>
      <SecondHeader title="Личный кабинет" />
      <Container>
        <MainCharacter className={s.cabinet_char} icon="/MainChar/MainCharFirst.png"  name="Нейтан Дрейк"/>
        <CabinetRoutes />
        <ExitBtn/>
      </Container>
      <MobileBtn fixed nameBtn="Новая запись"/>
    </main>
  );
};

export default Cabinet;
