import { JSX } from "react";

interface SocialItem {
   id: number;
   icon: JSX.Element;
   href: string;
}

type SocialItems = Array<SocialItem>;

export type { SocialItem, SocialItems };
