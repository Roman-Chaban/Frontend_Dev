import { type FC } from "react";

import { ContainerProps } from "@/entities/interfaces/container";

const Container: FC<ContainerProps> = ({
   children,
   tag: Tag = "div",
   className = "",
}) => {
   return (
      <Tag className={`grid h-full w-full grid-cols-12 ${className}`}>
         {children}
      </Tag>
   );
};

export { Container };
