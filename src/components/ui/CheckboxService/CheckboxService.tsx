import React, { useState, useEffect } from "react";
import s from "./Checkbox.module.scss";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface CheckboxServiceProps {
  isChecked?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
}

const CheckboxService: React.FC<CheckboxServiceProps> = ({ isChecked, onChange }) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (isChecked !== undefined) {
      setChecked(isChecked);
    }
  }, [isChecked]);

  const handleChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={s.checkbox_service}>
      <Checkbox checked={checked} onChange={handleChange} />
    </div>
  );
};

export default CheckboxService;