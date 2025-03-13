interface AboutLanguagesItems {
   id: number;
   language: string;
}

interface AboutEducationItemsInformation {
   id: number;
   name: string;
   degree: string;
   year: string;
}

interface AboutCoursesItems {
   id: number;
   course: string;
}

interface AboutListItem {
   id: number;
   role: string;
   fullName: string;
   about: string;
   languages: Array<AboutLanguagesItems>;
   education: Array<AboutEducationItemsInformation>;
   courses: Array<AboutCoursesItems>;
}

type AboutListItems = Array<AboutListItem>;

export type { AboutListItems };
