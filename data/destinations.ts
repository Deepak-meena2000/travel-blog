import { MALAYSIA_DATA } from "./malaysia";

export const destinations = [
  {
    slug: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    description: "Experience the charm of the City of Love with iconic landmarks.",
    home_image: "/images/country/malaysia/malaysia_home.jpg",
    country_page_image: "/images/country/malaysia/malaysia_country.jpg",
    overview : `Kuala Lumpur, Malaysia's dynamic capital city, offers an unforgettable blend of cultures, cuisines, and contrasts. As a global hub in Southeast Asia, it effortlessly fuses cutting-edge modernity with deep-rooted tradition. Towering over the skyline are the world-famous Petronas Twin Towers, a symbol of Malaysia's rapid development, while just a short distance away, colonial-era buildings like the Sultan Abdul Samad Building reflect the city's British heritage.
Kuala Lumpur is a melting pot of Malay, Chinese, and Indian cultures, which is vividly expressed through its architecture, festivals, and especially its cuisine. Food is a major attraction—visitors can enjoy everything from spicy street fare in Jalan Alor and traditional dishes at Kampung Baru, to high-end dining in the city's many rooftop restaurants.`,
    featured: true,
    cities: MALAYSIA_DATA.cities,
    blogs : MALAYSIA_DATA.blogPost,
    latestBlogs: MALAYSIA_DATA.latestBlogs,
    relatedArticles : MALAYSIA_DATA.related_articles,
    travelGuideBlogs : MALAYSIA_DATA.travel_guide_blogs,
    whatToEat : MALAYSIA_DATA.what_to_eat,

    foodBlogs : MALAYSIA_DATA.food_blogs,
    complete_food_guide : MALAYSIA_DATA.complete_food_guide,
    places_to_visit : MALAYSIA_DATA.places_to_visit,
  },

]
