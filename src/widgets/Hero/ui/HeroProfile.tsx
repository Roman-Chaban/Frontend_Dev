import Image from "next/image";

import { type FC } from "react";

export const HeroProfile: FC = () => {
   return (
      <div className='relative right-10 z-[-20] h-[25rem] max-h-full w-[25rem] max-w-full max-[90rem]:max-w-[21rem] max-[62rem]:hidden'>
         <Image
            src='/hero/profile.jpg'
            className='rh-auto h-auto rounded-md object-cover'
            alt='Profile Image'
            width={400}
            height={400}
            priority
         />
      </div>
   );
};
