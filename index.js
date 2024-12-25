const express = require('express');
let cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;

// Hotels data
let hotels = [
  {
    id: 1,
    name: "Romantic Getaway",
    category: "Resort",
    rating: 2.2,
    reviews: 4572,
    amenity: "Spa",
    price: 10464,
    country: "South Africa",
  },
  {
    id: 2,
    name: "Wellness Retreat",
    category: "Family",
    rating: 2.8,
    reviews: 2114,
    amenity: "Pool",
    price: 13243,
    country: "Australia",
  },
  {
    id: 3,
    name: "Romantic Getaway",
    category: "Luxury",
    rating: 3.1,
    reviews: 4359,
    amenity: "Restaurant",
    price: 3299,
    country: "Germany",
  },
  {
    id: 4,
    name: "Luxury Suites",
    category: "Family",
    rating: 4.9,
    reviews: 3651,
    amenity: "Bar",
    price: 16359,
    country: "United Kingdom",
  },
  {
    id: 5,
    name: "Luxury Suites",
    category: "Budget",
    rating: 4.6,
    reviews: 688,
    amenity: "Gym",
    price: 15570,
    country: "France",
  },
  {
    id: 6,
    name: "Cultural Heritage Hotel",
    category: "Boutique",
    rating: 2.0,
    reviews: 219,
    amenity: "Pet Friendly",
    price: 2321,
    country: "USA",
  },
  {
    id: 7,
    name: "Business Hotel",
    category: "Mid-Range",
    rating: 3.7,
    reviews: 1040,
    amenity: "Free WiFi",
    price: 4523,
    country: "India",
  },
  {
    id: 8,
    name: "Historic Plaza Hotel",
    category: "Mid-Range",
    rating: 3.5,
    reviews: 300,
    amenity: "Parking",
    price: 8543,
    country: "Australia",
  },
  {
    id: 9,
    name: "Adventure Resort",
    category: "Boutique",
    rating: 4.2,
    reviews: 1222,
    amenity: "Gym",
    price: 11894,
    country: "South Africa",
  },
  {
    id: 10,
    name: "Mountain Retreat",
    category: "Resort",
    rating: 4.8,
    reviews: 4015,
    amenity: "Spa",
    price: 17560,
    country: "India",
  },
  {
    id: 11,
    name: "Eco Friendly Lodge",
    category: "Family",
    rating: 2.4,
    reviews: 528,
    amenity: "Restaurant",
    price: 3124,
    country: "Germany",
  },
  {
    id: 12,
    name: "Urban Boutique Hotel",
    category: "Mid-Range",
    rating: 3.9,
    reviews: 1401,
    amenity: "Free WiFi",
    price: 9245,
    country: "France",
  },
  {
    id: 13,
    name: "Beachfront Hotel",
    category: "Luxury",
    rating: 4.5,
    reviews: 489,
    amenity: "Pool",
    price: 14567,
    country: "USA",
  },
  {
    id: 14,
    name: "Ocean View Resort",
    category: "Budget",
    rating: 3.3,
    reviews: 783,
    amenity: "Spa",
    price: 7432,
    country: "United Kingdom",
  },
  {
    id: 15,
    name: "City Central Hotel",
    category: "Boutique",
    rating: 4.1,
    reviews: 2133,
    amenity: "Bar",
    price: 9823,
    country: "Australia",
  },
  {
    id: 16,
    name: "Casino Resort",
    category: "Luxury",
    rating: 4.9,
    reviews: 5000,
    amenity: "Bar",
    price: 18900,
    country: "South Africa",
  },
  {
    id: 17,
    name: "Golf Resort",
    category: "Mid-Range",
    rating: 4.7,
    reviews: 789,
    amenity: "Gym",
    price: 16340,
    country: "France",
  },
  {
    id: 18,
    name: "Family Fun Hotel",
    category: "Family",
    rating: 3.2,
    reviews: 1322,
    amenity: "Pool",
    price: 7500,
    country: "Germany",
  },
  {
    id: 19,
    name: "Spa and Relaxation Hotel",
    category: "Luxury",
    rating: 4.4,
    reviews: 2314,
    amenity: "Spa",
    price: 14900,
    country: "United Kingdom",
  },
  {
    id: 20,
    name: "Country House Hotel",
    category: "Budget",
    rating: 3.6,
    reviews: 1876,
    amenity: "Parking",
    price: 6234,
    country: "Australia",
  },
];

