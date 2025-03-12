import { type FC } from "react";
import { motion } from "framer-motion";

import { HeroInformation } from "./HeroInformation";
import { HeroProfile } from "./HeroProfile";
import { HeroAbout } from "./HeroAbout";

const containerVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero: FC = () => {
   return (
      <section className='relative z-20 w-full'>
         <motion.div
            className='mx-auto max-w-[96.875rem] px-30 max-[90.0625rem]:px-18 max-[86.25rem]:px-10 max-[30.8125rem]:px-5'
            initial='hidden'
            animate='visible'
            variants={containerVariants}
         >
            <motion.div
               className='flex justify-between max-[62rem]:gap-5 max-[51.5rem]:flex-col'
               variants={containerVariants}
            >
               <motion.div variants={itemVariants}>
                  <HeroInformation />
               </motion.div>
               <motion.div variants={itemVariants}>
                  <HeroProfile />
               </motion.div>
               <motion.div variants={itemVariants}>
                  <HeroAbout />
               </motion.div>
            </motion.div>
         </motion.div>
      </section>
   );
};

export { Hero };
