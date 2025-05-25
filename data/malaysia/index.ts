import {
  KUALA_LUMPUR_RELATED_ARTICLES,
  KAULA_LUMPUR_BLOG_POST,
  KAULA_LUMPUR_TRAVEL_GUIDE,
} from "./kuala-lumpur/data";
import { PENANG_BLOG_POST, PENANG_RELATED_ARTICLES } from "./penang/data";

export const MALAYSIA_DATA = {
  blogPost: [
    {
      slug: "kuala-lumpur/top-things-to-do",
      title: "Top Things to Do in Kuala Lumpur",
      image: "/images/country/malaysia/places/kuala/kuala_lumpur.png",
      description: `Kuala Lumpur, Malaysia’s dynamic capital city, offers an unforgettable blend of cultures, cuisines, and contrasts. As a global hub in Southeast Asia, it effortlessly fuses cutting-edge modernity with deep-rooted tradition. Towering over the skyline are the world-famous Petronas Twin Towers, a symbol of Malaysia’s rapid development, while just a short distance away, colonial-era buildings like the Sultan Abdul Samad Building reflect the city’s British heritage.
Kuala Lumpur is a melting pot of Malay, Chinese, and Indian cultures, which is vividly expressed through its architecture, festivals, and especially its cuisine. Food is a major attraction—visitors can enjoy everything from spicy street fare in Jalan Alor and traditional dishes at Kampung Baru, to high-end dining in the city’s many rooftop restaurants.
`,
      category: "Activities",
    },
    {
      slug: "penang/top-things-to-do",
      title: "Top Things to Do in Penang",
      image: "/images/country/malaysia/places/penang/penang.jpg",
      description: `Penang, a state on Malaysia’s northwest coast, is known for its stunning beaches, historic Georgetown, and the UNESCO World Heritage–listed Penang Hill.`,
      category: "Activities",
    },
  ],

  cities: [
    {
      placeName: "Kuala Lumpur",
      slug: "kuala-lumpur",
      name: "Top Things to Do in Kuala Lumpur",
      image: "/images/country/malaysia/places/kuala/kuala_lumpur.png",
      description: `Kuala Lumpur, Malaysia’s dynamic capital city, offers an unforgettable blend of cultures, cuisines, and contrasts. As a global hub in Southeast Asia, it effortlessly fuses cutting-edge modernity with deep-rooted tradition. Towering over the skyline are the world-famous Petronas Twin Towers, a symbol of Malaysia’s rapid development, while just a short distance away, colonial-era buildings like the Sultan Abdul Samad Building reflect the city’s British heritage.
Kuala Lumpur is a melting pot of Malay, Chinese, and Indian cultures, which is vividly expressed through its architecture, festivals, and especially its cuisine. Food is a major attraction—visitors can enjoy everything from spicy street fare in Jalan Alor and traditional dishes at Kampung Baru, to high-end dining in the city’s many rooftop restaurants.
`,
      featured: false,
      blogs: KAULA_LUMPUR_BLOG_POST,
      related_articles: KUALA_LUMPUR_RELATED_ARTICLES,
      travel_guide : KAULA_LUMPUR_TRAVEL_GUIDE,
    },
    {
      placeName: "Penang",
      slug: "penang",
      name: "Top Things to Do in Penang",
      image: "/images/country/malaysia/places/penang/penang.jpg",
      description: `Penang, often dubbed the "Pearl of the Orient," is one of Malaysia’s most exciting travel destinations, offering a unique blend of culture, heritage, nature, and food. The island is best known for its UNESCO-listed capital, Georgetown, where colonial architecture, vibrant street art, and multicultural influences come alive. Travelers are drawn to Penang for its rich history, diverse culinary scene(often considered Malaysia’s best) and stunning coastal landscapes. Penang is a must-visit destination in Southeast Asia for culture seekers, foodies, and beach lovers alike.`,
      blogs: PENANG_BLOG_POST,
      related_articles: PENANG_RELATED_ARTICLES,
    },
  ],

  related_articles: [
    {
      slug: "kuala-lumpur/top-things-to-do",
      title: "Top Things to Do in Kuala Lumpur",
      image: "/images/country/malaysia/places/kuala/kuala_lumpur.png",
      category: "Activities",
    },
  ],

  travel_guide_blogs: {
    heading : "Things to Know Before Going to Malaysia",
    image : "/images/country/malaysia/travel_guide.jpg",
    description : "Essential travel tips, information, and advice for your trip to Malaysia",
    overview : "Essential travel tips, information, and advice for your trip to Malaysia",
    data : [
      {
        slug: "/malaysia/things-to-know-before-going",
        title: "Things to Know Before Going to Malaysia",
        image: "/images/country/malaysia/travel_guide.jpg",
        description: "Travel Guide about Malaysia",
        category: "Travel Guide",
      },
      {
        slug: "/malaysia/kuala-lumpur/travel-guide",
        title: "Things to Know Before Going to Kuala Lumpur",
        image: "/images/country/malaysia/places/kuala/kuala_lumpur.png",
        description: "Travel Guide about Kuala Lumpur",
        category: "Activities",
      },
    ]
  },

  what_to_eat: {
    heading: "What to Eat in Malaysia",
    image : "/images/country/malaysia/what_to_eat.jpg",
    description:
      "Malaysia's cuisine is a vibrant tapestry of flavors, influenced by its rich cultural heritage and abundant local ingredients. From street food stalls to high-end restaurants, the food scene offers something for every palate and budget. Here are some must-try dishes during your visit.",
    overview:
      "Malaysia's cuisine is a vibrant tapestry of flavors, influenced by its rich cultural heritage and abundant local ingredients. From street food stalls to high-end restaurants, the food scene offers something for every palate and budget. Here are some must-try dishes during your visit.",
    data: [
      {
        id: 1,
        name: "Babi Guling (Suckling Pig)",
        description:
        "Bali's most famous dish - a whole pig roasted with a blend of turmeric, coriander seeds, lemongrass, black pepper, and garlic.",
      image: "/placeholder.svg?height=300&width=500",
      whereToTry: [
        {
          name: "Warung Babi Guling Ibu Oka",
          location: "Jl. Tegal Sari No.2, Ubud",
          priceRange: "IDR 50,000-100,000",
        },
        {
          name: "Babi Guling Chandra",
          location: "Jl. Teuku Umar, Denpasar",
          priceRange: "IDR 30,000-80,000",
        },
      ],
      },
    ],
    related_articles: [
      {
        slug: "kuala-lumpur/top-things-to-do",
        title: "Top Things to Do in Kuala Lumpur",
        image: "/images/country/malaysia/places/kuala/kuala_lumpur.png",
        category: "Activities",
      },
    ],
  },
  food_blogs: [
    {
      slug: "/malaysia/what-to-eat",
      title: "What to Eat in Malaysia",
      description: "What to Eat in Malaysia",
      image: "/images/country/malaysia/what_to_eat.jpg",
      category: "Food Guide",
    },
  ],

  latestBlogs: [
    {
      slug: "kuala-lumpur/top-things-to-do",
      title: "Top Things to Do in Kuala Lumpur",
      image: "/images/country/malaysia/places/kuala/kuala_lumpur.png",
      description: `Kuala Lumpur, Malaysia's dynamic capital city, offers an unforgettable blend of cultures, cuisines, and contrasts. As a global hub in Southeast Asia, it effortlessly fuses cutting-edge modernity with deep-rooted tradition. Towering over the skyline are the world-famous Petronas Twin Towers, a symbol of Malaysia's rapid development, while just a short distance away, colonial-era buildings like the Sultan Abdul Samad Building reflect the city's British heritage.`,
      category: "Activities",
    },
    {
      slug: "/malaysia/what-to-eat",
      title: "What to Eat in Malaysia",
      image: "/images/country/malaysia/places/penang/penang.jpg",
      description: `Penang, a state on Malaysia's northwest coast, is known for its stunning beaches, historic Georgetown, and the UNESCO World Heritage–listed Penang Hill.`,
      category: "Activities",
    },
  ]
};
