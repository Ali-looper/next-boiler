import React, { MouseEventHandler } from "react";
import Button from "./Button/Button";
import Image from "next/image";
import HtalLogoWhite from "@/assets/htal-logo-white.webp";
import CloseIcon from '@mui/icons-material/Clear';

type props = {
  showCloseBtn?: boolean;
  className: string;
  items: NavItem[];
  closeDrawer?: () => void;
};

type NavItem = {
  name: string;
  key: string;
  onClick?: MouseEventHandler;
  icon?: React.ReactNode;
  children?: NavItem[];
};

const Drawer: React.FC<props> = ({
  showCloseBtn = false,
  className,
  items,
  closeDrawer,
}) => {
  return (
    <aside
      className={`flex flex-col overflow-auto ${className} h-dvh justify-between w-[312px] bg-foundation-100 py-[31px] px-[24px]`}
    >
      <div className="mb-20 flex flex-col gap-14">
        <div className="relative">
          <Image src={HtalLogoWhite} alt="htal logo white" />
          {showCloseBtn && (
            <button className="absolute right-0 top-0 text-[#FFF]" onClick={closeDrawer}>
              <CloseIcon />
            </button>
          )}
        </div>
        <nav>
          <ul className="cursor-pointer">
            {items.map((item) => (
              <li key={item.key} onClick={item.onClick}>
                <div className="p-[10px] pl-[17px] rounded-[5px] text-[#FFF] hover:bg-foundation-200 flex gap-[10px] items-center">
                  {item.icon && <div>{item.icon}</div>}
                  <div>{item.name}</div>
                </div>
                {item.children && (
                  <ul>
                    {item.children.map((subItem) => (
                      <li key={subItem.key} onClick={item.onClick}>
                        <div className="p-[10px] pl-[30px] rounded-[5px] text-[#FFF] hover:bg-foundation-200 flex gap-[10px] items-center">
                          {item.icon && <div>{subItem.icon}</div>}
                          <div>{subItem.name}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-col gap-[10px]">
        <Button title="Profile" variant="outline"></Button>
        <Button title="Log Out" variant="outline"></Button>
      </div>
    </aside>
  );
};

export default Drawer;
