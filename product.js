/* ============ PRODUCT PAGE ============ */
let pv = { id: 0, si: 1, fi: 0, q: 1, view: 0, tab: 0 }, pio = null;
const TABS = ["Details", "Description", "Benefits", "How to Use", "FAQ"];

function go(id) { location.hash = "#/product/" + id; }
function price(x, si) { const m = szOf(x)[si][1]; return [Math.round(x.p * m), Math.round(x.o * m)]; }

/* gallery slides: every photo of the product, then a facts panel */
function views(x) {
  const wear = x.wr, rows = NUT[x.ck] || NUT[x.c];
  const nut = `<div class="nutri"><h3>${wear ? "FIT &amp; CARE" : "NUTRITION FACTS"}</h3><small>${wear ? "Product details" : "Typical values per serving"}</small>${rows.map(r => `<div><span>${r[0]}</span><b>${r[1]}</b></div>`).join("")}</div>`;
  const v = (x.cv ? CV[x.cv][pv.fi] : x.im ? IMG[x.im] : []).map(s => ({ thumb: `<img src="${s}" alt="">`, stage: `<img class="${wear ? "ct" : ""}" src="${s}" alt="${x.n}" loading="lazy">` }));
  if (!v.length) v.push({ thumb: pic(x), stage: pic(x) });
  v.push({ thumb: `<span class="tn">${wear ? "DETAILS" : "NUTRITION"}</span>`, stage: nut });
  return v;
}

