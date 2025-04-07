export interface Destination {
  name: string;
  image: string;
  discount: string;
  description: string;
}

export const destinationsData: Destination[] = [
  {
    name: "Gulmarg",
    image: "/images/home/gulmarg.jpg",
    discount: "30% OFF",
    description:
      "A paradise for skiers and nature lovers, Gulmarg offers snowy peaks and scenic meadows.",
  },
  {
    name: "Srinagar",
    image: "/images/home/dal-lake.jpg",
    discount: "25% OFF",
    description:
      "Famous for Dal Lake and houseboats, Srinagar blends serenity with rich Mughal gardens.",
  },
  {
    name: "Sonmarg",
    image: "/images/home/sonamarg.jpg",
    discount: "35% OFF",
    description:
      "Known as the 'Meadow of Gold', Sonmarg offers stunning glaciers and trekking trails.",
  },
  {
    name: "Pahalgam",
    image: "/images/home/pahalgam.jpg",
    discount: "30% OFF",
    description:
      "A peaceful valley town surrounded by lush forests, rivers, and mountain views.",
  },
  {
    name: "Ladakh",
    image: "/images/home/ladakh-ride.jpg",
    discount: "20% OFF",
    description:
      "Explore high-altitude deserts, monasteries, and epic bike routes in rugged Ladakh.",
  },
  {
    name: "Ladakh",
    image: "/images/home/ladakh-ride.jpg",
    discount: "20% OFF",
    description:
      "Explore high-altitude deserts, monasteries, and epic bike routes in rugged Ladakh.",
  },
];

export const destinations = [
  {
    slug: "gulmarg",
    destinationName: "Gulmarg",
    image: "/images/home/gulmarg.jpg",
    description: "A paradise for skiing and adventure lovers.",
    activities: ["Skiing", "Gondola Ride", "Trekking", "Snowboarding"],
  },
  {
    slug: "pahalgam",
    destinationName: "Pahalgam",
    image: "/images/home/pahalgam.jpg",
    description: "A beautiful valley with lush green meadows and rivers.",
    activities: ["River Rafting", "Trekking", "Fishing", "Camping"],
  },
  {
    slug: "sonamarg",
    destinationName: "Sonamarg",
    image: "/images/home/sonamarg.jpg",
    description: "Known as the 'Meadow of Gold', offering stunning views.",
    activities: [
      "Thajiwas Glacier Visit",
      "Camping",
      "Horse Riding",
      "Fishing",
    ],
  },
  {
    slug: "ladakh",
    destinationName: "Ladakh",
    image: "/images/home/ladakh-ride.jpg",
    description: "A high-altitude desert known for its dramatic landscapes.",
    activities: [
      "Bike Riding",
      "Monastery Visits",
      "Pangong Lake Tour",
      "River Rafting",
    ],
  },
  {
    slug: "srinagar",
    destinationName: "Srinagar",
    image: "/images/packages/kashmir_dal.jpg",
    description:
      "The summer capital of Jammu and Kashmir, famous for its lakes and gardens.",
    activities: [
      "Shikara Ride",
      "Houseboat Stay",
      "Mughal Gardens Tour",
      "Shopping",
    ],
  },
  {
    slug: "betaab-valley",
    destinationName: "Betaab Valley",
    image: "/images/packages/green_medows.jpg",
    description:
      "A picturesque valley known for its scenic beauty and Bollywood connections.",
    activities: ["Photography", "Picnicking", "Trekking", "Horse Riding"],
  },
  {
    slug: "doodhpathri",
    destinationName: "Doodhpathri",
    image: "/images/packages/doodhpathri.jpg",
    description: "A hidden valley with lush green pastures and streams.",
    activities: ["Trekking", "Picnicking", "Camping", "Photography"],
  },
  {
    slug: "tulip-garden",
    destinationName: "Indira Gandhi Tulip Garden",
    image: "/images/packages/tulip-garden.jpg",
    description:
      "Asia’s largest tulip garden, offering a colorful floral paradise.",
    activities: [
      "Flower Viewing",
      "Photography",
      "Picnicking",
      "Leisure Walks",
    ],
  },
  {
    slug: "gurez-valley",
    destinationName: "Gurez Valley",
    image: "/images/packages/gurez.jpg",
    description:
      "An offbeat destination with untouched natural beauty and scenic villages.",
    activities: ["Trekking", "Camping", "Photography", "Cultural Exploration"],
  },
];
