export const SelectTravelersList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler exploration",
    icon: "💃",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "👫",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of loving adventurers",
    icon: "🏠",
    people: "3",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "⛵️",
    people: "5",
  },
];
export const BudgetOptions = [
  {
    id: 1,
    title: "Economy",
    desc: "Budget-friendly travel options",
    icon: "💸",
  },
  {
    id: 2,
    title: "Standard",
    desc: "Balanced travel experience",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Premium travel indulgence",
    icon: "💎",
  },
];

export const AI_PROMT =
  "Generate a Travel Plan for location: {location}, for {totalDays} days for {travelers} for a {budget} budget with a flight details, Flight Price with a Booking url, Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions, Booking url, and Places to visit nearby with PlaceName, Price, Details, Place Image Url, geo coordinates, Ticket Pricing, Booking url, Time to travel each of the location for {totalDays} days plane with best time to visit in JSON format. Please include also in the itinerary restorants or caffe where people can have a breakfast, lounch and dinner with. Plane please itinerary activities time from 09:00 - 18:00.";
