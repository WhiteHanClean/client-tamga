import React from "react";
import s from "./ServicesList.module.scss";
import Title from "../../ui/Title/Title";
import CardService from "../Items/CardService/CardService";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface ServiceItem {
  icon: string;
  desc: string;
  subDesc: string;
  duration: number;
  price: number;
}

interface servicesProps {
  mainTitle: string;
  services: ServiceItem[];
  checkActiveCheckbox: (e: CheckboxChangeEvent) => void;
}

const ServicesList = ({
  checkActiveCheckbox,
  mainTitle,
  services,
}: servicesProps) => {
  return (
    <div className={s.services}>
      <Title className={s.services_title} title={mainTitle} />
      <div className={s.services_list}>
        {services.map((service, index) => (
          <CardService
            checkActiveCheckbox={checkActiveCheckbox}
            key={index}
            icon={service.icon}
            desc={service.desc}
            subDesc={service.subDesc}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
