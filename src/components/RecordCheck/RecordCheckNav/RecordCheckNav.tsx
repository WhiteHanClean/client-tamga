import React from "react";
import s from "./RecordCheckNav.module.scss";
import RecordPlusIcon from "@/icons/RecordPlusIcon/RecordPlusIcon";
import RecordCalendarIcon from "@/icons/RecordCalendarIcon/RecordCalendarIcon";
import RecordReverseIcon from "@/icons/RecordReverseIcon/RecordReverseIcon";
import RecordCloseIcon from "@/icons/RecordCloseIcon/RecordCloseIcon";

const RecordCheckNav = () => {
  return (
    <div className={s.record_check_nav}>
      <div className={s.record_check_nav_card}>
        <button>
          <RecordPlusIcon />
        </button>
        <p>Записаться еще</p>
      </div>
      <div className={s.record_check_nav_card}>
        <button>
          <RecordCalendarIcon />
        </button>
        <p>Добавить в календарь</p>
      </div>
      <div className={s.record_check_nav_card}>
        <button>
          <RecordReverseIcon />
        </button>
        <p>Перенести запись</p>
      </div>
      <div className={s.record_check_nav_card}>
        <button>
          <RecordCloseIcon />
        </button>
        <p>Отменить запись</p>
      </div>
    </div>
  );
};

export default RecordCheckNav;
