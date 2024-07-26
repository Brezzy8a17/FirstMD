import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/utils";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
//importing functions to logout user
import { useAuth } from "../utils/AuthContext";
//import userInfo
import { appleImg } from "@/utils";
import { useClient } from "@/utils/AppwriteClient";

export function SidebarDemo() {
  const { user, logoutUser } = useAuth();
  const clientInfo = useClient();

  const name = clientInfo ? clientInfo.name : "User...";

  const links = [
    {
      label: <span className="text-slate-300">Dashboard</span>,
      path: "#",
      icon: (
        <IconBrandTabler className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: <span className="text-slate-300"> Profile </span>,
      path: "/",
      icon: (
        <IconUserBolt className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: <span className="text-slate-300"> Settings </span>,
      path: "/",
      icon: (
        <IconSettings className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: <span className="text-slate-300"> Logout </span>,
      icon: (
        <IconArrowLeft className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onclick: logoutUser,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-zinc dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-black dark:border-neutral-700 overflow-hidden h-screen " // changed to h-screen
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  to={link.path}
                  onClick={link.onclick}
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: <span className="text-white">{name}</span>,
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <div className="flex items-center">
      <div>
        <img src={appleImg} alt="logo"></img>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="ml-2 font-medium text-white dark:text-white whitespace-pre"
      >
        First MD
      </motion.span>
    </div>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
    >
      <div>
        <img src={appleImg} alt="logo"></img>
      </div>
    </Link>
  );
};

const Dashboard = () => {
  return <div className="flex flex-1"></div>;
};

export default SidebarDemo;
