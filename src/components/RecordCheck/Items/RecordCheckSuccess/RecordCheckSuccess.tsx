import React from "react";
import s from "./RecordCheckSuccess.module.scss";
import SuccessIcon from "@/icons/SuccessIcon/SuccessIcon";

const RecordCheckSuccess = () => {
  return (
    <div className={s.record_success}>
      <SuccessIcon />
      <h3>Вы записаны</h3>
      <h4>Детали записи также отправлены на вашу почту</h4>
    </div>
  );
};

export default RecordCheckSuccess;
