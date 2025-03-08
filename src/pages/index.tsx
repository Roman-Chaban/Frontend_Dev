import { Hero } from "@/widgets/Hero/ui/Hero";
import Head from "next/head";

export default function HomePage() {
   return (
      <>
         <Head>
            <title>Personal Website</title>
         </Head>
         <Hero />
      </>
   );
}
