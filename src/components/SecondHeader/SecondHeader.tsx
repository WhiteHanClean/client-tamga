import React from "react";
import s from "./SecondHeader.module.scss";
import classNames from "classnames";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface secondHeaderProps {
  nameBtn?: string | "Ok";
  btnIcon?: React.ReactNode;
  className?: string;
  title?: string;
  select?: React.ReactNode;
  backStep?: () => void;
}

const SecondHeader = ({
  className,
  title,
  select,
  backStep,
}: secondHeaderProps) => {
  const router = useRouter();

  const exitBack = () => {
    router.back();
  };

  return (
    <>
      <div className={classNames(s.second_header, className)}>
        <button
          className={s.second_header_back}
          onClick={backStep ? backStep : exitBack}
        >
          <ArrowLeftOutlined />
        </button>
        <div className={s.second_header_content}>
          {select ? (
            <>{select}</>
          ) : (
            <h3 className={s.second_header_content_title}>{title}</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default SecondHeader;
