import Head from "next/head";

import { Hero } from "@/widgets/Hero/ui/Hero";
import { Skills } from "@/widgets/Skills/ui/Skills";
import { PersonalExperience } from "@/widgets/PersonalExperience/ui/PersonalExperience";
import { Portfolio } from "@/widgets/Portfolio/ui/Portfolio";

export default function HomePage() {
   return (
      <>
         <Head>
            <title>Frontend - Dev | Home</title>
            <link
               rel='shortcut icon'
               href='/icons/favicon/favicon.svg'
               type='image/x-icon'
            />
         </Head>
         <Hero />
         <Skills />
         <PersonalExperience />
         <Portfolio />
      </>
   );
}
