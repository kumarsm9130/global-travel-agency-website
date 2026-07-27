# ✈️ Global Travel Agency Website — Project

A clean, responsive travel booking website built with **pure HTML, CSS, and JavaScript** — no frameworks, no build step. Just open it in a browser and it runs. UI design inspired by the [Global Travel Agency Figma community file](https://www.figma.com/community/file/1182308758714734501/Global-travel-agency-website).

**🔗 Live Demo:** https://kumarsm9130.github.io/global-travel-agency-website/

## 📌 Overview

This project demonstrates a complete client-side travel booking flow:

1. **Search** flights and hotels from the home page
2. **Browse** sortable results (Cheapest, Fastest, Top Rated, Best Value)
3. **Book** a flight or hotel through a query-param driven booking flow
4. **Confirm** the booking with a confirmation UI

Built entirely with vanilla JavaScript — no dependencies, no backend, no build step.

---

## 🖥️ Pages

| Page | Description |
|---|---|
| `index.html` | Home page — hero search form, popular destinations, and feature highlights |
| `flights.html` | Flight search with From/To selectors and sortable results (Cheapest, Fastest, Top Rated, Best Value) |
| `hotels.html` | Hotel search by destination with the same sortable result options |
| `booking.html` | Booking flow for both flights and hotels via query params, with confirmation UI |
| `about.html` | About page — company/site information |

---

## 🚀 What This Project Covers

### 1. Home Page (`index.html`)
- Animated hero section with search form
- Popular destinations grid
- Feature highlights section

### 2. Flight Search (`flights.html`)
- From/To dropdown selectors
- Sortable results: Cheapest, Fastest, Top Rated, Best Value
- Dynamic flight listing rendered from `js/data.js`

### 3. Hotel Search (`hotels.html`)
- Destination-based hotel search
- Sortable results: Cheapest, Fastest, Top Rated, Best Value
- Dynamic hotel listing rendered from `js/data.js`

### 4. Booking Flow (`booking.html`)
- Works via query params, e.g. `booking.html?type=flight&id=f1`
- Handles both flight and hotel bookings
- Booking confirmation UI

### 5. Shared UI Components (`js/common.js`)
- Reusable animated navbar
- Shared footer
- Reusable search form logic used across pages

---

## Project Structure

```
Global/
├── index.html          # Home page
├── flights.html         # Flight search & results
├── hotels.html          # Hotel search & results
├── booking.html          # Booking flow (flights & hotels)
├── about.html            # About page
├── css/
│   └── style.css        # All styles + animations
└── js/
    ├── data.js           # Flights & hotels sample data
    ├── common.js          # Navbar, footer, search form
    ├── main.js            # Home page bootstrap
    ├── flights.js         # Flights page logic
    ├── hotels.js          # Hotels page logic
    └── booking.js         # Booking page logic
```

---

## ✨ Features

- Fully responsive across desktop and mobile
- Fade-up scroll animations on cards and sections
- Sortable flight/hotel results (Cheapest, Fastest, Top Rated, Best Value)
- Consistent design system via shared CSS
- Google Fonts (Playfair Display + DM Sans) and Unsplash destination imagery

---

## Limitations

- Uses static, hardcoded sample data (`js/data.js`) — no backend or database
- No real flight/hotel availability, pricing API, or payment integration
- No user authentication or account management
- No persistence — bookings are not saved between sessions
- Basic form validation only

---

## Quick Start

No installation or build step required.

```bash
git clone https://github.com/kumarsm9130/global-travel-agency-website.git
cd global-travel-agency-website
```

Open `index.html` directly in your browser, or serve it locally:

```bash
npx serve .
# or
python3 -m http.server 5500
```

Then visit `http://localhost:5500`.

---

## 🎯 Purpose

Created to demonstrate front-end development fundamentals — responsive layout, vanilla JS state/routing via query params, and UI/UX polish — as part of a web development portfolio.

---

## Author

This project is maintained by **Kumar S Marathe**

📧 Connect with me:
- GitHub: [github.com/kumarsm9130](https://github.com/kumarsm9130)
- LinkedIn: [linkedin.com/in/kumar-s-marathe-79a163256](https://www.linkedin.com/in/kumar-s-marathe-79a163256/)
