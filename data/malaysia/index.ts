import {
  KUALA_LUMPUR_RELATED_ARTICLES,
  KAULA_LUMPUR_BLOG_POST,
} from "./city-blog-post";

export const MALAYSIA_DATA = {
  blogPost: [],

  cities: [
    {
      slug: "kuala-lumpur",
      name: "Kuala Lumpur",
      image: "/images/country/malaysia/places/kuala/kuala_lumpur_image.png",
      description: `Kuala Lumpur, Malaysia’s dynamic capital city, offers an unforgettable blend of cultures, cuisines, and contrasts. As a global hub in Southeast Asia, it effortlessly fuses cutting-edge modernity with deep-rooted tradition. Towering over the skyline are the world-famous Petronas Twin Towers, a symbol of Malaysia’s rapid development, while just a short distance away, colonial-era buildings like the Sultan Abdul Samad Building reflect the city’s British heritage.
Kuala Lumpur is a melting pot of Malay, Chinese, and Indian cultures, which is vividly expressed through its architecture, festivals, and especially its cuisine. Food is a major attraction—visitors can enjoy everything from spicy street fare in Jalan Alor and traditional dishes at Kampung Baru, to high-end dining in the city’s many rooftop restaurants.
`,
      featured: false,
      blogs: KAULA_LUMPUR_BLOG_POST,
      related_articles: KUALA_LUMPUR_RELATED_ARTICLES,
    },
  ],
};
