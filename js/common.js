// Shared UI: navbar + footer + search form
function renderNavbar(active) {
  return `
  <nav class="navbar">
    <div class="nav-inner">
      <a href="index.html" class="logo">
        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"/>
        </svg>
        Global
      </a>
      <div class="nav-links">
        <a href="flights.html" class="nav-link ${active==='flights'?'active':''}">Find Flights</a>
        <a href="hotels.html" class="nav-link ${active==='hotels'?'active':''}">Find Stays</a>
        <a href="about.html" class="nav-link ${active==='about'?'active':''}">About</a>
      </div>
      <div class="nav-actions">
        <button class="btn btn-outline">Login</button>
        <button class="btn btn-primary">Sign Up</button>
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="logo" style="color:white">
          <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"/>
          </svg>
          <span style="color:white">Global</span>
        </div>
        <p>Find your perfect flight and stay, anywhere in the world.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="flights.html">Flights</a></li>
          <li><a href="hotels.html">Hotels</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </div>
      <div>
        <h4>Support</h4>
        <ul><li>Help Center</li><li>Contact Us</li><li>Privacy Policy</li></ul>
      </div>
      <div>
        <h4>Follow us</h4>
        <div class="socials">
          <a href="#">f</a><a href="#">ig</a><a href="#">x</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">© 2026 Global Travel Agency. All rights reserved.</div>
  </footer>`;
}

function renderSearchForm(activeTab) {
  const opts = CITIES.map(c => `<option>${c}</option>`).join('');
  return `
  <div class="search-card">
    <div class="search-tabs">
      <button class="search-tab ${activeTab==='flights'?'active':''}" onclick="switchTab('flights')">
        ✈️ Flights
      </button>
      <button class="search-tab ${activeTab==='hotels'?'active':''}" onclick="switchTab('hotels')">
        🏨 Stays
      </button>
    </div>
    <form class="search-form" onsubmit="doSearch(event)">
      <label class="search-field">
        <label>📍 ${activeTab==='flights'?'From':'City'}</label>
        <select id="sf-from">${opts}</select>
      </label>
      ${activeTab==='flights' ? `
      <label class="search-field">
        <label>📍 To</label>
        <select id="sf-to">${opts.replace('<option>New York', '<option>Dubai').replace('<option>Dubai</option>', '<option selected>Dubai</option>')}</select>
      </label>` : `
      <label class="search-field">
        <label>👥 Rooms</label>
        <select id="sf-rooms"><option>1 Room</option><option>2 Rooms</option><option>3 Rooms</option></select>
      </label>`}
      <label class="search-field">
        <label>📅 ${activeTab==='flights'?'Depart':'Check-in'}</label>
        <input type="date" id="sf-depart" value="2026-08-15">
      </label>
      <label class="search-field">
        <label>📅 ${activeTab==='flights'?'Return':'Check-out'}</label>
        <input type="date" id="sf-return" value="2026-08-22">
      </label>
      <label class="search-field">
        <label>👥 ${activeTab==='flights'?'Passengers':'Guests'}</label>
        <select id="sf-pax">
          <option>1 Person</option><option>2 People</option><option>3 People</option>
          <option>4 People</option><option>5 People</option>
        </select>
      </label>
      <button type="submit" class="btn btn-primary btn-lg">🔍 Search ${activeTab==='flights'?'Flights':'Stays'}</button>
    </form>
  </div>`;
}

function switchTab(tab) {
  window.location.href = tab === 'flights' ? 'flights.html' : 'hotels.html';
}
function doSearch(e) {
  e.preventDefault();
  const path = window.location.pathname.split('/').pop();
  if (path === 'index.html' || path === '') {
    const activeTab = document.querySelector('.search-tab.active')?.textContent.includes('Flights') ? 'flights' : 'hotels';
    window.location.href = activeTab === 'flights' ? 'flights.html' : 'hotels.html';
  } else {
    // re-render results with a subtle animation flash
    const results = document.querySelector('.results-list, .hotels-grid');
    if (results) { results.style.opacity = '.3'; setTimeout(() => results.style.opacity = '1', 200); }
  }
}

function mount(active, activeTab) {
  document.getElementById('navbar').innerHTML = renderNavbar(active);
  document.getElementById('footer').innerHTML = renderFooter();
  const sf = document.getElementById('searchform');
  if (sf) sf.innerHTML = renderSearchForm(activeTab || 'flights');
}