function pdp(id) {
  const x = P[id]; if (!x) { location.hash = "#/"; return; }
  pv = { id, si: 1, fi: 0, q: 1, view: 0, tab: 0 };
  document.title = x.n + " | IGNITE MUSCLE";
  const rel = P.filter(o => o.id !== id && o.home && !(x.g && o.g === x.g)).sort((a, b) => (b.c === x.c) - (a.c === x.c));
  $("pdp").innerHTML = `<div class="wrap pd">
    <nav class="crumb"><a href="#/">Home</a> / <a href="#shop">${x.c}</a> / ${x.n}</nav>
    <div class="pg2"><div class="gal"><div class="stage" id="stage"></div><div class="thumbs" id="th"></div></div><div class="info" id="info"></div></div>
    <div class="det" id="det"></div>
    <div class="rel"><h2>YOU MIGHT <span>ALSO LIKE</span></h2><div class="rail" id="rr">${rel.slice(0, 6).map(cardHTML).join("")}</div></div></div>
    <div class="sbar" id="sbar"></div>`;
  drawGal(); drawInfo(); drawTabs();
  if (pio) pio.disconnect();
  pio = new IntersectionObserver(es => es.forEach(e => $("sbar").classList.toggle("on", !e.isIntersecting && e.boundingClientRect.top < 0)));
  pio.observe($("cta")); anim();
}
function drawGal() {
  pv.view = 0;
  const x = P[pv.id], v = views(x);
  $("stage").innerHTML = `<div class="trk" id="trk" data-lenis-prevent>${v.map(o => `<div class="sl">${o.stage}</div>`).join("")}</div>
    <button class="gn p" onclick="galGo(pv.view-1)" aria-label="Previous image">‹</button><button class="gn n" onclick="galGo(pv.view+1)" aria-label="Next image">›</button>`;
  $("th").innerHTML = v.map((o, i) => `<button class="${i == 0 ? "on" : ""}" onclick="galGo(${i})" aria-label="View ${i + 1}">${o.thumb}</button>`).join("");
  const t = $("trk");
  t.onscroll = () => {
    const i = Math.round(t.scrollLeft / t.clientWidth);
    if (i != pv.view) { pv.view = i; [...$("th").children].forEach((b, j) => b.classList.toggle("on", j == i)); }
  };
}
function galGo(i) {
  const t = $("trk"); i = Math.max(0, Math.min(t.children.length - 1, i));
  t.scrollTo({ left: i * t.clientWidth, behavior: "smooth" });
}
function drawInfo() {
  const x = P[pv.id], [p, o] = price(x, pv.si), off = Math.round(100 - p / o * 100), sav = o - p, wear = x.wr, sib = x.g ? P.filter(o2 => o2.g === x.g) : [];
  $("info").innerHTML = `<h1>${x.n}</h1>
    <div class="rt"><span class="star">★ ${x.rating}</span> ${x.reviews} ratings · ${x.c} · ${szOf(x)[pv.si][0]}</div>
    <div class="price"><b>${money(p)}</b><s>${money(o)}</s><span>${off}% off</span></div>
    <small class="mu">Inclusive of all taxes. You save ${money(sav)}.</small>
    ${sib.length > 1 ? `<h4>Choose colour</h4><div class="chips fl">${sib.map(o2 => `<button class="${o2.id == x.id ? "on" : ""}" onclick="go(${o2.id})"><b>${o2.flavs[0]}</b></button>`).join("")}</div>` : ""}
    <h4>Choose size</h4><div class="chips">${szOf(x).map((s, i) => `<button class="${i == pv.si ? "on" : ""}" onclick="pv.si=${i};drawInfo();drawSbar()">${s[0]}</button>`).join("")}</div>
    ${x.flavs.length > 1 ? `<h4>Choose ${wear ? "colour" : "flavour"}</h4><div class="chips fl">${x.flavs.map((f, i) => `<button class="${i == pv.fi ? "on" : ""}" onclick="pv.fi=${i};drawInfo();drawSbar()${x.cv ? ";drawGal()" : ""}"><b>${f}</b></button>`).join("")}</div>` : ""}
    <div class="qrow"><div class="qty"><button onclick="qty(-1)" aria-label="Decrease">−</button><span id="qv">${pv.q}</span><button onclick="qty(1)" aria-label="Increase">+</button></div>
      <div class="cta" id="cta"><button class="btn o" onclick="pAdd()">Add to Cart</button><button class="btn" onclick="pBuy()">Buy Now</button></div></div>
    <div class="dl"><input id="pin" placeholder="Enter pincode" maxlength="6" inputmode="numeric"><button class="btn o" onclick="chkPin()">Check delivery</button></div><p id="pinr" class="mu"></p>
    <ul class="tr"><li>${wear ? "Premium gym wear, true to size" : "100% authentic, lab tested"}</li><li>Free shipping above ₹999</li><li>7-day easy returns</li></ul>`;
  drawSbar();
  if (pio) { pio.disconnect(); pio.observe($("cta")); }
}
function drawSbar() {
  const x = P[pv.id], [p, o] = price(x, pv.si);
  $("sbar").innerHTML = `<div class="wrap sb"><div class="sbi"><div class="sbp">${pic(x)}</div><div><b>${x.n}</b><small>${money(p)} <s>${money(o)}</s> · ${szOf(x)[pv.si][0]}</small></div></div>
    <div class="sbb"><button class="btn o" onclick="pAdd()">Add to Cart</button><button class="btn" onclick="pBuy()">Buy Now</button></div></div>`;
}
function qty(d) { pv.q = Math.max(1, Math.min(10, pv.q + d)); $("qv").textContent = pv.q; }
function pAdd() { const x = P[pv.id]; addToCart(x.id, pv.si, pv.fi, pv.q); cartOpen(1); }
function pBuy() { const x = P[pv.id]; addToCart(x.id, pv.si, pv.fi, pv.q); checkout(); }
function chkPin() {
  const v = $("pin").value.trim(), r = $("pinr");
  if (!/^\d{6}$/.test(v)) { r.textContent = "Please enter a valid 6-digit pincode."; r.style.color = "#f87171"; return; }
  const d = new Date(Date.now() + 4 * 864e5);
  r.style.color = "#4ade80"; r.textContent = "Delivery available. Estimated by " + d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }) + ".";
}
function drawTabs() {
  const x = P[pv.id], c = CONTENT[x.ck] || CONTENT[x.c];
  const body = [
    c.details.map(d => `<div class="dt"><b>${d[0]}</b><p>${d[1]}</p></div>`).join(""),
    `<p class="lead">${c.desc}</p>`,
    `<ul class="ls">${c.benefits.map(b => `<li>${b}</li>`).join("")}</ul>`,
    `<ol class="ls">${c.how.map(b => `<li>${b}</li>`).join("")}</ol>`,
    c.faq.map(f => `<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")
  ][pv.tab];
  $("det").innerHTML = `<div class="tabs">${TABS.map((t, i) => `<button class="${i == pv.tab ? "on" : ""}" onclick="pv.tab=${i};drawTabs()">${t}</button>`).join("")}</div><div class="tb">${body}</div>`;
}
