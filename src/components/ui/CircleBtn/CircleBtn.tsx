import React from "react";
import s from "./CircleBtn.module.scss";
import classNames from "classnames";
import Link from "next/link";

interface btnProps {
  nameBtn?: string | "Ok";
  btnIcon?: React.ReactNode;
  className?: string;
  link?: string;
}

const CircleBtn = ({ link = "#", btnIcon, className }: btnProps) => {
  return (
    <Link href={link} className={classNames(s.circle_btn, className)}>{btnIcon}</Link>
  );
};

export default CircleBtn;
