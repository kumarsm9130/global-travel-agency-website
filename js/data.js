// Golobe — sample data
const CITIES = [
  "New York", "London", "Paris", "Tokyo", "Dubai", "Singapore",
  "Sydney", "Rome", "Barcelona", "Bali", "Bangkok", "Istanbul",
  "Los Angeles", "Amsterdam", "Berlin", "Mumbai", "Cairo", "Rio de Janeiro"
];

const FLIGHTS = [
  { id: "f1", airline: "Emirates", code: "EK", from: "New York", to: "Dubai", departTime: "08:30", arriveTime: "20:45", duration: 735, stops: 0, price: 649, rating: 4.7 },
  { id: "f2", airline: "Qatar Airways", code: "QR", from: "New York", to: "Dubai", departTime: "10:15", arriveTime: "23:50", duration: 815, stops: 1, price: 489, rating: 4.6 },
  { id: "f3", airline: "British Airways", code: "BA", from: "New York", to: "London", departTime: "18:45", arriveTime: "06:55", duration: 430, stops: 0, price: 399, rating: 4.4 },
  { id: "f4", airline: "Lufthansa", code: "LH", from: "New York", to: "Berlin", departTime: "21:00", arriveTime: "12:20", duration: 500, stops: 0, price: 529, rating: 4.5 },
  { id: "f5", airline: "Singapore Airlines", code: "SQ", from: "New York", to: "Singapore", departTime: "23:30", arriveTime: "05:40", duration: 1150, stops: 1, price: 899, rating: 4.9 },
  { id: "f6", airline: "Delta", code: "DL", from: "New York", to: "Los Angeles", departTime: "06:00", arriveTime: "09:20", duration: 380, stops: 0, price: 249, rating: 4.3 },
  { id: "f7", airline: "Air France", code: "AF", from: "New York", to: "Paris", departTime: "19:15", arriveTime: "08:30", duration: 435, stops: 0, price: 459, rating: 4.5 },
  { id: "f8", airline: "Turkish Airlines", code: "TK", from: "New York", to: "Istanbul", departTime: "22:10", arriveTime: "16:35", duration: 625, stops: 0, price: 379, rating: 4.6 },
  { id: "f9", airline: "ANA", code: "NH", from: "New York", to: "Tokyo", departTime: "11:40", arriveTime: "15:20", duration: 820, stops: 0, price: 979, rating: 4.8 },
  { id: "f10", airline: "KLM", code: "KL", from: "New York", to: "Amsterdam", departTime: "20:45", arriveTime: "09:55", duration: 430, stops: 0, price: 419, rating: 4.4 },
  { id: "f11", airline: "United", code: "UA", from: "New York", to: "Sydney", departTime: "14:20", arriveTime: "22:10", duration: 1220, stops: 1, price: 1099, rating: 4.2 },
  { id: "f12", airline: "American", code: "AA", from: "New York", to: "Rome", departTime: "17:30", arriveTime: "08:15", duration: 495, stops: 0, price: 489, rating: 4.3 }
];

const HOTELS = [
  { id: "h1", name: "Burj Al Arab", city: "Dubai", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800", rating: 4.9, reviews: 2140, price: 1290, amenities: ["Pool", "Spa", "Beach"] },
  { id: "h2", name: "The Ritz London", city: "London", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800", rating: 4.8, reviews: 1820, price: 890, amenities: ["Restaurant", "Bar", "Gym"] },
  { id: "h3", name: "Park Hyatt Tokyo", city: "Tokyo", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", rating: 4.7, reviews: 1560, price: 720, amenities: ["Spa", "Pool", "View"] },
  { id: "h4", name: "Marina Bay Sands", city: "Singapore", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800", rating: 4.6, reviews: 3210, price: 540, amenities: ["Pool", "Casino", "Skybar"] },
  { id: "h5", name: "Hotel de Crillon", city: "Paris", image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800", rating: 4.8, reviews: 980, price: 950, amenities: ["Spa", "Restaurant", "Bar"] },
  { id: "h6", name: "Cozy Bali Villa", city: "Bali", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800", rating: 4.5, reviews: 640, price: 180, amenities: ["Pool", "Garden", "Beach"] },
  { id: "h7", name: "Berlin Boutique Stay", city: "Berlin", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800", rating: 4.3, reviews: 420, price: 145, amenities: ["Breakfast", "WiFi"] },
  { id: "h8", name: "Rome Grand Palace", city: "Rome", image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800", rating: 4.6, reviews: 1120, price: 320, amenities: ["Rooftop", "Bar", "Gym"] },
  { id: "h9", name: "Barcelona Beach Resort", city: "Barcelona", image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=800", rating: 4.4, reviews: 890, price: 265, amenities: ["Beach", "Pool", "Spa"] },
  { id: "h10", name: "Bangkok Riverside", city: "Bangkok", image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800", rating: 4.5, reviews: 1340, price: 120, amenities: ["Pool", "River View", "Spa"] },
  { id: "h11", name: "Istanbul Bosphorus Hotel", city: "Istanbul", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800", rating: 4.7, reviews: 1510, price: 210, amenities: ["View", "Restaurant", "Spa"] },
  { id: "h12", name: "Sydney Harbour Inn", city: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800", rating: 4.6, reviews: 720, price: 385, amenities: ["Harbour View", "Pool", "Bar"] }
];

function fmtDur(min) { return `${Math.floor(min/60)}h ${min%60}m`; }
