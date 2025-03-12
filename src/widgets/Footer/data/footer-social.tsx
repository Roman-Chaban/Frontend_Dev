import { Github, Linkedin, Mail, Send } from "grommet-icons";

import { SocialItems } from "../types/footer-social";

const textCenter = { textAlign: "center" };

const footerSocialList: SocialItems = [
   {
      id: 1,
      icon: <Mail color='white' style={textCenter} size='1.8rem' />,
      href: "mailto:roman.chaban1001@gmail.com",
   },
   {
      id: 2,
      icon: <Linkedin color='white' style={textCenter} size='1.8rem' />,
      href: "https://www.linkedin.com/in/chaban1001/",
   },
   {
      id: 3,
      icon: <Github color='white' style={textCenter} size='1.8rem' />,
      href: "https://github.com/roman-chaban",
   },
   {
      id: 4,
      icon: <Send color='white' style={textCenter} size='1.8rem' />,
      href: "https://t.me/romanchaban",
   },
];

export { footerSocialList };
