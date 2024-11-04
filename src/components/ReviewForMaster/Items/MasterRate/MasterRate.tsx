import React from "react";
import s from "./MasterRate.module.scss";
import { Rate } from "antd";

const MasterRate = () => {
  return (
    <div className={s.master_rate}>
      <Rate />
      <p>Оцените работу мастера</p>
    </div>
  );
};

export default MasterRate;
