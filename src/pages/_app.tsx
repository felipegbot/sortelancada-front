import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutHeader from "@/components/LayoutHeader";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col">
        <LayoutHeader />
        <div className="w-full flex justify-center">
          <div className="flex justify-center w-full max-w-[70%] ">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}