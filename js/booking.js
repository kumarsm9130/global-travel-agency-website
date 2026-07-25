document.addEventListener('DOMContentLoaded', () => {
  mount('', 'flights');

  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const id = params.get('id');
  const item = type === 'hotel' ? HOTELS.find(h => h.id === id) : FLIGHTS.find(f => f.id === id);

  if (!item) {
    document.getElementById('booking').innerHTML = '<div class="container" style="padding:60px 0"><p>Item not found. <a href="flights.html" style="color:var(--mint-dark)">Browse flights</a></p></div>';
    return;
  }

  const price = item.price;
  const title = type === 'hotel' ? item.name : `${item.airline}: ${item.from} → ${item.to}`;
  const tax = Math.round(price * 0.12);

  document.getElementById('booking').innerHTML = `
    <div class="container">
      <div style="padding:20px 0"><a href="javascript:history.back()" class="btn btn-outline">← Back</a></div>
      <div class="booking-wrap">
        <form class="booking-form" onsubmit="confirmBooking(event)">
          <h1>Complete your booking</h1>
          <div class="form-group">
            <h3>Contact details</h3>
            <div class="form-row">
              <div class="form-field"><label>Full name</label><input required></div>
              <div class="form-field"><label>Email</label><input type="email" id="email" required></div>
              <div class="form-field"><label>Phone</label><input></div>
              <div class="form-field"><label>Country</label>
                <select>
                  <option value="" selected disabled>Select Country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>France</option>
                  <option>Germany</option>
                  <option>Japan</option>
                  <option>UAE</option>
                  <option>India</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <h3>Payment</h3>
            <div class="form-field" style="margin-bottom:12px">
              <label>Card number</label>
              <input>
            </div>
            <div class="form-row three">
              <div class="form-field"><label>Cardholder name</label><input></div>
              <div class="form-field"><label>Expiry</label><input></div>
              <div class="form-field"><label>CVC</label><input></div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Confirm & Pay $${price + tax}</button>
        </form>
        <aside class="booking-summary">
          <h3>Order Summary</h3>
          <div class="sum-row"><span class="lbl">Item</span><span style="text-align:right;font-weight:500">${title}</span></div>
          <div class="sum-row"><span class="lbl">Base price</span><span>$${price}</span></div>
          <div class="sum-row"><span class="lbl">Taxes & fees</span><span>$${tax}</span></div>
          <div class="sum-row sum-total"><span>Total</span><span>$${price + tax}</span></div>
        </aside>
      </div>
    </div>`;
});

function confirmBooking(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  document.getElementById('booking').innerHTML = `
    <div class="success">
      <div class="success-card">
        <div class="success-check">✓</div>
        <h2>Booking Confirmed!</h2>
        <p>Your booking is confirmed. A confirmation email has been sent to <strong>${email}</strong>.</p>
        <a href="index.html" class="btn btn-primary">Back to Home</a>
      </div>
    </div>`;
}
