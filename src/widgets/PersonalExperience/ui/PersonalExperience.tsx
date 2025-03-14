import { type FC } from "react";

import Image from "next/image";

import { experienceList } from "../data/experience-list";

export const PersonalExperience: FC = () => {
   return (
      <section className='relative w-full'>
         <div className='relative z-70 mx-auto mt-30 mb-25 flex max-w-[96.875rem] flex-col gap-10 px-30 max-[90.0625rem]:px-18 max-[86.25rem]:px-10 max-[30.8125rem]:px-5'>
            <h2 className='text-7xl font-semibold max-[90rem]:text-6xl max-[26.5625rem]:text-4xl'>
               Job Experience:
            </h2>

            <ol className='z-70 mx-12 flex flex-col gap-10 max-[31.3125rem]:m-0'>
               {experienceList.map((item) => (
                  <li
                     key={item.id}
                     className='list-decimal marker:text-6xl marker:text-white max-[31.3125rem]:list-none'
                  >
                     <h3 className='text-justify text-xl max-[26.5625rem]:text-sm'>
                        {item.label}
                     </h3>
                  </li>
               ))}
            </ol>
         </div>
         <Image
            className='absolute top-20 right-0 z-10 w-auto'
            src={"/backgrounds/experience-bg.svg"}
            alt='Skills background'
            width={800}
            height={800}
         />
      </section>
   );
};
