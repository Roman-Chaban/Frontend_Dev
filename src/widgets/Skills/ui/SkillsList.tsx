"use client";

import { useState, type FC } from "react";

import Image from "next/image";

import { skillsList } from "../data/skills";

const SkillsList: FC = () => {
   const [newSkills] = useState([...skillsList, ...skillsList]);

   return (
      <ul className='flex w-full justify-center gap-10 py-11'>
         {newSkills.map((skillItem, index) => (
            <li
               key={`${skillItem.id}-${index}`}
               className='flex h-fit w-full max-w-[20rem] flex-1 flex-col items-center gap-3 text-center'
            >
               <div className='flex h-20 w-20 items-center justify-center'>
                  <Image
                     className='object-contain max-[90rem]:max-w-[4.5rem]'
                     src={skillItem.icon}
                     alt={skillItem.label}
                     width={90}
                     height={90}
                  />
               </div>

               <h5 className='text-white'>{skillItem.label}</h5>
            </li>
         ))}
      </ul>
   );
};

export { SkillsList };
