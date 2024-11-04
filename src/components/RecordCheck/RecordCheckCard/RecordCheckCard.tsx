import React from "react";
import s from "./RecordCheckCard.module.scss";
import SecondaryCharacter from "@/components/ui/SecondaryCharacter/SecondaryCharacter";

const RecordCheckCard = () => {
  return (
    <div className={s.record_check_card}>
      <h3>Среда, 22 мая</h3>
      <h4>16:00-18:30</h4>
      <SecondaryCharacter
        icon="/Specialists/Specialist.png"
        name="Николай"
        showRate
        rate={5}
        rateDesc="20 отзывов"
      />
    </div>
  );
};

export default RecordCheckCard;
