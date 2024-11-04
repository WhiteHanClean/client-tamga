import React, { useEffect, useState } from "react";
import s from "./DetailCheck.module.scss";
import SecondaryCharacter from "../ui/SecondaryCharacter/SecondaryCharacter";
import Container from "../Container/Container";
import Title from "../ui/Title/Title";
import DetailsDateCard from "./Items/DetailsDateCard/DetailsDateCard";
import DetailsSchedule from "./DetailsSchedule/DetailsSchedule";
import DetailsForm from "./DetailsForm/DetailsForm";
import ServiceDrawer from "../ui/ServiceDrawer/ServiceDrawer";
import DetailsDrawerBody from "./DetailsDrawerBody/DetailsDrawerBody";
import { useRouter } from "next/navigation";

const DetailsCheck = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [open]);

  const onRecord = () => {
    router.push("/Record")
  }

  return (
    <div className={s.details_check}>
      <Container className={s.details_check_schedule}>
        <Title title="Детали записи" />
        <SecondaryCharacter
          icon="/Specialists/Specialist.png"
          name="Николай"
          showEdit
          showRate
          rate={5}
          rateDesc="20 отзывов"
        />
        <DetailsDateCard />
        <DetailsSchedule />
      </Container>

      <Container className={s.details_check_form}>
        <Title title="Ваши данные" className={s.details_check_form_title} />
        <DetailsForm />
      </Container>

      <ServiceDrawer
        drawerOpen={open}
        placement="bottom"
        closable={false}
        mask={false}
      >
        <DetailsDrawerBody onClick={onRecord}/>
      </ServiceDrawer>
    </div>
  );
};

export default DetailsCheck;
