import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CommonSidebarComponent } from "@/components/common-sidebar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();

  const AdminSidebarComponent = () => <div>Admin Sidebar</div>;
  const isAdmin = router.pathname.startsWith(`/admin`);

  const Layout = isAdmin ? (
    <AdminSidebarComponent />
  ) : (
    <CommonSidebarComponent />
  );

  return (
    <QueryClientProvider client={queryClient}>
      {Layout}
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
