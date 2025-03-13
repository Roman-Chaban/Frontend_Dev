import { FC } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import {
   containerVariants,
   itemVariants,
} from "../../shared/animations/tech/tech-stack";

import { skillsList } from "../../widgets/Skills/data/skills";

const TechStack: FC = () => {
   return (
      <section className='relative z-20 mb-20 w-full'>
         <div className='relative z-20 mx-auto w-full px-30 max-[90.0625rem]:px-18 max-[86.25rem]:px-10 max-[30.8125rem]:px-5'>
            <h1 className='mb-12 max-w-[96.875rem] text-center text-5xl font-bold md:text-7xl'>
               My Tech Stack
            </h1>

            <motion.ul
               className='z-20 grid grid-cols-1 gap-8 rounded-3xl p-10 shadow-lg backdrop-blur-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
               variants={containerVariants}
               initial='hidden'
               animate='visible'
            >
               {skillsList.map((skill) => (
                  <motion.li
                     key={skill.id}
                     className='flex cursor-pointer flex-col items-center gap-4 rounded-xl bg-gray-700/50 p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'
                     variants={itemVariants}
                  >
                     <div className='flex h-24 w-24 items-center justify-center rounded-full bg-gray-800 p-4'>
                        <Image
                           title={skill.label}
                           className='object-contain'
                           src={skill.icon}
                           alt={skill.label}
                           width={90}
                           height={90}
                        />
                     </div>
                     <h5 className='text-center text-lg font-semibold text-white'>
                        {skill.label}
                     </h5>
                  </motion.li>
               ))}
            </motion.ul>
         </div>
         <Image
            priority
            className='absolute top-0 left-0 z-10 w-full opacity-10'
            src={"/backgrounds/portfolio-bg.svg"}
            width={500}
            height={500}
            alt='Header background'
         />
      </section>
   );
};

export { TechStack };
