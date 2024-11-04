import React from "react";
import s from "./MasterCheck.module.scss";
import MasterIcon from "@/icons/MastersIcon/MasterIcon";
import CheckboxService from "@/components/ui/CheckboxService/CheckboxService";

interface masterCheckProps {
    masterCheckActive?: () => void;
}

const MasterCheck = ({masterCheckActive}: masterCheckProps) => {
  return (
    <div className={s.master_check}>
      <div className={s.master_check_items}>
        <MasterIcon />
        <h3>Любой мастер</h3>
      </div>
      <CheckboxService />
    </div>
  );
};

export default MasterCheck;
