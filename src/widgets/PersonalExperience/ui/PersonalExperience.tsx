import { type FC } from "react";

import { experienceList } from "../data/experience-list";

const PersonalExperience: FC = () => {
   return (
      <section className='relative z-70 w-full'>
         <div className='mx-auto mt-30 mb-25 flex max-w-[96.875rem] flex-col gap-10 px-30 max-[90.0625rem]:px-18 max-[86.25rem]:px-10'>
            <h2 className='text-7xl font-semibold max-[90rem]:text-6xl'>
               Job Experience:
            </h2>

            <ol className='mx-12 flex flex-col gap-10'>
               {experienceList.map((item) => (
                  <li
                     key={item.id}
                     className='list-decimal marker:text-6xl marker:text-white'
                  >
                     <h3 className='text-justify text-xl'>{item.label}</h3>
                  </li>
               ))}
            </ol>
         </div>
      </section>
   );
};

export { PersonalExperience };
