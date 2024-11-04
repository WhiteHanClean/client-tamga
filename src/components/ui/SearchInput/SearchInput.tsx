import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import s from "./SearchInput.module.scss";

interface SearchInputProps {
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  return (
    <div className={s.search}>
      <Input
        size="large"
        allowClear={{ clearIcon: <CloseOutlined /> }}
        placeholder="Поиск"
        prefix={<SearchOutlined />}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};


export default SearchInput;
