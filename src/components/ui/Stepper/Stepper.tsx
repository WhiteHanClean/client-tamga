import React from "react";
import s from "./Stepper.module.scss";

interface StepperProps {
  step: string;
}

const Stepper = ({ step }: StepperProps) => {
  const stepOrder = ["service", "master", "date"];

  const getStepClass = (currentStep: string) => {
    if (stepOrder.indexOf(currentStep) <= stepOrder.indexOf(step)) {
      return s.active_step;
    } else {
      return "";
    }
  };

  return (
    <div className={s.stepper}>
      <div className={`${s.step} ${getStepClass("service")}`}>
        <p>1. Услуга</p>
      </div>
      <div className={`${s.step} ${getStepClass("master")}`}>
        <p>2. Мастер</p>
      </div>
      <div className={`${s.step} ${getStepClass("date")}`}>
        <p>3. Дата и время</p>
      </div>
    </div>
  );
};

export default Stepper;
