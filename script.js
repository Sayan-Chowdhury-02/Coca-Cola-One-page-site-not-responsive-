console.log("Initializing Shery.mouseFollower...");
Shery.mouseFollower({
  skew: false,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5
});

console.log("Initializing Shery.makeMagnet for #card...");
Shery.makeMagnet("#card", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5
});

console.log("Initializing Shery.imageEffect for #card...");
Shery.imageEffect("#card", {
  style: 3,
  debug: true
});
