import React, { useState } from "react";
import { serviceMocks } from "../utils/mocks/serviceMocks";
import Container from "../Container/Container";
import Title from "../ui/Title/Title";
import SortScheduleBtn from "../ui/SortScheduleBtn/SortScheduleBtn";
import SearchInput from "../ui/SearchInput/SearchInput";
import ServicesList from "./ServicesList/ServicesList";
import ServiceDrawer from "../ui/ServiceDrawer/ServiceDrawer";
import ServiceDrawerBody from "./ServiceDrawerBody/ServiceDrawerBody";
import type { CheckboxProps } from "antd";
import s from "./Services.module.scss";
import ServiceEditBody from "./ServiceEditBody/ServiceEditBody";
import ServiceDrawerHeader from "./Items/ServiceDrawerHeader/ServiceDrawerHeader";
import ServiceEditHeader from "./Items/ServiceEditHeader/ServiceEditHeader";

interface ServicesProps {
  hideStepperSchedule: (value: string) => void;
  furtherClick?: () => void;
}

const Services = ({ furtherClick, hideStepperSchedule }: ServicesProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerEdit, setDrawerEdit] = useState(false);
  const [activeCheckboxCount, setActiveCheckboxCount] = useState(0);

  const hideStepper = (value: string) => {
    setSearchValue(value);
    hideStepperSchedule(value);
  };

  const editOrder = () => {
    setDrawerOpen(false);
    setDrawerEdit(true);
  };

  const closseOrder = () => {
    setDrawerEdit(false);
    setDrawerOpen(true);
  };

  const handleTabClick = (tab: string) => {
    if (activeTab === tab.toLowerCase()) {
      setActiveTab(null);
    } else {
      setActiveTab(tab.toLowerCase());
    }
  };

  const checkActiveCheckbox: CheckboxProps["onChange"] = (value) => {
    if (value.target.checked) {
      setActiveCheckboxCount((prevCount) => prevCount + 1);
      setDrawerOpen(true);
    } else {
      setActiveCheckboxCount((prevCount) => {
        const newCount = prevCount - 1;
        if (newCount === 0) {
          setDrawerOpen(false);
        }
        return newCount;
      });
    }
  };

  const filteredServices = serviceMocks.filter((section) => {
    const title = section[0].title?.toLowerCase();
    const matchesSearch = title?.includes(searchValue.toLowerCase());
    const matchesTab = activeTab ? title === activeTab.toLowerCase() : true;

    return matchesSearch && matchesTab;
  });

  return (
    <div className={s.services}> 
      {!searchValue && (
        <>
          <Container>
            <Title title="Выберите услугу" />
          </Container>
          <SortScheduleBtn onTabClick={handleTabClick} activeTab={activeTab} />
        </>
      )}
      <Container>
        <SearchInput onChange={hideStepper} />
        {filteredServices.map((section, index) => {
          const title = section[0].title || "title";
          const services = section.slice(1) as any[];

          return (
            <ServicesList
              checkActiveCheckbox={checkActiveCheckbox}
              key={index}
              mainTitle={title}
              services={services}
            />
          );
        })}
        <ServiceDrawer
          headerItems={<ServiceDrawerHeader editOrder={editOrder} />}
          closable={false}
          mask={false}
          drawerOpen={drawerOpen}
          placement="bottom"
        >
          <ServiceDrawerBody onClick={furtherClick} />
        </ServiceDrawer>
        <ServiceDrawer
          className={s.edit_drawer}
          closable={true}
          mask={true}
          onClose={closseOrder}
          drawerOpen={drawerEdit}
          placement="bottom"
          headerItems={<ServiceEditHeader />}
        >
          <ServiceEditBody />
        </ServiceDrawer>
      </Container>
    </div>
  );
};

export default Services;
