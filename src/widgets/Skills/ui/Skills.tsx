import { type FC } from "react";

import Image from "next/image";

import { Container } from "@/shared/ui/Container/Container";

import { skillsList } from "../data/skills";

import styles from "./Skills.module.css";

const Skills: FC = () => {
   return (
      <Container
         tag='section'
         className='bg-skills relative h-full w-full overflow-hidden p-5'
      >
         <div
            className={`${styles["animate-scroll"]} col-span-12 flex w-max py-8`}
         >
            <ul className='flex w-full items-center gap-10 px-10'>
               {[...skillsList, ...skillsList].map((item, index) => (
                  <li
                     key={index}
                     className='listItem flex w-[6.25rem] flex-col items-center gap-1.5'
                  >
                     <div className='flex h-20 w-20 items-center justify-center'>
                        <Image
                           priority
                           className={styles.icon}
                           src={item.icon}
                           alt={item.label}
                           width={70}
                           height={70}
                        />
                     </div>
                     <span className='mt-3 inline-block w-full max-w-20 text-center text-[1.1rem] font-medium whitespace-nowrap text-white'>
                        {item.label}
                     </span>
                  </li>
               ))}
            </ul>
         </div>
      </Container>
   );
};

export { Skills };
