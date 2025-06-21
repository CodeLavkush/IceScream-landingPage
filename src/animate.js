gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({ defaults: { duration: .6 }})
timeline
.from('.navbar', { y: '-100vh', ease: 'power.in' })
.from('.link', { opacity: 0, stagger: .5 }, 1)
.from('.get-in-touch', { x: '100vw', ease: 'power.in' }, 1)
.from('.logo', { x: '-100vw', ease: 'power.out' }, 1)
.from('.hero-tagline', { x: '-100vw', opacity: 0, ease: 'power.out'}, '<1')
.from('.hero-img', { opacity: 0, ease: 'power.in'}, '<1')
.from('.menu-btn', {x: '100vh', ease: 'power1.out'}, 1)


gsap.utils.toArray(".product-img").forEach((img, i) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
      toggleActions: "play none none none", // play on enter
    },
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 0.8,
    ease: "power1.out",
    delay: i * 0.1 // stagger-like effect
  });
});

gsap.utils.toArray(".about-img").forEach((img, i) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
      toggleActions: "play none none none", // play on enter
    },
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 0.8,
    ease: "power1.out",
    delay: i * 0.1 // stagger-like effect
  });
});

gsap.from('.contact-img', {
    scrollTrigger: {
        trigger: '.contact-img',
        start: "top 80%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power.in",
    delay: 0.2
})