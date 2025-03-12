import type { AppProps } from "next/app";

import { Poppins } from "next/font/google";

import { Header } from "@/widgets/Header/ui/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";

const poppins = Poppins({
   subsets: ["latin"],
   display: "swap",
   weight: ["400", "500", "600", "700", "800", "900"],
});

import "@/shared/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <div className={`grid h-full w-full grid-cols-12 ${poppins.className}`}>
         <Header />
         <main className='col-span-12 min-h-[100vh] w-full'>
            <Component {...pageProps} />
         </main>
         <Footer />
      </div>
   );
}
