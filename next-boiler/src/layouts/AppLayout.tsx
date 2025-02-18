"use client";
import React, { useCallback, useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Heading from "@/components/Heading/Heading";
import Drawer from "@/components/Drawer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setScreenSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const navItems = [
    {
      name: "Dashboard",
      key: "dashboard",
      onClick: () => {},
      icon: null,
    },
    {
      name: "Container Management",
      key: "container-management",
      onClick: () => {},
      icon: null,
      children: [
        {
          name: "Loading Program",
          key: "loading-program",
          onClick: () => {},
          icon: null,
        },
        {
          name: "Surveyor EIR Form",
          key: "surveyor-form",
          onClick: () => {},
          icon: null,
        },
        {
          name: "Gate In/Out",
          key: "gate-in-out",
          onClick: () => {},
          icon: null,
        },
      ],
    },
    {
      name: "Job Assignment",
      key: "job-assignment",
      onClick: () => {},
      icon: null,
    },
    {
      name: "Available Workers",
      key: "available-workers",
      onClick: () => {},
      icon: null,
    },
    {
      name: "Deport Reports",
      key: "deport-reports",
      onClick: () => {},
      icon: null,
    },
  ];

  return (
    <div className="flex min-h-dvh bg-surface-300">
      {screenSize >= 1024 && (
        <Drawer items={navItems} className="sticky top-0" />
      )}
      {screenSize < 1024 && isSidebarOpen && (
        <div className="fixed w-screen h-dvh backdrop-blur-sm z-10">
          <Drawer
            className="fixed"
            showCloseBtn={true}
            closeDrawer={() => setIsSidebarOpen(false)}
            items={navItems}
          />
        </div>
      )}

      {/* main container */}
      <main className="flex-1">
        {/* header */}
        <header className="flex justify-between items-center py-5 px-10 bg-[#FFF] sticky top-0">
          <div className="flex justify-center items-center gap-5">
            {screenSize < 1024 && (
              <button onClick={() => setIsSidebarOpen(true)}>
                <MenuIcon />
              </button>
            )}
            {screenSize >= 430 && (
              <Heading level="h1" weight="bold" className="text-surface-400">
                Dashboard
              </Heading>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <span>Noyan Ahmad (Admin)</span>
          </div>
        </header>
        {/* header */}

        <div className="px-10 py-5">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
