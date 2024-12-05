let myfun = () => console.log("myfun");
// gsap.from(".header-img", {
//   x: -1100,
//   rotation: 360,
//   duration: 2,
//   delay: 1,
//   opacity: 0,

//   // scale:1.5,
//   //   opacity: 0,

//   // yoyo: true
//   // runBackWards:true,
//   // opacity:0
// });
// gsap.from(
//   ".secondary-section",

//   {
//     x: 1000,
//     opacity: 1,
//     duration: 3,
//     delay: 1,
//   }
// );
// gsap.from(".home", {
//   x: -1100,
//   duration: 1,
//   backgroundcolor: "red",
// });
// gsap.from(".navbar", {
//   y: 500,
//   duration: 2,
//   // delay:1,
//   opacity: 0,
// });
let tl = gsap.timeline();
tl.from(".navbar", { y: 200, delay: 0.5, opacity: 0, duration: 1 });
tl.from(".home", {
  x: -1500,

  //   duration: 1,
  //   backgroundcolor: "red",
  //   ease: "smooth",
});
tl.from(".header-img", {
  x: 1100,
  // rotation: 360,
  //   duration: 2,
  //   delay: 1,
  opacity: 0,
});
tl.from(".secondary-section", {
  scrollTrigger: {
    trigger: ".secondary-section",
    toggleActions: "play none none none",
    // markers: true,
    scrub: 0.5,
    // start: "top center",
  },
  x: 1000,
  opacity: 1,
  //   duration: 3,
  //   delay: 1,
});
tl.from(".admission", {
  scrollTrigger: {
    trigger: ".admission",
    toggleActions: "play none none none",
    scrub: 5,
  },
  y: 400,
});
tl.from(".facility", {
  scrollTrigger: {
    // trigger: ".facility",
    toggleActions: "play none none none",
    scrub: 5,
  },
  x: -1500,
  delay: 2,
  opacity: 0,
});
tl.from(".section-testimonial", {
  scrollTrigger: {
    // trigger: ".section-testimonial",
    toggleActions: "play none none none",
    scrub: 5,
  },
  y: 800,
  delay: 1,
  opacity: 0,
});
gsap.to("h1", {
  duration: 6,
  // color: "red",
  delay: 3,
  text: "Unlock Your Potential<br> with Our Diverse <br>Programs",
  repeat: 1,
  yoyo: false,
});

gsap.to("h2", {
  duration: 8,
  // color: "red",
  delay: 3,
  text: "Empowering IT Education for<br> a Bright Future",
  repeat: 4,
  yoyo: true,
});
gsap.to("h3", {
  duration: 8,
  // color: "red",
  delay: 5,
  text: "Admission Process Made Easy",
  repeat: 4,
  yoyo: true,
});

// for cursor
// const cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;

//   cursor.style.top = y + "px";
//   cursor.style.left = x + "px";
// });
