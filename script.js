// Basic data + interactivity
document.addEventListener('DOMContentLoaded', () => {
  // fill year
  document.getElementById('year').textContent = new Date().getFullYear();

  // sample products (replace with your items)
  const products = [
    { id:1, title: 'Swaraj 963 Simple for Farming', img: 'images/tractor1.jpg', paid: true, href:'#' },
    { id:2, title: 'Swaraj 963 Custom for...', img: 'images/tractor2.jpg', paid: true, href:'#' },
    { id:3, title: 'Small Loader Mod', img: 'images/tractor3.jpg', paid: false, href:'#' },
    { id:4, title: 'John Deere 3650 Super', img: 'images/tractor4.jpg', paid: true, href:'#' }
  ];

  const grid = document.getElementById('cardsGrid');

  products.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="thumb">
        <img src="${p.img}" alt="${p.title}" onerror="this.src='images/placeholder.jpg'">
        <button class="fav" title="Favorite"><i class="fa-regular fa-heart"></i></button>
      </div>
      <div class="card-body">
        <h4>${p.title}</h4>
        <div class="card-footer">
          <div class="price">
            <button class="buy-btn" data-id="${p.id}">${p.paid ? 'Buy Now' : 'Download'}</button>
            <span class="tag ${p.paid ? 'paid' : 'free'}">${p.paid ? 'PAID' : 'FREE'}</span>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // favorite buttons
  document.querySelectorAll('.fav').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const icon = btn.querySelector('i');
      icon.classList.toggle('fa-solid');
      icon.classList.toggle('fa-regular');
      // small toast
      showToast('Added to favorites (demo)');
    });
  });

  // buy buttons open modal
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  document.querySelectorAll('.buy-btn').forEach(b=>{
    b.addEventListener('click', (e)=>{
      const id = b.dataset.id;
      const prod = products.find(x=>x.id==id);
      modalTitle.textContent = prod.title;
      modalText.textContent = prod.paid ? 'This product is paid. Replace this with your payment flow.' : 'Free download. Add real download link here.';
      document.getElementById('demoDownload').href = prod.href || '#';
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden','false');
    });
  });

  document.querySelectorAll('.close-modal, #closeBtn').forEach(x=>{
    x.addEventListener('click', ()=> {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden','true');
    });
  });

  // theme toggle simple
  document.getElementById('themeToggle')?.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark-mode');
    const i = document.getElementById('themeToggle').querySelector('i');
    if (i) i.className = document.documentElement.classList.contains('dark-mode') ? 'fa fa-sun' : 'fa fa-moon';
    if(document.documentElement.classList.contains('dark-mode')){
      document.body.style.background = '#081019';
      document.body.style.color = '#dfeef6';
    } else {
      document.body.style.background = '';
      document.body.style.color = '';
    }
  });

  function showToast(text='') {
    const t = document.createElement('div');
    t.textContent = text;
    t.style.position='fixed'; t.style.bottom='20px'; t.style.left='50%'; t.style.transform='translateX(-50%)';
    t.style.background='rgba(0,0,0,0.75)'; t.style.color='#fff'; t.style.padding='8px 14px'; t.style.borderRadius='8px';
    document.body.appendChild(t);
    setTimeout(()=>t.remove(),1500);
  }
});
