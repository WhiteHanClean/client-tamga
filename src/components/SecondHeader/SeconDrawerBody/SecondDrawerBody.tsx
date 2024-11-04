import React from "react";
import s from "./SecondDrawerBody.module.scss";
import SecondDrawerCard from "../items/SecondDrawerCard/SecondDrawerCard";

const SecondDrawerBody = () => {
  return (
    <div className={s.second_drawer_body}>
      <SecondDrawerCard />
    </div>
  );
};

export default SecondDrawerBody;
