document.addEventListener("mousedown", () => {
  document.documentElement.classList.add("clicking");
  document.body.classList.add("clicking");
});

document.addEventListener("mouseup", () => {
  document.documentElement.classList.remove("clicking");
  document.body.classList.remove("clicking");
});