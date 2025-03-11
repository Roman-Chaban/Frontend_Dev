import { Github, Linkedin, Send } from "grommet-icons";

import { SocialItems } from "../types/footer-social";

const textCenter = { textAlign: "center" };

const footerSocialList: SocialItems = [
   {
      id: 1,
      icon: <Linkedin color='white' style={textCenter} size='1.8rem' />,
   },
   {
      id: 2,
      icon: <Github color='white' style={textCenter} size='1.8rem' />,
   },
   {
      id: 3,
      icon: <Send color='white' style={textCenter} size='1.8rem' />,
   },
];

export { footerSocialList };
