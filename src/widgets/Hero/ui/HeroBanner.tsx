import Image from "next/image";
import { type FC } from "react";

const HeroBanner: FC = () => {
   return (
      <div className='relative z-50 col-span-4 max-[64rem]:right-0 max-[64rem]:col-span-5'>
         <Image
            priority
            src={"/hero/profile.jpg"}
            alt='Profile Image'
            width={600}
            height={600}
            className='absolute right-10 max-h-[100%] max-w-[100%] rounded-2xl object-cover'
         />
      </div>
   );
};

export { HeroBanner };
