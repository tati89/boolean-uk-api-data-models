const designers = [
  {
    firstName: "Alan",
    lastName: "Daves",
  },
  {
    firstName: "Lola",
    lastName: "Witaki",
  },
  {
    firstName: "James",
    lastName: "Fill",
  },
  {
    firstName: "Arnold",
    lastName: "Shwarth",
  },
  {
    firstName: "Sara",
    lastName: "Deleny",
  },
  {
    firstName: "Jenny",
    lastName: "Cuture",
  },
  {
    firstName: "Sally",
    lastName: "Aubergine",
  },
];

const models = [
  {
    firstName: "Heidy",
    lastName: "Klum",
    agency: "BeautyBay",
  },
  {
    firstName: "Satina",
    lastName: "Laly",
    agency: "BeautyBay",
  },
  {
    firstName: "Tijani",
    lastName: "Fulani",
    agency: "Boolean",
  },
  {
    firstName: "Valentina",
    lastName: "Ponchi",
    agency: "Boolean",
  },
  {
    firstName: "Jizel",
    lastName: "Budhen",
    agency: "Boolean",
  },
  {
    firstName: "Duncan",
    lastName: "Scotland",
    agency: "Gorgeous Agerncy",
  },
  {
    firstName: "Tiziana",
    lastName: "Dazilicata",
    agency: "Gorgeous Agerncy",
  },
  {
    firstName: "Marco",
    lastName: "De Bortoli",
    agency: "Gorgeous Agerncy",
  },
];

const outfits = [
  {
    description: "Coat",
    season: "2020 SS",
    price: 1200,
    modelId: 1,
    designerId: 1,
    guestId: 1,
  },
  {
    description: "Dress",
    season: "2020 SS",
    price: 1050,
    modelId: 2,
    designerId: 2,
    guestId: 2,
  },
  {
    description: "Skirt",
    season: "2020 AW",
    price: 770.5,
    modelId: 3,
    designerId: 2,
    guestId: 3,
  },
  {
    description: "Shirt",
    season: "2020 AW",
    price: 910.15,
    modelId: 4,
    designerId: 3,
    guestId: 4,
  },
  {
    description: "Shirt",
    season: "2020 AW",
    price: 910.15,
    modelId: 4,
    designerId: 3,
    guestId: 5,
  },
  {
    description: "Blouse",
    season: "2020 AW",
    price: 350.25,
    modelId: 5,
    designerId: 4,
    guestId: 6,
  },
  {
    description: "Suit",
    season: "2020 SS",
    price: 2510.25,
    modelId: 6,
    designerId: 4,
    guestId: 7,
  },
  {
    description: "Trousers",
    season: "2020 SS",
    price: 1200,
    modelId: 7,
    designerId: 5,
    guestId: 1,
  },
  {
    description: "Lingere",
    season: "2020 AW",
    price: 310,
    modelId: 7,
    designerId: 5,
    guestId: 2,
  },
  {
    description: "Top",
    season: "2020 AW",
    price: 730,
    modelId: 8,
    designerId: 6,
    guestId: 3,
  },
  {
    description: "Track Suit",
    season: "2020 AW",
    price: 810,
    modelId: 8,
    designerId: 6,
    guestId: 4,
  },
  {
    description: "Evening Dress",
    season: "2020 AW",
    price: 3500,
    modelId: 1,
    designerId: 1,
    guestId: 5,
  },
];

const events = [
  {
    name: "Best Models 2021",
    modelId: 1,
    designerId: 1,
    guestId: 1,
  },
  {
    name: "Best Summer Models",
    modelId: 2,
    designerId: 2,
    guestId: 2,
  },
  {
    name: "Best Autumn Models",
    modelId: 3,
    designerId: 3,
    guestId: 3,
  },
  {
    name: "Best Winter Models",
    modelId: 4,
    designerId: 4,
    guestId: 4,
  },
  {
    name: "Best European Models",
    modelId: 5,
    designerId: 5,
    guestId: 5,
  },
  {
    name: "Best American Models",
    modelId: 6,
    designerId: 6,
    guestId: 6,
  },
  {
    name: "Best Asian Models",
    modelId: 7,
    designerId: 7,
    guestId: 7,
  },
  {
    name: "Best African Models",
    modelId: 8,
    designerId: 8,
    guestId: 8,
  },
  {
    name: "Best Super Models",
    modelId: 8,
    designerId: 8,
    guestId: 8,
  },
  {
    name: "Best Lazy Models",
    modelId: 7,
    designerId: 7,
    guestId: 7,
  },
  {
    name: "Best Sleepy Models",
    modelId: 6,
    designerId: 6,
    guestId: 6,
  },
  {
    name: "Best Strong Models",
    modelId: 5,
    designerId: 5,
    guestId: 5,
  },
  {
    name: "Best Weak Models",
    modelId: 4,
    designerId: 4,
    guestId: 4,
  },
  {
    name: "Best Read Hair Models",
    modelId: 3,
    designerId: 3,
    guestId: 3,
  },
  {
    name: "Best Black Hair Models",
    modelId: 2,
    designerId: 2,
    guestId: 2,
  },
  {
    name: "Best Train Models",
    modelId: 1,
    designerId: 1,
    guestId: 1,
  },
];

const guests = [
  {
    firstName: "James",
    lastName: "Murphy",
    company: "MatchesFashion",
  },
  {
    firstName: "Sara",
    lastName: "Jefferson",
    company: "MatchesFashion",
  },
  {
    firstName: "Terry",
    lastName: "Cruze",
    company: "BeautyFlash",
  },
  {
    firstName: "Amy",
    lastName: "McDate",
    company: "BeautyFlash",
  },
  {
    firstName: "Amy",
    lastName: "Santiago",
    company: "BeautyFlash",
  },
  {
    firstName: "Jenny",
    lastName: "Dias",
    company: "NettePorter",
  },
  {
    firstName: "Anna",
    lastName: "Kurnikova",
    company: "NettePorter",
  },
];

module.exports = { designers, models, outfits, events, guests };
