import React, { ReactNode } from "react";
import s from "./Container.module.scss";
import classNames from "classnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames(s.container, className)}>{children}</div>;
};

export default Container;
