// src/components/CalendarComponent.tsx
import React from "react";
import { Calendar } from "@/components/ui/calendar";

interface CalendarComponentProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ selectedDate, onSelectDate }) => {
  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={onSelectDate}
      className="rounded-md border"
    />
  );
};

export default CalendarComponent;
