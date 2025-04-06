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
      <section className='relative z-10 mb-20 w-full'>
         <div className='relative z-20 mx-auto w-full max-w-[90rem] px-8'>
            <h1 className='mb-12 text-center text-5xl font-extrabold text-gray-100 md:text-7xl'>
               My Tech Stack
            </h1>

            <motion.ul
               className='z-20 grid grid-cols-1 gap-10 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black p-10 shadow-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
               variants={containerVariants}
               initial='hidden'
               animate='visible'
            >
               {skillsList.map((skill) => (
                  <motion.li
                     key={skill.id}
                     className='flex cursor-pointer flex-col items-center gap-6 rounded-xl bg-gray-800/70 p-8 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl'
                     variants={itemVariants}
                  >
                     <div className='flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 p-5 shadow-inner'>
                        <Image
                           title={skill.label}
                           className='object-contain'
                           src={skill.icon}
                           alt={skill.label}
                           width={100}
                           height={100}
                        />
                     </div>
                     <h5 className='text-center text-xl font-semibold text-gray-200'>
                        {skill.label}
                     </h5>
                  </motion.li>
               ))}
            </motion.ul>
         </div>
         <Image
            priority
            className='absolute top-0 left-0 z-0 w-full opacity-20'
            src={"/backgrounds/portfolio-bg.svg"}
            width={500}
            height={500}
            alt='Header background'
         />
      </section>
   );
};

export { TechStack };
