import React from "react";
import s from "./ServiceDrawerHeader.module.scss";
import EditIcon from "@/icons/EditIcon/EditIcon";

const ServiceDrawerHeader = ({ editOrder }: any) => {
  return (
    <>
      <p className={s.services_drawer_header}>
        2 услуги<span>2 ч. 30 мин</span>
      </p>
      <div className={s.services_drawer_price}>
        <p>3900 сом</p>
        <button onClick={editOrder}>
          <EditIcon />
        </button>
      </div>
    </>
  );
};

export default ServiceDrawerHeader;
