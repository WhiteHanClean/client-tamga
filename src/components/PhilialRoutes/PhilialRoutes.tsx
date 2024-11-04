import React from "react";
import PhilialBtn from "../ui/PhilialBtn/PhilialBtn";
import { philialMocks } from "../utils/mocks/philialMocks";
import s from "./PhilialRoutes.module.scss";

const PhilialRoutes = () => {
  return (
    <div className={s.philial_routes}>
      {philialMocks.map((items, index) => (
        <PhilialBtn key={index} link={items.src} title={items.title} subTitle={items.subTitle} />
      ))}
    </div>
  );
};

export default PhilialRoutes;
