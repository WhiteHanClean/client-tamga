import React from "react";
import s from "./DetailsForm.module.scss";
import { Checkbox, Form, Input } from "antd";
import FormInputMask from "../Items/FormInputMask/FormInputMask";

const { TextArea } = Input;

const DetailsForm = () => {
  const [form] = Form.useForm();

  return (
    <div className={s.details_form}>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item name="name" label="Ваше имя" rules={[{ required: true, message: "Введите имя"}]}>
          <Input placeholder="Введите имя" />
        </Form.Item>
        <Form.Item name="email" label="E-Mail" rules={[{ required: true, message: "Введите почту"}]}>
          <Input placeholder="Введите вашу почту" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Код страны и номер телефона"
          rules={[
            { required: true, message: "Пожалуйста, введите номер телефона" },
          ]}
        >
          <FormInputMask />
        </Form.Item>
        <Form.Item label="Комментарий">
          <TextArea placeholder="Пожелание, комментарий" autoSize />
        </Form.Item>
        <Form.Item>
          <div className={s.details_form_offert}>
            <Checkbox />
            <p>
              Я предоставляю согласие на обработку персональных данных, а также
              подтверждаю ознакомление и согласие c
              <span> Политикой конфиденциальности</span> и
              <span> Пользовательским соглашением</span>
            </p>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DetailsForm;
