import type { AppProps } from "next/app";

import { Poppins } from "next/font/google";

import { AnimatePresence, motion } from "framer-motion";

import { useRouter } from "next/router";

import { Header } from "@/widgets/Header/ui/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";

import {
   animateAnimation,
   exitAnimation,
   initialAnimation,
   pageTransition,
} from "@/shared/animations/app-animation/app-animation";

const poppins = Poppins({
   subsets: ["latin"],
   display: "swap",
   weight: ["400", "500", "600", "700", "800", "900"],
});

import "@/shared/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
   const { pathname } = useRouter();

   return (
      <div
         className={`flex min-h-screen flex-col overflow-hidden ${poppins.className}`}
      >
         <Header />
         <main className='flex-1'>
            <AnimatePresence mode='wait'>
               <motion.div
                  key={pathname}
                  initial={initialAnimation}
                  animate={animateAnimation}
                  exit={exitAnimation}
                  transition={pageTransition}
               >
                  <Component {...pageProps} />
               </motion.div>
            </AnimatePresence>
         </main>
         <Footer />
      </div>
   );
}
