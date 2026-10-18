/* ============ HOME CAROUSEL (below header) ============ */
(function () {
  const cz = $("cz"), v = $("czv"), t = $("czt"), R = [...t.children].map(s => +s.dataset.r), n = R.length;
  let i = 0, tm, x0 = 0, dx = 0;
  const hh = () => { const h = document.querySelector("header"); cz.style.marginTop = (h.offsetHeight + (parseFloat(getComputedStyle(h).top) || 0)) + "px"; };
  function show(k) {
    i = (k + n) % n; t.style.transform = `translateX(${-i * 100}%)`;
    if (v.clientWidth) v.style.height = v.clientWidth / R[i] + "px";
    [...$("czd").children].forEach((b, j) => b.classList.toggle("on", j == i));
  }
  function play() { clearInterval(tm); tm = setInterval(() => show(i + 1), 5000); }
  window.czI = () => i;
  window.czGo = k => { show(k); play(); };
  $("czd").innerHTML = R.map((_, j) => `<button aria-label="Slide ${j + 1}" onclick="czGo(${j})"></button>`).join("");
  v.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; dx = 0; clearInterval(tm); }, { passive: true });
  v.addEventListener("touchmove", e => { dx = e.touches[0].clientX - x0; }, { passive: true });
  v.addEventListener("touchend", () => { if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1)); if (Math.abs(dx) > 10) { cz._m = 1; setTimeout(() => cz._m = 0, 350); } play(); });
  v.addEventListener("click", e => { if (cz._m) { e.preventDefault(); e.stopPropagation(); } }, true);
  cz.addEventListener("mouseenter", () => clearInterval(tm)); cz.addEventListener("mouseleave", play);
  const fix = () => setTimeout(() => { hh(); show(i); }, 0);
  addEventListener("resize", fix); addEventListener("hashchange", fix); addEventListener("load", fix);
  hh(); show(0); play();
})();
