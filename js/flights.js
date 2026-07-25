let currentSort = 'cheapest';

function sortFlights(key) {
  currentSort = key;
  const arr = [...FLIGHTS];
  if (key === 'cheapest') arr.sort((a,b) => a.price - b.price);
  else if (key === 'fastest') arr.sort((a,b) => a.duration - b.duration);
  else if (key === 'rating') arr.sort((a,b) => b.rating - a.rating);
  else arr.sort((a,b) => (a.price/100 + a.duration/60) - (b.price/100 + b.duration/60));
  renderFlights(arr);
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.toggle('active', b.dataset.key === key));
}

function renderFlights(list) {
  const el = document.getElementById('results');
  el.innerHTML = list.map((f, i) => `
    <article class="flight-card" style="animation-delay:${i*0.05}s">
      <div class="flight-airline">
        <div class="airline-logo">${f.code}</div>
        <div>
          <h4>${f.airline}</h4>
          <div class="rating">⭐ ${f.rating}</div>
        </div>
      </div>
      <div class="flight-route">
        <div class="flight-time"><div class="t">${f.departTime}</div><div class="c">${f.from}</div></div>
        <div class="flight-line">
          <div class="dur">${fmtDur(f.duration)}</div>
          <div class="bar"></div>
          <div class="stops">${f.stops === 0 ? 'Nonstop' : f.stops + ' stop'}</div>
        </div>
        <div class="flight-time"><div class="t">${f.arriveTime}</div><div class="c">${f.to}</div></div>
      </div>
      <div class="flight-price">
        <div><div class="p">$${f.price}</div><div class="per">per person</div></div>
        <a href="booking.html?type=flight&id=${f.id}" class="btn btn-primary">Book</a>
      </div>
    </article>
  `).join('');
  document.getElementById('count').textContent = `${list.length} results`;
}

document.addEventListener('DOMContentLoaded', () => {
  mount('flights', 'flights');
  sortFlights('cheapest');
});
