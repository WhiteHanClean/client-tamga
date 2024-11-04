import React, { useState } from "react";
import Container from "../Container/Container";
import SecondaryCharacter from "../ui/SecondaryCharacter/SecondaryCharacter";
import ServiceDrawer from "../ui/ServiceDrawer/ServiceDrawer";
import Title from "../ui/Title/Title";
import { timeMocksEvening, timeMocksMorning } from "../utils/mocks/timeMocks";
import s from "./Date.module.scss";
import DateDrawerBody from "./DateDrawerBody/DateDrawerBody";
import DateAccordion from "./Items/DateAccordion/DateAccordion";
import DateCalendar from "./Items/DateCalendar/DateCalendar";
import DateTimePicker from "./Items/DateTimePicker/DateTimePicker";

interface DateProps {
  furtherClick?: () => void;
}

const Date = ({ furtherClick }: DateProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedAccordion, setSelectedAccordion] = useState<string | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    checkAndOpenDrawer(date, selectedTime);
  };

  const handleTimeChange = (time: string | null, accordion: string) => {
    setSelectedTime(time);
    setSelectedAccordion(accordion);
    checkAndOpenDrawer(selectedDate, time);
  };

  const checkAndOpenDrawer = (date: Date | null, time: string | null) => {
    if (date && time) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className={s.date}>
      <Container>
        <Title title="Дата и время" />
        <SecondaryCharacter
          icon="/Specialists/Specialist.png"
          name="Николай"
          rate={5}
          showRate
          rateDesc="20 отзывов"
          showEdit
        />
      </Container>
      <DateCalendar onDateChange={handleDateChange} />
      <DateAccordion
        title="Утро"
        children={
          <DateTimePicker
            timeSlots={timeMocksMorning}
            onTimeChange={(time) => handleTimeChange(time, "morning")}
            selectedTime={selectedAccordion === "morning" ? selectedTime : null}
          />
        }
      />
      <DateAccordion
        title="День"
        children={
          <DateTimePicker
            timeSlots={timeMocksEvening}
            onTimeChange={(time) => handleTimeChange(time, "evening")}
            selectedTime={selectedAccordion === "evening" ? selectedTime : null}
          />
        }
      />
      <ServiceDrawer
        closable={false}
        mask={false}
        placement="bottom"
        drawerOpen={open}
      >
        <DateDrawerBody onClick={furtherClick} />
      </ServiceDrawer>
    </div>
  );
};

export default Date;
