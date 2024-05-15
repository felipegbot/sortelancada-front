import { ReactElement, useState } from "react";
import { ChevronLeft, Database, LineChart, LogOut, Table2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@/common/hooks/use-window-size.hook";

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
export const CommonSidebarComponent = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(width < 768);
  const location = usePathname();

  const toggleOpen = () => {
    if (width > 768) return;
    setOpen(!open);
  };
  if (["/login", "/create-account", "/logout"].includes(location)) return null;
  return (
    <>
      <div
        className={`absolute w-screen z-20 flex flex-row justify-between items-center px-2 md:px-5`}
      >
        {width < 768 && (
          <button
            className={`rounded-full p-3 pl-10 transition-all ease-in-out duration-200 ${
              open ? "translate-x-44" : "-translate-x-10"
            } bg-black border-2 border-accent text-white flex flex-row items-center`}
            onClick={toggleOpen}
          >
            <ChevronLeft
              size={20}
              className={`transition-all ${open ? "rotate-0" : "rotate-180"}`}
            />
          </button>
        )}
      </div>
      <div
        className={`${
          open ? "absolute md:relative left-0" : "absolute -left-52"
        } transition-all`}
      >
        <div
          className={`relative z-30 flex flex-col h-screen justify-between bg-secondary shadow-lg md:w-[68px]`}
          style={{
            transition: "width 0.2s ease-in-out",
            width: open ? 224 : 0,
          }}
        >
          <div className={`flex flex-col h-full justify-between`}>
            <div className="space-y-4">
              <div className="flex items-center justify-center my-3 p-0 shadow pb-[11px]">
                <img src="/sortelancada-transformed.webp" />
              </div>

              <SidebarItem
                location={location}
                label="Gráficos"
                icon={<LineChart />}
                url="/"
              />
              <SidebarItem
                location={location}
                label="Tabelas"
                icon={<Table2 />}
                url="/tables"
              />
              <SidebarItem
                location={location}
                label="Dados"
                icon={<Database />}
                url="/data"
              />
            </div>
            <SidebarItem
              location={location}
              label="Sair"
              icon={<LogOut color="gray" />}
              url="/logout"
            />
          </div>
        </div>
      </div>
      {width < 768 && (
        <div
          onClick={toggleOpen}
          className={`absolute top-0 left-0 z-10 ${
            open ? "w-screen opacity-80" : "w-screen opacity-0 invisible"
          } h-screen bg-secondary transition-opacity`}
        />
      )}
    </>
  );
};
