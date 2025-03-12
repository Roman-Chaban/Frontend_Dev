import { skillsList } from "@/widgets/Skills/data/skills";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
   },
};

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
         <section className='relative w-full'>
            <div className='relative z-80 mx-auto w-full max-w-[96.875rem] px-30 max-[90.0625rem]:px-18 max-[86.25rem]:px-10 max-[30.8125rem]:px-5 max-[26.5625rem]:pb-15'>
               <h1 className='text-7xl text-white max-[56.25rem]:text-5xl'>
                  This is my Tech Stack
               </h1>

               <motion.ul
                  className='bg-skills my-20 grid grid-cols-6 gap-10 rounded-3xl p-10 max-[75rem]:grid-cols-5 max-[64rem]:grid-cols-4 max-[47.5rem]:grid-cols-3 max-[35.625rem]:grid-cols-2 max-[23.75rem]:grid-cols-1'
                  variants={containerVariants}
                  initial='hidden'
                  animate='visible'
               >
                  {skillsList.map((skill) => (
                     <motion.li
                        key={skill.id}
                        className='flex h-fit w-full max-w-[20rem] flex-1 flex-col items-center gap-3 text-center'
                        variants={itemVariants}
                     >
                        <div className='flex h-20 w-20 items-center justify-center'>
                           <Image
                              className='object-contain max-[90rem]:max-w-[4.5rem]'
                              src={skill.icon}
                              alt={skill.label}
                              width={90}
                              height={90}
                           />
                        </div>
                        <h5 className='text-white'>{skill.label}</h5>
                     </motion.li>
                  ))}
               </motion.ul>
            </div>
            <Image
               priority
               className='absolute top-35 left-0 z-5 h-auto w-auto max-w-[90%] max-[90rem]:max-h-[40rem] max-[90rem]:top-160'
               src={"/backgrounds/portfolio-bg.svg"}
               alt='Header background'
               width={300}
               height={300}
            />
         </section>
      </>
   );
}
