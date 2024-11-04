import React, { useState } from "react";
import s from "./SelectRooms.module.scss";
import CheckboxService from "@/components/ui/CheckboxService/CheckboxService";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface roomsProps {
  onChange?: (e: CheckboxChangeEvent) => void;
}

const SelectRooms = ({ onChange }: roomsProps) => {
  const [activeCheckbox, setActiveCheckbox] = useState<string | null>(null);

  const handleCheckboxChange = (value: string) => {
    setActiveCheckbox(value);
    if (onChange) {
      onChange({ target: { checked: value === 'single' || value === 'double' } } as CheckboxChangeEvent);
    }
  };

  return (
    <div className={s.select_rooms}>
      <button onClick={() => handleCheckboxChange("single")}>
        Одиночная
        <CheckboxService
          isChecked={activeCheckbox === "single"}
          onChange={() => handleCheckboxChange("single")}
        />
      </button>
      <button onClick={() => handleCheckboxChange("double")}>
        Парная
        <CheckboxService
          isChecked={activeCheckbox === "double"}
          onChange={() => handleCheckboxChange("double")}
        />
      </button>
    </div>
  );
};

export default SelectRooms;
