import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutHeader from "@/components/LayoutHeader";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { ToastContainer } from "react-toastify";
import TitleWithLogo from "@/components/title-with-logo";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ToastContainer theme="dark" />
        <LayoutHeader />
        <div className="text-black bg-fixed bg-cover bg-repeat-y bg-[url('/background-img-nobg.png')] w-full h-full flex justify-center overflow-y-auto">
          <div className="space-y-4 my-8 h-full w-full px-8 md:max-w-3xl overflow-y-hidden flex flex-col justify-center items-center">
            <TitleWithLogo />
            <Component {...pageProps} />
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
