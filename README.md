# Global Travel Agency Website

A clean, responsive travel booking website built with **pure HTML, CSS, and JavaScript** — no frameworks, no build step. Just open it in a browser and it runs. UI design inspired by the [Global Travel Agency Figma community file](https://www.figma.com/community/file/1182308758714734501/Global-travel-agency-website).

## Technologies used in this project

- **HTML5** — semantic markup across all pages
- **CSS3** — custom styling, animations, fully responsive layout (`css/style.css`)
- **Vanilla JavaScript (ES6+)** — no dependencies, no frameworks
- **Google Fonts** — Playfair Display + DM Sans
- **Unsplash** — destination and listing imagery

## Features

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

### 5. About Page (`about.html`)
- Company/site information page

### 6. Shared UI Components (`js/common.js`)
- Reusable animated navbar
- Shared footer
- Reusable search form logic used across pages

### 7. UX Details
- Fully responsive across desktop and mobile
- Fade-up scroll animations on cards and sections
- Consistent design system via shared CSS

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

## Limitations

- Uses static, hardcoded sample data (`js/data.js`) — no backend or database
- No real flight/hotel availability, pricing API, or payment integration
- No user authentication or account management
- No persistence — bookings are not saved between sessions
- No server-side rendering; runs entirely client-side
- Basic form validation only

## 🚀 Quick Start

No installation or build step required.

1. **Download or clone the project**

2. **Open `index.html` directly in your browser**

   ```sh
   # macOS
   open index.html

   # Windows
   start index.html

   # Linux
   xdg-open index.html
   ```

   Or, for a smoother experience with a local server (recommended if you make changes):

   ```sh
   npx serve .
   # or
   python3 -m http.server 5500
   ```

   Then visit `http://localhost:5500`.

## TODO

- Connect to a real flights/hotels API to replace static sample data
- Add real booking persistence (localStorage or backend)
- Add user authentication
- Add form validation and error states
- Add dark mode toggle
- Improve accessibility (ARIA labels, keyboard navigation)
- Add automated tests


## Author
This project is maintained by **Kumar S Marathe**

📧 Connect with me:

GitHub: https://github.com/kumarsm9130

LinkedIn: https://www.linkedin.com/in/kumar-s-marathe-79a163256/

