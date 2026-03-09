import AOS from "aos";

export const initAOS = () => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });
};
