import { type FC } from "react";

import Link from "next/link";
import Image from "next/image";

import { portfolioProjects } from "../data/portfolioList";

const Portfolio: FC = () => {
   return (
      <section className='relative w-full'>
         <div className='mx-auto my-16 px-30 max-[90.0625rem]:px-18 max-[86.25rem]:px-10 max-[30.8125rem]:px-5'>
            <div className='bg-skills grid w-full grid-cols-3 gap-10 rounded-md p-10 max-[75rem]:grid-cols-2 max-[48.125rem]:grid-cols-1'>
               {portfolioProjects.map((project) => (
                  <div
                     key={project.id}
                     className='z-70 flex w-full flex-col gap-5'
                  >
                     <Image
                        className='h-auto w-auto object-cover'
                        priority
                        src={project.projectImage}
                        alt={project.projectName}
                        width={500}
                        height={500}
                     />
                     <div className='flex w-full items-center justify-between max-[30.8125rem]:flex-col max-[30.8125rem]:gap-5'>
                        <h4 className='max-[30.8125rem]:text-xl  max-[26.5625rem]:text-[1rem]'>
                           {project.projectName}
                        </h4>
                        <Link
                           target={"_blank"}
                           href={project.projectLink}
                           className='max-[30.8125rem]:text-md underline'
                        >
                           View project
                        </Link>
                     </div>

                     <p className='mt-5 font-normal'>
                        {project.projectDescription}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         <Image
            priority
            className='absolute top-0 left-0 z-5 h-auto w-auto max-w-[100%] max-[75rem]:top-200 max-[51.5rem]:top-0'
            src={"/backgrounds/portfolio-bg.svg"}
            alt='Header background'
            width={500}
            height={500}
         />
      </section>
   );
};

export { Portfolio };
