// --- START: Latest mods data (edit filenames if needed) ---
const mods = [
  { title: "BULLDOZER(10 TYRE FS20", img: "images/tractor1.png", tag: "PAID" },
  { title: "KATKAT JONI BHAI FS20", img: "images/tractor2.png", tag: "PAID" },
  { title: "SWARAJ 4X4 NEW FS25",                img: "images/tractor3.png", tag: "FREE" },
  { title: "NEW HOLLEND 10 TYRE",           img: "images/tractor1.png", tag: "PAID" }
];
// --- END: Latest mods data ---

// function to create a single card element
function createModCard(mod) {
  const card = document.createElement("div");
  card.className = "card";

  // image
  const imgWrap = document.createElement("div");
  imgWrap.className = "card-img-wrap";
  const img = document.createElement("img");
  img.src = mod.img;            // <-- path must match your images folder
  img.alt = mod.title;
  img.className = "card-img";
  imgWrap.appendChild(img);
  card.appendChild(imgWrap);

  // body
  const body = document.createElement("div");
  body.className = "card-body";
  const h = document.createElement("h4");
  h.className = "card-title";
  h.textContent = mod.title;
  body.appendChild(h);

  // tag / price badge
  const tag = document.createElement("span");
  tag.className = "card-tag";
  tag.textContent = mod.tag || "";
  body.appendChild(tag);

  card.appendChild(body);
  return card;
}

// insert cards into #cardsGrid
function renderMods() {
  const grid = document.getElementById("cardsGrid");
  if (!grid) return console.warn("cardsGrid not found");
  grid.innerHTML = ""; // clear existing
  mods.forEach(mod => {
    const card = createModCard(mod);
    grid.appendChild(card);
  });
}

// run on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderMods);
} else {
  renderMods();
}
// Load mods to the page
const container = document.getElementById("cardsGrid");

mods.forEach(mod => {
  container.appendChild(createModCard(mod));
});
