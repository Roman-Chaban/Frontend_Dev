import { type ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   tag: "div" | "section";
}

export type { ContainerProps };
