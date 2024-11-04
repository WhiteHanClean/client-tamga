"use client";

import React, { FC } from "react";
import s from "./Title.module.scss";
import classNames from "classnames";

interface ITitle {
  title: string;
  className?: string;
}
const Title: FC<ITitle> = ({ title, className }) => {
  return (
    <div className={classNames(s.title_content, className)}>
      <h2 className={s.title}>{title}</h2>
    </div>
  );
};

export default Title;
