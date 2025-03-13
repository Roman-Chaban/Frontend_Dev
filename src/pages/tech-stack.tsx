import Head from "next/head";

import { TechStack } from "@/features/TechStack/TechStack";

export default function TechStackPage() {
   return (
      <>
         <Head>
            <title>Frontend - Dev | Tech Stack</title>
            <link
               rel='shortcut icon'
               href='/icons/favicon/favicon.svg'
               type='image/x-icon'
            />
         </Head>
         <TechStack />
      </>
   );
}
