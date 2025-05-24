import { MALAYSIA_DATA } from "./malaysia";

export const destinations = [
  {
    slug: "bali",
    name: "Bali, Indonesia",
    country: "Indonesia",
    description: "Discover paradise islands with crystal-clear waters and lush landscapes.",
    image: "/placeholder.svg?height=250&width=400",
    featured: true,
    blogs: [
      {
        title: "10 Must-Try Activities in Bali",
        slug: "10-must-try-activities-in-bali",
        category: "Activities",
      },
      {
        title: "Best Street Food in Bali: A Culinary Adventure",
        slug: "best-street-food-in-bali",
        category: "Food",
      },
      {
        title: "Ultimate Guide to Bali's Beaches",
        slug: "ultimate-guide-to-bali-beaches",
        category: "Beaches",
      },
    ],
    cities: [],
  },
  {
    slug: "paris",
    name: "Paris, France",
    country: "France",
    description: "Experience the charm of the City of Love with iconic landmarks.",
    image: "/placeholder.svg?height=250&width=400",
    featured: true,
    blogs: [
      {
        title: "Paris Hidden Gems: Beyond the Eiffel Tower",
        slug: "paris-hidden-gems-beyond-eiffel-tower",
        category: "City Guide",
      },
    ],
    cities: [],
  },
  {
    slug: "kyoto",
    name: "Kyoto, Japan",
    country: "Japan",
    description: "Immerse yourself in traditional culture and breathtaking temples.",
    image: "/placeholder.svg?height=250&width=400",
    featured: true,
    blogs: [
      {
        title: "A Complete Guide to Kyoto's Most Beautiful Temples",
        slug: "complete-guide-kyoto-temples",
        category: "Culture",
      },
    ],
    cities: [],
  },
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    description: "Explore tropical beaches, vibrant culture, and delicious cuisine.",
    image: "/placeholder.svg?height=250&width=400",
    featured: false,
    blogs: [],
    cities: [],
  },
  {
    slug: "italy",
    name: "Italy",
    country: "Italy",
    description: "Discover ancient history, art, and world-renowned cuisine.",
    image: "/placeholder.svg?height=250&width=400",
    featured: false,
    blogs: [],
    cities: [],
  },
  {
    slug: "greece",
    name: "Greece",
    country: "Greece",
    description: "Experience stunning islands and rich ancient history.",
    image: "/placeholder.svg?height=250&width=400",
    featured: false,
    blogs: [],
    cities: [],
  },

  {
    slug: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    description: "Experience the charm of the City of Love with iconic landmarks.",
    image: "/placeholder.svg?height=250&width=400",
    featured: false,
    cities: MALAYSIA_DATA.cities,
  },

]
