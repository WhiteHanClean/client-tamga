import React, { useState } from "react";
import s from "./FormInputMask.module.scss";
import { InputMask } from "primereact/inputmask";
import { Select } from "antd";
import Image from "next/image";

const { Option } = Select;

const countryMasks: { [key: string]: string } = {
  US: "999-9999",
  RU: "(999) 999-99-99",
  KZ: "(999) 999-99-99",
  UK: "9999 999999",
  KG: "999 99 99 99",
};

const FormInputMask = ({ onChange, value }: any) => {
  const [mask, setMask] = useState(countryMasks["US"]);

  const handleCountryChange = (countryCode: string) => {
    const selectedMask = countryMasks[countryCode];
    setMask(selectedMask);
    onChange("");
  };

  const getPopupContainer = (triggerNode: HTMLElement | null) => {
    return triggerNode?.parentElement || document.body;
  };

  return (
    <div className={s.form_input_mask}>
      <Select
        placeholder="Код"
        style={{ width: 200 }}
        onChange={handleCountryChange}
        getPopupContainer={getPopupContainer}
      >
        {Object.keys(countryMasks).map((countryCode) => (
          <Option key={countryCode} value={countryCode}>
            {countryCode === "US" && (
              <Image
                src={"/flags/usa.png"}
                width={20}
                height={20}
                alt={"flag"}
              />
            )}
            {countryCode === "US" && "(999)"}
            {countryCode === "RU" && (
              <Image
                src={"/flags/ru.png"}
                width={20}
                height={20}
                alt={"flag"}
              />
            )}
            {countryCode === "RU" && "+7"}
            {countryCode === "KZ" && (
              <Image
                src={"/flags/kz.png"}
                width={20}
                height={20}
                alt={"flag"}
              />
            )}
            {countryCode === "KZ" && "+7"}
            {countryCode === "UK" && (
              <Image
                src={"/flags/uk.png"}
                width={20}
                height={20}
                alt={"flag"}
              />
            )}
            {countryCode === "UK" && "+44"}
            {countryCode === "KG" && (
              <Image
                src={"/flags/kg.png"}
                width={20}
                height={20}
                alt={"flag"}
              />
            )}
            {countryCode === "KG" && "+996"}
          </Option>
        ))}
      </Select>
      <InputMask
        className={s.form_input_mask_input}
        mask={mask}
        placeholder="Введите номер телефона"
        value={value}
        onChange={(e) => onChange(e.value)}
      />
    </div>
  );
};

export default FormInputMask;
