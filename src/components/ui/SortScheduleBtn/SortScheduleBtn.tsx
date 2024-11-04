import React, { MouseEvent, useRef } from "react";
import s from "./SortScheduleBtn.module.scss";

interface SortScheduleBtnProps {
  onTabClick: (tab: string) => void;
  activeTab: string | null;
}

const SortScheduleBtn = ({ onTabClick, activeTab }: SortScheduleBtnProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const tabs = ["Классический", "Релакс", "Лечебный", "Точечный"];

  const handleMouseDown = (e: MouseEvent) => {
    if (containerRef.current) {
      startX.current = e.pageX - containerRef.current.offsetLeft;
      scrollLeft.current = containerRef.current.scrollLeft;
      containerRef.current.addEventListener("mousemove", handleMouseMove);
      containerRef.current.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMouseMove = (e: any) => {
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const scroll = x - startX.current;
      containerRef.current.scrollLeft = scrollLeft.current - scroll;
    }
  };

  const handleMouseUp = () => {
    if (containerRef.current) {
      containerRef.current.removeEventListener("mousemove", handleMouseMove);
      containerRef.current.removeEventListener("mouseup", handleMouseUp);
    }
  };

  return (
    <div ref={containerRef} onMouseDown={handleMouseDown} className={s.sort}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={activeTab === tab.toLowerCase() ? s.active : ""}
          onClick={() => onTabClick(tab.toLowerCase())}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SortScheduleBtn;
