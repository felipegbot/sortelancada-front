import { useRouter } from "next/router";
import { CommonSidebarComponent } from "./common-sidebar";
import { useState } from "react";
import { CircleUser, Menu } from "lucide-react";

export default function LayoutHeader() {
  const router = useRouter();
  const AdminSidebarComponent = () => <div>Admin Sidebar</div>;
  const [isOpen, setIsOpen] = useState(false);
  const isAdmin = router.pathname.startsWith(`/admin`);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-[72px] bg-black sticky top-0 flex flex-row justify-between z-50">
      <div className="absolute">
        {isAdmin ? (
          <AdminSidebarComponent />
        ) : (
          <CommonSidebarComponent isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        )}
      </div>
      <div
        className="h-full flex items-center px-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </div>
      <span className="max-md:text-tiny h-full flex items-center">
        AS MELHORES AÇÕES E PRÊMIOS 🍀
      </span>

      {isAdmin ? (
        <div className="p-4">
          <CircleUser />
        </div>
      ) : (
        <div className="p-2 w-[70px] h-[70px]">
          <img src="/logo.svg" />
        </div>
      )}
    </div>
  );
}
