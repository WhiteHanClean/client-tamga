import React from "react";
import MobileBtn from "@/components/ui/MobileBtn/MobileBtn";

interface serviceDrawerBody {
  onClick?: () => void;
}

const ServiceDrawerBody = ({ onClick }: serviceDrawerBody) => {
  return <MobileBtn onClick={onClick} nameBtn="Далее" />;
};

export default ServiceDrawerBody;
