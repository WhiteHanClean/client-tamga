import React from "react";
import s from "./RecordCheck.module.scss";
import Container from "../Container/Container";
import RecordCheckSuccess from "./Items/RecordCheckSuccess/RecordCheckSuccess";
import RecordCheckCard from "./RecordCheckCard/RecordCheckCard";
import RecordCheckNav from "./RecordCheckNav/RecordCheckNav";
import RecordSchedule from "./RecordSchedule/RecordSchedule";

const RecordCheck = () => {
  return (
    <div className={s.record}>
      <RecordCheckSuccess />
      <Container className={s.record_container}>
        <RecordCheckCard />
      </Container>
      <RecordCheckNav />
      <Container className={s.record_schedule_container}>
        <RecordSchedule />
      </Container>
    </div>
  );
};

export default RecordCheck;
