import { type FC } from "react";

import { aboutListItems } from "./data/about-list";

const AboutInformation: FC = () => {
   return (
      <section className='w-full'>
         <div className='mx-auto rounded-3xl px-6 md:px-12 lg:px-16'>
            {aboutListItems.map((item) => (
               <div
                  key={item.id}
                  className='mb-12 rounded-xl py-8 shadow-lg transition hover:shadow-xl'
               >
                  <div className='mb-6'>
                     <span className='block text-xl font-medium'>
                        {item.role}
                     </span>
                     <h1 className='mt-2 text-4xl font-bold md:text-5xl'>
                        {item.fullName}
                     </h1>
                     <p className='mt-4 text-lg leading-relaxed'>
                        {item.about}
                     </p>
                  </div>

                  <div className='mb-6'>
                     <h2 className='mb-3 text-2xl font-semibold'>
                        🎓 Education
                     </h2>
                     <ul className='space-y-4'>
                        {item.education.map((edu) => (
                           <li
                              key={edu.id}
                              className='rounded-lg border-l-4 border-blue-500 bg-gray-100 p-4'
                           >
                              <h3 className='text-xl font-semibold text-gray-900'>
                                 {edu.name}
                              </h3>
                              <p className='flex justify-between text-gray-700'>
                                 {edu.degree} <em>{edu.year}</em>
                              </p>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className='mb-6'>
                     <h2 className='mb-3 text-2xl font-semibold'>
                        🌍 Languages
                     </h2>
                     <ol className='ml-5 list-decimal space-y-2 text-lg'>
                        {item.languages.map((language) => (
                           <li
                              key={language.id}
                              className='marker:text-blue-300'
                           >
                              {language.language}
                           </li>
                        ))}
                     </ol>
                  </div>

                  <div>
                     <h2 className='mb-3 text-2xl font-semibold'>
                        📚 Courses & Self-Learning
                     </h2>
                     <div className='flex flex-wrap gap-2'>
                        {item.courses.map((course) => (
                           <span
                              key={course.id}
                              className='bg-skills rounded-full px-4 py-2 text-sm font-medium text-sky-400'
                           >
                              {course.course}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export { AboutInformation };
