import React, { FC, useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Drawer } from "antd";
import s from "./ServiceDrawer.module.scss";
import classNames from "classnames";

interface DrawerProps {
  children: React.ReactNode;
  footerTitle?: string;
  footerBtn?: React.ReactNode;
  placement?: "top" | "right" | "left" | "bottom";
  buttonTitle?: string;
  buttonIcon?: React.ReactNode;
  headerItems?: React.ReactNode;
  className?: string;
  drawerOpen?: boolean;
  mask?: boolean;
  onClose?: () => void;
  closable?: boolean;
}

const ServiceDrawer: FC<DrawerProps> = ({
  children,
  placement = "right",
  headerItems,
  className,
  drawerOpen = false,
  mask,
  onClose,
  closable,
}) => {
  const [open, setOpen] = useState<boolean>(drawerOpen);
  const drawerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(drawerOpen ?? false);
  }, [drawerOpen]);

  return (
    <>
      <div
        className={classNames(s.drawer_body, className)}
        ref={drawerContainerRef}
      >
        {drawerContainerRef.current &&
          ReactDOM.createPortal(
            <Drawer
              closable={closable}
              mask={mask}
              placement={placement}
              title={headerItems}
              open={open}
              onClose={onClose}
              maskClosable={false}
              getContainer={false}
            >
              {children}
            </Drawer>,
            drawerContainerRef.current
          )}
      </div>
    </>
  );
};

export default ServiceDrawer;
