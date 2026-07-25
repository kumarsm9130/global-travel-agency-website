function sortHotels(key) {
  const arr = [...HOTELS];
  if (key === 'cheapest') arr.sort((a,b) => a.price - b.price);
  else if (key === 'rating') arr.sort((a,b) => b.rating - a.rating);
  else if (key === 'reviews') arr.sort((a,b) => b.reviews - a.reviews);
  else arr.sort((a,b) => (b.rating * 200 - b.price) - (a.rating * 200 - a.price));
  renderHotels(arr);
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.toggle('active', b.dataset.key === key));
}

function renderHotels(list) {
  const el = document.getElementById('results');
  el.innerHTML = list.map((h, i) => `
    <article class="hotel-card" style="animation-delay:${i*0.05}s">
      <div class="hotel-img">
        <img src="${h.image}" alt="${h.name}" loading="lazy">
        <div class="hotel-badge">⭐ ${h.rating}</div>
      </div>
      <div class="hotel-body">
        <h3>${h.name}</h3>
        <div class="hotel-loc">📍 ${h.city} · ${h.reviews} reviews</div>
        <div class="amenities">${h.amenities.map(a => `<span class="amenity">${a}</span>`).join('')}</div>
        <div class="hotel-foot">
          <div class="hotel-price"><div class="p">$${h.price}</div><div class="per">per night</div></div>
          <a href="booking.html?type=hotel&id=${h.id}" class="btn btn-primary">Book Now</a>
        </div>
      </div>
    </article>
  `).join('');
  document.getElementById('count').textContent = `${list.length} results`;
}

document.addEventListener('DOMContentLoaded', () => {
  mount('hotels', 'hotels');
  sortHotels('cheapest');
});
