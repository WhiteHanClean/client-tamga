import { Collapse } from "antd";
import React from "react";
import s from "./DateAccordion.module.scss";

interface dateAccordionProps {
  text?: string;
  title?: string;
  children?: React.ReactNode;
}

const DateAccordion = ({ text, title, children }: dateAccordionProps) => {
  return (
    <div className={s.date_accordion}>
      <Collapse defaultActiveKey={"1"} items={[{ key: "1", label: title, children: <div>{children}</div> }]} />
    </div>
  );
};

export default DateAccordion;
