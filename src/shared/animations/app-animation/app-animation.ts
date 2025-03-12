const pageTransition = {
   duration: 0.8,
   ease: [0.25, 0.1, 0.25, 1],
};

const initialAnimation = {
   opacity: 0,
   scale: 1.1,
   y: 50,
   rotate: 10,
   filter: "blur(10px)",
};

const animateAnimation = {
   opacity: 1,
   scale: 1,
   y: 0,
   rotate: 0,
   filter: "blur(0)",
};

const exitAnimation = {
   opacity: 0,
   scale: 0.95,
   y: -50,
   rotate: -15,
   filter: "blur(10px)",
};

export { animateAnimation, exitAnimation, initialAnimation, pageTransition };
