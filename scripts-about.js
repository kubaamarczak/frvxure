window.addEventListener("load", () => {
    const bg = document.querySelector(".background-video");
    if (!bg) return;
    if (bg.paused) {
      bg.play().catch(() => {});
    }
  });