// --- START: Latest mods data (edit filenames/links if needed) ---
const mods = [
  {
    title: "BULLDOZER(10 TYRE FS20)",
    img: "images/tractor1.png",
    tag: "PAID",
    // optional: add your gumroad product link here
    // link: "https://sandhumodel.gumroad.com/l/xxxxx"
  },
  {
    title: "KATKAT JONI BHAI FS20",
    img: "images/tractor2.png",
    tag: "PAID",
    link: "https://sandhumodel.gumroad.com/l/owhgxc" // <-- your Gumroad link
  },
  {
    title: "SWARAJ 4X4 NEW FS25",
    img: "images/tractor3.png",
    tag: "FREE",
    demo: "downloads/swaraj-demo.zip" // optional demo path
  },
  {
    title: "NEW HOLLAND 10 TYRE",
    img: "images/tractor1.png",
    tag: "PAID"
  }
];
// --- END: Latest mods data ---


// Utility: create element with classes and optional text
function el(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text !== undefined) e.textContent = text;
  return e;
}

// Make a single card element for a mod
function createModCard(mod) {
  const card = el("div", "card");

  // If mod has a link, make entire card clickable
  if (mod.link) {
    card.style.cursor = "pointer";
    card.addEventListener("click", (ev) => {
      // If the user clicked on an inner link/button, let that click behave normally
      if (ev.target.tagName.toLowerCase() === "a" || ev.target.tagName.toLowerCase() === "button") {
        return;
      }
      window.open(mod.link, "_blank");
    });
  }

  // IMAGE wrapper
  const imgWrap = el("div", "card-img-wrap");
  const img = el("img", "card-img");
  img.src = mod.img;            // ensure path correct relative to your site
  img.alt = mod.title || "mod image";
  imgWrap.appendChild(img);
  card.appendChild(imgWrap);

  // BODY (title + meta)
  const body = el("div", "card-body");
  const h = el("h4", "card-title");
  h.textContent = mod.title || "Untitled";
  body.appendChild(h);

  // TAG / Price badge area
  const tag = el("span", "card-tag");

  if (mod.tag === "PAID") {
    if (mod.link) {
      // create anchor inside tag for PAID
      const a = el("a");
      a.href = mod.link;
      a.target = "_blank";
      a.style.color = "red";
      a.style.fontWeight = "bold";
      a.style.textDecoration = "none";
      a.textContent = "PAID";
      tag.appendChild(a);
    } else {
      // just show PAID text (if no link)
      tag.textContent = "PAID";
      tag.style.color = "red";
      tag.style.fontWeight = "bold";
    }
  } else if (mod.tag === "FREE") {
    tag.textContent = "FREE";
    tag.style.color = "green";
  } else {
    tag.textContent = mod.tag || "";
  }

  body.appendChild(tag);

  // Extra actions row (Demo / Download / Buy button)
  const actions = el("div", "card-actions");

  // If free and demo path provided -> show demo download button
  if (mod.tag === "FREE" && mod.demo) {
    const dBtn = el("a", "btn btn-demo");
    dBtn.href = mod.demo;
    dBtn.textContent = "Demo Download";
    dBtn.target = "_blank";
    actions.appendChild(dBtn);
  }

  // If paid but no direct link provided -> show message or placeholder
  if (mod.tag === "PAID" && !mod.link) {
    const note = el("span", "btn btn-note");
    note.textContent = "Payment link not set";
    actions.appendChild(note);
  }

  // If paid & link exists -> add a visible Buy button as well (not necessary but nice)
  if (mod.tag === "PAID" && mod.link) {
    const buy = el("a", "btn btn-buy");
    buy.href = mod.link;
    buy.target = "_blank";
    buy.textContent = "Buy / View";
    // prevent card click from double-opening if user clicks buy -> stopPropagation not required since we open new tab
    actions.appendChild(buy);
  }

  body.appendChild(actions);
  card.appendChild(body);

  return card;
}

// Render all mods into container with id "mods-grid"
function renderMods() {
  const container = document.getElementById("mods-grid");
  if (!container) {
    console.error("No #mods-grid container found in DOM. Create <div id='mods-grid'></div> where cards should appear.");
    return;
  }
  container.innerHTML = ""; // clear

  mods.forEach(mod => {
    const c = createModCard(mod);
    container.appendChild(c);
  });
}


// Wait for DOM then render
document.addEventListener("DOMContentLoaded", () => {
  renderMods();
});
