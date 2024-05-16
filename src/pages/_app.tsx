import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutHeader from "@/components/LayoutHeader";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutHeader />
      <div className="w-full h-full flex justify-center overflow-y-auto">
        <div className="flex min-h-[94.1vh] justify-center w-full max-w-[70%] overflow-y-hidden">
          <Component {...pageProps} />
        </div>
      </div>
    </QueryClientProvider>
  );
}
