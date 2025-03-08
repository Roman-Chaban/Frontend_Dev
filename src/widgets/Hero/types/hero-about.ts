interface HeroAboutListItem {
   id: number;
   title: string;
   subtitle: string;
}

type HeroAboutListItems = Array<HeroAboutListItem>;

export type { HeroAboutListItem, HeroAboutListItems };
