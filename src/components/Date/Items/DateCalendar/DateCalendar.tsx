import { DatePicker, ConfigProvider } from "antd";
import React, { useEffect, useState } from "react";
import "moment/locale/ru";
import locale from "antd/locale/ru_RU";
import dayjs from "dayjs";
import s from "./DateCalendar.module.scss";
import { UpOutlined } from "@ant-design/icons";

dayjs.locale("ru-ru");

interface dateCalendarProps {
    onDateChange?: (date: Date) => void;
}

const DateCalendar = ({ onDateChange }: dateCalendarProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getPopupContainer = (triggerNode: HTMLElement | null) => {
    return triggerNode?.parentElement || document.body;
  };

  return (
    <ConfigProvider locale={locale}>
      <div className={s.date_calendar}>
        <div className={s.date_calendar_items}>
          <DatePicker
            onChange={onDateChange}
            open={isClient}
            getPopupContainer={getPopupContainer}
            transitionName=""
          />
          <button className={s.date_calendar_items_btn}>
            <UpOutlined /> Свернуть
          </button>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default DateCalendar;
