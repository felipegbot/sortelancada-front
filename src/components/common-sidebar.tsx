import { ReactElement, useEffect, useState } from "react";
import {
  ChevronLeft,
  CircleDollarSign,
  HelpCircle,
  HomeIcon,
  LogOut,
  Star,
  Ticket,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem: React.FC<{
  label: string;
  icon: ReactElement;
  url: string;
  location: string;
}> = ({ icon, label, url, location }) => {
  return (
    <Link
      href={url}
      className={`flex flex-row items-center transition-colors duration-300 mx-3 my-1 rounded-lg justify-start p-2  pl-3 ${
        location === url
          ? "bg-white text-black"
          : "text-white hover:bg-black hover:bg-opacity-20"
      }`}
    >
      {icon}
      <span className={`ml-2 transition-all`}>{label}</span>
    </Link>
  );
};
export const CommonSidebarComponent = ({
  isOpen,
  toggleIsOpen,
}: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}) => {
  // const { width } = useWindowSize();
  const location = usePathname();

  if (["/login", "/create-account", "/logout"].includes(location)) return null;
  return (
    <>
      <div
        className={`${
          isOpen ? "absolute left-0" : "absolute -left-52"
        } transition-all`}
      >
        <div
          className={`relative z-30 flex flex-col h-screen justify-between bg-secondary shadow-lg md:w-[68px]`}
          style={{
            transition: `width ease-in-out 0.2s`,
            width: isOpen ? 224 : 0,
          }}
        >
          <div className={`flex flex-col h-full justify-between`}>
            <div className="space-y-4">
              <div className="flex items-center flex-row align-center justify-evenly my-3 p-0 shadow pb-[11px]">
                <img
                  src="/sortelancada-transformed.webp"
                  style={{ height: 100, width: 150 }}
                />
                <div className="cursor-pointer" onClick={toggleIsOpen}>
                  <ChevronLeft color="white" />
                </div>
              </div>

              <SidebarItem
                location={location}
                label="Início"
                icon={<HomeIcon />}
                url="/"
              />
              <SidebarItem
                location={location}
                label="Rifas"
                icon={<CircleDollarSign />}
                url="/rifas"
              />
              <SidebarItem
                location={location}
                label="Ganhadores"
                icon={<Star />}
                url="/ganhadores"
              />
              <SidebarItem
                location={location}
                label="Minhas Cotas"
                icon={<Ticket />}
                url="/tickets"
              />
            </div>
            <div className="">
              <SidebarItem
                location={location}
                label="Suporte"
                icon={<HelpCircle />}
                url="/logout"
              />
              <SidebarItem
                location={location}
                label="Sair"
                icon={<LogOut color="gray" />}
                url="/logout"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={toggleIsOpen}
        className={`absolute top-0 left-0 z-10 ${
          // i dont know why, but 97.6vh its the max
          isOpen ? "w-screen opacity-80" : "w-0 opacity-0 invisible"
        } h-screen bg-secondary transition-opacity`}
      />
    </>
  );
};
