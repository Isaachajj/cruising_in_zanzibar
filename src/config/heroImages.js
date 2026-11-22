const heroImages = {
  beach: '/slider/hero%20hero1.png',
  safari: '/slider/hero%20hero3.jpeg',
  stoneTown: '/slider/hero%20hero%204.jpeg',
  snorkeling: '/slider/heroher5.webp',
  beachCulture: '/slider/herohero6.jpeg',
  zanzibarTour: '/slider/zanzibartour.jpeg'
};

export const homeHeroSlides = [
  {
    image: heroImages.beach,
    kicker: 'Escape to',
    title: 'Zanzibar',
    subtitle: 'Unwind on white-sand beaches, swim in turquoise waters and sail on a traditional dhow.'
  },
  {
    image: heroImages.safari,
    kicker: 'Into the',
    title: 'Wild',
    subtitle: 'See elephants, giraffes and plains wildlife on an unforgettable Tanzania safari.'
  },
  {
    image: heroImages.stoneTown,
    kicker: 'Explore',
    title: 'Stone Town',
    subtitle: 'Wander historic lanes, admire Swahili architecture and experience Zanzibar’s rich heritage.'
  },
  {
    image: heroImages.snorkeling,
    kicker: 'Dive into',
    title: 'Mnemba Atoll',
    subtitle: 'Snorkel clear Indian Ocean waters among coral gardens and colorful tropical fish.'
  },
  {
    image: heroImages.beachCulture,
    kicker: 'Feel the',
    title: 'Island Rhythm',
    subtitle: 'Share the joy of Zanzibar’s coastal culture, warm hospitality and beachside celebrations.'
  },
  {
    image: heroImages.zanzibarTour,
    kicker: 'Discover',
    title: 'Zanzibar',
    subtitle: 'Ocean views, traditional boats and Swahili heritage come together on this vibrant island.'
  }
];

export const homeHeroImages = homeHeroSlides.map(({ image }) => image);
export default heroImages;
