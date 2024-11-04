import React from "react";
import s from "./MasterTime.module.scss";

const MasterTime = () => {
  return (
    <div className={s.master_time}>
      <p>
        Ближайшее время для записи<span> завтра</span>
      </p>
      <div className={s.master_time_btns}>
        <button>12:15</button>
        <button>14:00</button>
        <button>16:00</button>
        <button>17:15</button>
      </div>
    </div>
  );
};

export default MasterTime;
