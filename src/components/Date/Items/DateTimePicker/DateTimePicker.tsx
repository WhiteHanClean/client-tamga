import React from "react";
import s from "./DateTimePicker.module.scss";

interface DateTimePickerProps {
  timeSlots?: Array<{ key: string; value: string }>;
  onTimeChange?: (time: string | null) => void;
  selectedTime: string | null;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  timeSlots = [],
  onTimeChange,
  selectedTime,
}) => {
  const handleButtonClick = (key: string, value: string) => {
    if (selectedTime === value) {
      onTimeChange && onTimeChange(null);
    } else {
      onTimeChange && onTimeChange(value);
    }
  };

  return (
    <div className={s.date_time_picker}>
      {timeSlots.map((slot) => (
        <button
          key={slot.key}
          className={selectedTime === slot.value ? s.active : ""}
          onClick={() => handleButtonClick(slot.key, slot.value)}
        >
          {slot.value}
        </button>
      ))}
    </div>
  );
};

export default DateTimePicker;
