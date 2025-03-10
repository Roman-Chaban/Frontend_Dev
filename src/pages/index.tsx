import Head from "next/head";

import { Hero } from "@/widgets/Hero/ui/Hero";
import { Skills } from "@/widgets/Skills/ui/Skills";

export default function HomePage() {
   return (
      <>
         <Head>
            <title>Personal Website</title>
         </Head>
         <Hero />
         <Skills />
      </>
   );
}
