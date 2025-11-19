// --- START: Latest mods data (edit filenames if needed) ---
const mods = [
  { 
    title: "BULLDOZER(10 TYRE FS20)", 
    img: "images/tractor1.png", 
    tag: "PAID" 
  },

  { 
    title: "KATKAT JONI BHAI FS20", 
    img: "images/tractor2.png", 
    tag: "PAID",
    link: "https://sandhumodel.gumroad.com/l/owhgxc"   // <-- GUMROAD LINK HERE
  },

  { 
    title: "SWARAJ 4X4 NEW FS25", 
    img: "images/tractor3.png", 
    tag: "FREE" 
  },

  { 
    title: "NEW HOLLEND 10 TYRE", 
    img: "images/tractor1.png", 
    tag: "PAID" 
  }
];
// --- function to create a single card ---
function createModCard(mod) {
  const card = document.createElement("div");
  card.className = "card";

  // Make full card clickable if link exists
  if (mod.link) {
    card.style.cursor = "pointer";
    card.onclick = () => {
      window.open(mod.link, "_blank");
    };
  }

  // IMAGE
  const imgWrap = document.createElement("div");
  imgWrap.className = "card-img-wrap";
  const img = document.createElement("img");
  img.src = mod.img;
  img.alt = mod.title;
  img.className = "card-img";
  imgWrap.appendChild(img);
  card.appendChild(imgWrap);

  // BODY
  const body = document.createElement("div");
  body.className = "card-body";

  const h = document.createElement("h4");
  h.className = "card-title";
  h.textContent = mod.title;
  body.appendChild(h);
// TAG
const tag = document.createElement("span");
tag.className = "card-tag";

if (mod.tag === "PAID" && mod.link) {
  // create anchor element inside tag so clicking the label also opens gumroad
  const a = document.createElement("a");
  a.href = mod.link;
  a.target = "_blank";
  a.style.color = "red";
  a.style.fontWeight = "bold";
  a.style.textDecoration = "none";
  a.textContent = "PAID";
  tag.appendChild(a);
} else {
  tag.textContent = mod.tag;
}

body.appendChild(tag);
card.appendChild(body);
 
