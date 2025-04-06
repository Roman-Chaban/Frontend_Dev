import Head from "next/head";

import { AboutInformation } from "@/features/AboutInformation/ui/AboutInformation";

export default function AboutPage() {
   return (
      <>
         <Head>
            <title>Frontend - Dev | About</title>
            <link
               rel='shortcut icon'
               href='/icons/favicon/favicon.svg'
               type='image/x-icon'
            />
         </Head>
         <AboutInformation />
      </>
   );
}
