import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutHeader from "@/components/LayoutHeader";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { ToastContainer } from "react-toastify";
import TitleWithLogo from "@/components/title-with-logo";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import isAuth from "@/common/guard/isAuth";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const pathname = usePathname();
  if (pathname?.includes("admin")) isAuth();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ToastContainer theme="dark" />
        <LayoutHeader />
        {pathname && pathname?.includes("admin") ? (
          <div className="min-h-screen bg-fixed bg-contain md:bg-cover bg-left-top bg-repeat-y bg-[url('/background-img-nobg.png')] p-8 w-full h-full flex justify-center overflow-y-auto">
            <Component {...pageProps} />
          </div>
        ) : (
          <>
            <div className="text-black bg-fixed bg-contain md:bg-cover bg-left-top bg-repeat-y min-h-screen bg-[url('/background-img-nobg.png')] w-full h-full flex justify-center overflow-y-auto">
              <div className="space-y-4 my-8 h-full w-full px-8 md:max-w-3xl overflow-y-hidden flex flex-col justify-center items-center">
                <TitleWithLogo />
                <Component {...pageProps} />
              </div>
            </div>
            <div className="w-full cursor-pointer sticky pr-4 bottom-10 right-0 bg-none flex justify-end">
              <div
                className="bg-black flex-row flex px-2 py-1 space-x-1 rounded-xl"
                onClick={() =>
                  window.open("https://wa.me/553891920497", "_blank")
                }
              >
                <span className="font-bold">Suporte</span>
                <img src="/whatsapp.svg" height={20} width={20} />
              </div>
            </div>
            <Footer />
          </>
        )}
      </Provider>
    </QueryClientProvider>
  );
}
