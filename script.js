document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  yesBtn.addEventListener("click", () => {
    const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
    yesBtn.style.position = "absolute";
    yesBtn.style.left = `${x}px`;
    yesBtn.style.top = `${y}px`;
  });

  noBtn.addEventListener("click", () => {
    alert("V thì thôi nhé 😢");
  });
});
