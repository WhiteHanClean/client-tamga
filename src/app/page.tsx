"use client";
import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import PhilialRoutes from "@/components/PhilialRoutes/PhilialRoutes";
import SpecialistCarousel from "@/components/SpecialistCarousel/SpecialistCarousel";
import Title from "@/components/ui/Title/Title";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.page}>
      <Header/>
      <Container>
        <Title title="Выберите филиал"/>
        <PhilialRoutes/>
        <Title title="Наши специалисты"/>
        <SpecialistCarousel/>
      </Container>
    </main>
  );
}
