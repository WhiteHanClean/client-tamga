"use client";
import Container from "@/components/Container/Container";
import SecondHeader from "@/components/SecondHeader/SecondHeader";
import Title from "@/components/ui/Title/Title";
import MainCharacter from "@/components/ui/MainCharacter/MainCharacter";
import MobileBtn from "@/components/ui/MobileBtn/MobileBtn";
import SecondaryCharacter from "@/components/ui/SecondaryCharacter/SecondaryCharacter";
import { secondaryCharMocks } from "@/components/utils/mocks/secondaryCharMocks";
import React from "react";
import s from "./Reviews.module.scss";

const page = () => {
  return (
    <main className={s.reviews}>
      <SecondHeader />
      <Container>
        <MainCharacter
          className={s.reviews_char}
          showRate
          rateDesc="20 отзывов"
          rate={5}
          icon="/Specialists/Specialist.png"
          name="Николай"
        />
        <Title title="Отзывы" />
        <div className={s.reviews_secondary}>
          {secondaryCharMocks.map((item, index) => (
            <SecondaryCharacter
              key={index}
              decs={item.decs}
              rate={5}
              showRate
              date={item.date}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </div>
        <MobileBtn nameBtn="Записаться к мастеру" fixed />
      </Container>
    </main>
  );
};

export default page;
