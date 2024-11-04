import React from "react";
import s from "./ServiceEditBody.module.scss";
import ServiceEditCard from "../Items/ServiceEditCard/ServiceEditCard";

const ServiceEditBody = () => {
  return (
    <div className={s.service_edit_body}>
      <ServiceEditCard minutes={60} hours={1} price={1700} />
      <ServiceEditCard minutes={60} hours={1} price={1700} />
    </div>
  );
};

export default ServiceEditBody;
