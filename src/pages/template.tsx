import { CommonSidebarComponent } from "@/components/common-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      layout
      <CommonSidebarComponent />
      {children}
    </div>
  );
}
