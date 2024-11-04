import MainIcon from "@/icons/MainIcon/MainIcon";
import SerchIcon from "@/icons/SearchIcon/SerchIcon";
import UserIcon from "@/icons/UserIcon/UserIcon";
import Image from "next/image";
import React from "react";
import Container from "../Container/Container";
import CircleBtn from "../ui/CircleBtn/CircleBtn";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <Container className={s.header_position}>
        <Image
          src={"/headerBackground.png"}
          width={100}
          height={100}
          alt="headerBackground"
          priority
        />
        <div className={s.header_top}>
          <CircleBtn btnIcon={<MainIcon />} />
          <div className={s.header_top_btns}>
            <CircleBtn btnIcon={<SerchIcon />} />
            <CircleBtn link="/Cabinet" btnIcon={<UserIcon />} />
          </div>
        </div>
        <div className={s.header_bottom}>
          <h2>Массажная студия Тамга</h2>
          <h3>Онлайн запись</h3>
        </div>
      </Container>
    </div>
  );
};

export default Header;
