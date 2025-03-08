import { type FC } from "react";

import Image from "next/image";

const HeroBanner: FC = () => {
   return (
      <div className='relative right-[5rem] z-50 max-[71.875rem]:right-[3rem]'>
         <Image
            className='max-h-[100%] max-w-[100%] rounded-2xl'
            src={"/hero/profile.jpg"}
            alt='Profile Image'
            width={800}
            height={800}
         />
      </div>
   );
};

export { HeroBanner };
