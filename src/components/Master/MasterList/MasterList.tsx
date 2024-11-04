import React from "react";
import MasterCard from "../Items/MasterCard/MasterCard";
import { masterMocks } from "@/components/utils/mocks/masterMocks";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface masterProps {
  onChange?: (e: CheckboxChangeEvent) => void;
}

const MasterList = ({onChange}: masterProps) => {
  return (
    <>
      {masterMocks.map((item, index) => (
        <MasterCard
          key={index}
          onChange={onChange}
          name={item.name}
          rate={item.rate}
          icon={item.icon}
        />
      ))}
    </>
  );
};

export default MasterList;
