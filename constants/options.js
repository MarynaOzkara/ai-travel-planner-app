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

export const AI_PROMT = `Generate a Travel Plan for location: {location}, for {totalDays} days starts from {startDate} and ends at {endDate} for {travelers} for a {budget} budget with a flight details, Flight Price with a Booking url, Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions, Booking url, and Places to visit nearby with PlaceName, Price, Details, Place Image Url, geo coordinates, Ticket Pricing, Booking url, Time to travel each of the location for {totalDays} days plane with best time to visit in JSON format. Please include also in the itinerary restorants or caffe where people can have a breakfast, lounch and dinner with. Plane please itinerary activities time from 09:00 - 18:00 each day. Make sure to provide Booking url for flights, hotels and tickets for activities. Use this format for Booking url:
  1. 1.Search tickets for activities at https://tiqets.com. When you make a booking url use always this link https://tp.media/r?marker=58449&trs=331062&p=2074&u=https%3A%2F%2Ftiqets.com&campaign_id=89 only change location for activities. For example, for Prague for link https://www.tiqets.com/en/prague-attractions-c64162/ it will be https://tp.media/r?marker=58449&trs=331062&p=2074&u=https%3A%2F%2Fwww.tiqets.com%2Fen%2Fprague-attractions-c64162%2F&campaign_id=89
  2. Search flights at kiwi.com and add Bookin url www.kiwi.com/deep?affilid=ozkarablogaitripplanner&currency=EUR&departure=anytime&lang=en&return=anytime&returnFromDifferentAirport=false&returnToDifferentAirport=false. Only change destination and dates for trip, for example for Prague from 16 March to 18 March www.kiwi.com/deep?affilid=ozkarablogaitripplanner&currency=EUR&departure=2026-03-16_2026-03-16&destination=prague_cz&lang=en&return=2026-03-18_2026-03-18&returnFromDifferentAirport=false&returnToDifferentAirport=false 
  `;