// Default route for base URL
app.get('/', (req, res) => {
  res.send('Welcome to the Hotel API!');
});

// Endpoint 1: Send all hotels
app.get('/hotels', (req, res) => {
  res.json({ hotels: hotels });
});

// Endpoint 2: Get hotels sorted by pricing
function sortLowToHighPrice(hotel1, hotel2) {
  return hotel1.price - hotel2.price;
}
function sortHighToLowPrice(hotel1, hotel2) {
  return hotel2.price - hotel1.price;
}
app.get("/hotels/sort/pricing", (req, res) => {
  let pricing = req.query.pricing;
  if (!pricing || (pricing !== 'low-to-high' && pricing !== 'high-to-low')) {
    return res.status(400).json({ error: 'Invalid pricing value' });
  }
  let hotelsCopy = hotels.slice();
  let result = pricing === 'low-to-high' ? hotelsCopy.sort(sortLowToHighPrice) : hotelsCopy.sort(sortHighToLowPrice);
  res.json({ hotels: result });
});

// Endpoint 3: Get hotels sorted by ratings
function sortLowToHighRating(hotel1, hotel2) {
  return hotel1.rating - hotel2.rating;
}
function sortHighToLowRating(hotel1, hotel2) {
  return hotel2.rating - hotel1.rating;
}
app.get("/hotels/sort/rating", (req, res) => {
  let rating = req.query.rating;
  if (!rating || (rating !== 'low-to-high' && rating !== 'high-to-low')) {
    return res.status(400).json({ error: 'Invalid rating value' });
  }
  let hotelsCopy = hotels.slice();
  let result = rating === 'low-to-high' ? hotelsCopy.sort(sortLowToHighRating) : hotelsCopy.sort(sortHighToLowRating);
  res.json({ hotels: result });
});

// Endpoint 4: Get hotels sorted by reviews
function sortLowToHighReviews(hotel1, hotel2) {
  return hotel1.reviews - hotel2.reviews;
}
function sortHighToLowReviews(hotel1, hotel2) {
  return hotel2.reviews - hotel1.reviews;
}
app.get("/hotels/sort/reviews", (req, res) => {
  let reviews = req.query.reviews;
  if (!reviews || (reviews !== 'least-to-most' && reviews !== 'most-to-least')) {
    return res.status(400).json({ error: 'Invalid reviews value' });
  }
  let hotelsCopy = hotels.slice();
  let result = reviews === 'least-to-most' ? hotelsCopy.sort(sortLowToHighReviews) : hotelsCopy.sort(sortHighToLowReviews);
  res.json({ hotels: result });
});

// Endpoint 5: Filter hotels by amenity
function filterByAmenity(hotelObj, amenity) {
  return hotelObj.amenity.toLowerCase() === amenity.toLowerCase();
}
app.get('/hotels/filter/amenity', (req, res) => {
  let amenity = req.query.amenity;
  if (!amenity) {
    return res.status(400).json({ error: 'Amenity is required' });
  }
  let result = hotels.filter((hotelObj) => filterByAmenity(hotelObj, amenity));
  res.json({ hotels: result });
});

// Endpoint 6: Filter hotels by country
function filterByCountry(hotelObj, country) {
  return hotelObj.country.toLowerCase() === country.toLowerCase();
}
app.get('/hotels/filter/country', (req, res) => {
  let country = req.query.country;
  if (!country) {
    return res.status(400).json({ error: 'Country is required' });
  }
  
  let result = hotels.filter((hotelObj) => filterByCountry(hotelObj, country));
  res.json({ hotels: result });
});

// Endpoint 7: Filter hotels by category
function filterByCategory(hotelObj, category) {
  return hotelObj.category.toLowerCase() === category.toLowerCase();
}
app.get('/hotels/filter/category', (req, res) => {
  let category = req.query.category;
  if (!category) {
    return res.status(400).json({ error: 'Category is required' });
  }
  let result = hotels.filter((hotelObj) => filterByCategory(hotelObj, category));
  res.json({ hotels: result });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
