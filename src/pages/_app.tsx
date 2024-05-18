import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutHeader from "@/components/LayoutHeader";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ToastContainer theme="dark" />
        <LayoutHeader />
        <div className="text-black bg-contain bg-repeat-space bg-[url('/background-img-nobg.png')] w-full h-full flex justify-center overflow-y-auto">
          <div className="flex min-h-[94.1vh] justify-center w-full max-w-[70%] overflow-y-hidden">
            <Component {...pageProps} />
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
