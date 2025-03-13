import { type FC } from "react";

import Image from "next/image";

import { SkillsList } from "./SkillsList";

import styles from "./Skills.module.css";

const Skills: FC = () => {
   return (
      <section className='h-auto w-full backdrop-blur-sm'>
         <div className='bg-skills relative z-30 mt-30'>
            <div className={styles.animatedWrapper}>
               <div className={styles.animatedScroll}>
                  <SkillsList />
               </div>
            </div>
         </div>
         <Image
            className='absolute top-[-300] left-0 z-10 w-auto'
            src={"/backgrounds/skills-bg.svg"}
            alt='Skills background'
            width={400}
            height={400}
         />
      </section>
   );
};

export { Skills };
