const pageTransition = {
   duration: 0.6,
   ease: [0.4, 0, 0.2, 1],
};

const initialAnimation = {
   opacity: 0,
   scale: 1.05,
   y: 20,
   rotate: 5,
   filter: "blur(8px)",
};

const animateAnimation = {
   opacity: 1,
   scale: 1,
   y: 0,
   rotate: 0,
   filter: "blur(0)",
   transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
   },
};

const exitAnimation = {
   opacity: 0,
   scale: 0.95,
   y: -20,
   rotate: -5,
   filter: "blur(8px)",
   transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
   },
};

export { animateAnimation, exitAnimation, initialAnimation, pageTransition };
