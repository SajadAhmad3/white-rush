export interface TeamMember {
  name: string;
  designation: string;
  imageUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  facebookUrl: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Sajad  Ahmad",
    designation: "Founder & CEO",
    imageUrl: "/images/team/sajad.jpeg",
    twitterUrl: "https://twitter.com/johndoe",
    instagramUrl: "https://instagram.com/johndoe",
    facebookUrl: "https://facebook.com/johndoe",
  },
  {
    name: "Zahid Lone",
    designation: "Marketing Head",
    imageUrl: "/images/team/zahid.jpeg",
    twitterUrl: "https://twitter.com/janesmith",
    instagramUrl: "https://instagram.com/janesmith",
    facebookUrl: "https://facebook.com/janesmith",
  },
  {
    name: "Mudasir Reshi",
    designation: "Lead Tour Guide",
    imageUrl: "/images/team/mudasir.jpeg",
    twitterUrl: "https://twitter.com/michaeljohnson",
    instagramUrl: "https://instagram.com/michaeljohnson",
    facebookUrl: "https://facebook.com/michaeljohnson",
  },
  {
    name: "Rayees Lone",
    designation: "Operations Manager",
    imageUrl: "/images/team/rayees.jpeg",
    twitterUrl: "https://twitter.com/emilydavis",
    instagramUrl: "https://instagram.com/emilydavis",
    facebookUrl: "https://facebook.com/emilydavis",
  },
];
