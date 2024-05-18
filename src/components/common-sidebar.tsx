import { ReactElement, useState } from "react";
import {
  ChevronLeft,
  CircleDollarSign,
  Handshake,
  HelpCircle,
  HomeIcon,
  LogOut,
  ScrollText,
  Star,
  Ticket,
  UserPlus,
  Zap,
} from "lucide-react";
import CreateCommonUserModal from "@/components/common/create-common-user-modal";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarFunctionItem: React.FC<{
  label: string;
  icon: ReactElement;
  onClick: () => void;
}> = ({ icon, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex flex-row items-center transition-colors duration-300 mx-3 my-1 rounded-lg justify-start p-2  pl-3 text-white hover:bg-black hover:bg-opacity-20`}
    >
      {icon}
      <span className={`ml-2 transition-all`}>{label}</span>
    </div>
  );
};

const SidebarItem: React.FC<{
  label: string;
  icon: ReactElement;
  url: string;
  isSelected?: boolean;
}> = ({ icon, label, url, isSelected }) => {
  return (
    <Link
      href={url}
      className={`flex flex-row items-center transition-colors duration-300 mx-3 my-1 rounded-lg justify-start p-2  pl-3 ${
        isSelected
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
  const location = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
                  src="/moneyedolar.gif"
                  style={{ height: 100, width: 100 }}
                />
                <div className="cursor-pointer" onClick={toggleIsOpen}>
                  <ChevronLeft color="white" />
                </div>
              </div>

              <CreateCommonUserModal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
              />

              <SidebarItem
                isSelected={location === "/"}
                label="Início"
                icon={<HomeIcon />}
                url="/"
              />
              <SidebarFunctionItem
                label="Cadastro/Login"
                icon={<UserPlus />}
                onClick={() => {
                  console.log("Create common user");
                  setIsModalOpen(true);
                }}
              />
              <SidebarItem
                // TODO: implementar a logica para redirecionar à rifa ativa
                isSelected={location === "/rifas"}
                label="Compra Rápida"
                icon={<Zap />}
                url="/rifas"
              />
              <SidebarItem
                isSelected={location === "/rifas"}
                label="Rifas"
                icon={<CircleDollarSign />}
                url="/rifas"
              />
              <SidebarItem
                isSelected={location === "/tickets"}
                label="Minhas Cotas"
                icon={<Ticket />}
                url="/tickets"
              />
              <SidebarItem
                isSelected={location === "/ganhadores"}
                label="Ganhadores"
                icon={<Star />}
                url="/ganhadores"
              />
            </div>
            <div className="">
              <SidebarItem
                isSelected={location === "/politicas"}
                label="Políticas"
                icon={<Handshake />}
                url="/politicas"
              />
              <SidebarItem
                isSelected={location === "/termos-de-uso"}
                label="Termos de uso"
                icon={<ScrollText />}
                url="/termos-de-uso"
              />
              <SidebarItem
                isSelected={location === "/suporte"}
                label="Dúvidas e Suporte"
                icon={<HelpCircle />}
                url="/suporte"
              />
              <SidebarItem
                isSelected={location === "/logout"}
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
          isOpen ? "w-screen opacity-80" : "w-0 opacity-0 invisible"
        } h-screen bg-secondary transition-opacity`}
      />
    </>
  );
};
