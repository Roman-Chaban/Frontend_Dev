import Head from "next/head";

import { Hero } from "@/widgets/Hero/ui/Hero";
import { Skills } from "@/widgets/Skills/ui/Skills";
import { PersonalExperience } from "@/widgets/PersonalExperience/ui/PersonalExperience";

export default function HomePage() {
   return (
      <>
         <Head>
            <title>Personal Website</title>
         </Head>
         <Hero />
         <Skills />
         <PersonalExperience />
      </>
   );
}
