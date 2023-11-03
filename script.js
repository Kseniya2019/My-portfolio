AOS.init();

const viewProject = document.querySelector(".viewProject");

viewProject.addEventListener("mouseover", () => {
  gsap.to(".arrowRotate", {
    rotation: 90,
    duration: 0.5,
  });
});

viewProject.addEventListener("mouseout", () => {
  gsap.to(".arrowRotate", {
    rotation: 0,
    duration: 0.5,
  });
});

gsap.to(".name", {
  text: "I am Kseniya Hushchyna",
  delay: 1,
  duration: 3,
  repeat: 5,
  repeatDelay: 0.5,
  ease: "power1.in",
  yoyo: true,
});

gsap.to(".aboutme", {
  text: "FRONT-END DEVELOPER",
  delay: 1,
  duration: 3,
  repeat: 5,
  repeatDelay: 0.5,
  ease: "power1.in",
  yoyo: true,
});
