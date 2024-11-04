import Image from "next/image";
import React from "react";

interface secondDrawerProps {
  icon?: string;
}

const SecondDrawerHeader = ({
  icon = "/SecondDrawer.png",
}: secondDrawerProps) => {
  return <Image src={icon} width={54} height={54} alt="drawer-img" />;
};

export default SecondDrawerHeader;
