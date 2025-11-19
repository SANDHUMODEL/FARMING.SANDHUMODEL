// script.js (replace your existing file with this)

document.addEventListener('DOMContentLoaded', () => {

  // --- START: Latest mods data (edit filenames and links if needed) ---
  const mods = [
    {
      title: "BULLDOZER(10 TYRE FS20)",
      img: "images/tractor1.png",
      tag: "PAID",
      link: "https://sandhumodel.gumroad.com/l/yourlink1" // example
    },
    {
      title: "KATKAT JONI BHAI FS20",
      img: "images/tractor2.png",
      tag: "PAID",
      link: "https://sandhumodel.gumroad.com/l/owhgxc" // आपका Gumroad लिंक यहाँ
    },
    {
      title: "SWARAJ 4X4 NEW FS25",
      img: "images/tractor3.png",
      tag: "FREE"
    },
    {
      title: "NEW HOLLEND 10 TYRE",
      img: "images/tractor1.png",
      tag: "PAID",
      link: "https://sandhumodel.gumroad.com/l/yourlink2"
    }
  ];
  // --- END ---

  const grid = document.getElementById('cardsGrid');
  if (!grid) {
    console.error('cardsGrid element missing in HTML');
    return;
  }

  mods.forEach(mod => {
    const card = document.createElement('div');
    card.className = 'card';

    // make whole card clickable if link exists
    if (mod.link) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.open(mod.link, '_blank');
      });
    }

    // image
    const imgWrap = document.createElement('div');
    imgWrap.className = 'card-img-wrap';
    const img = document.createElement('img');
    img.className = 'card-img';
    img.src = mod.img;               // path to image
    img.alt = mod.title || 'mod image';
    // handle image error (optional)
    img.onerror = () => { img.src = 'images/placeholder.png'; };
    imgWrap.appendChild(img);
    card.appendChild(imgWrap);

    // body / title
    const body = document.createElement('div');
    body.className = 'card-body';
    const h = document.createElement('h4');
    h.className = 'card-title';
    h.textContent = mod.title || 'Untitled';
    body.appendChild(h);

    // tag (PAID / FREE)
    const tag = document.createElement('span');
    tag.className = 'card-tag';
    if (mod.tag === 'PAID' && mod.link) {
      // create visible 'PAID' label as link too
      const a = document.createElement('a');
      a.href = mod.link;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = 'PAID';
      a.style.textDecoration = 'none';
      a.style.color = 'red';
      tag.appendChild(a);
    } else {
      tag.textContent = mod.tag || '';
    }
    body.appendChild(tag);

    card.appendChild(body);

    grid.appendChild(card);
  });

});
