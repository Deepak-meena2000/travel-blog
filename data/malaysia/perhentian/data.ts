import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export const PERHENTIAN_ISLANDS_BLOG_POST = [
  {
    id: 2,
    name: "Boat Ride to Perhentian Island",
    image: "/images/country/malaysia/places/perhentian/blog/boat_ride.png",
    description:
      "The boat ride to the Perhentian Islands is the beginning of your tropical adventure. Departing from Kuala Besut Jetty, the speedboat takes you through turquoise waters, offering scenic views of the South China Sea. The 30–45 minute ride is exhilarating and a perfect way to feel the sea breeze before hitting the island shores. It’s a thrilling welcome to Malaysia’s east coast paradise and a highlight in itself.",
    location: "Kuala Besut Jetty",
    operationalHours: "Departs from 7am till 4pm (3–4 trips per operator)",
    price: "RM35–RM70 per person <br /> (one-way, depending on boat type)",
    duration: "30–45 minutes",
    tips: [
      "Wear a waterproof jacket and secure your belongings as it can get bumpy.",
      "Pre-book the tickets online from Easybook or Redbus.",
      "Catch the early morning boat to avoid crowds.",
    ],
  },
  {
    id: 3,
    name: "Water Taxi Around the Islands",
    image: "/images/country/malaysia/places/perhentian/blog/water_taxi.jpg",
    description:
      "Water taxis in the Perhentian Islands offer a quick, scenic, and convenient way to travel between beaches, snorkeling spots, and resorts. They function like floating Ubers, making island travel fun and easy.",
    location: "All beaches",
    operationalHours: "All day (night fares are higher)",
    price: "RM15–RM40 per person <br /> (one-way, depending on distance)",
    duration: "10–35 minutes",
    tips: [
      "Water taxis operate at night but fares are usually double.",
      "Pay in cash only.",
    ],
  },
  {
    id: 4,
    name: "Party at Long Beach",
    image:
      "/images/country/malaysia/places/perhentian/blog/long_beach_party.jpg",
    description:
      "Long Beach on Perhentian Kecil is the center of nightlife on the islands, known for its fire shows, beach bars, live music, and a fun social atmosphere.",
    location: "Long Beach, Perhentian Kecil",
    operationalHours: "Evening to late night",
    price: "Free (excluding drinks/food)",
    duration: "Evening activity",
    tips: [
      "Bring some cash for drinks and food.",
      "Watch the fire shows—they’re a highlight!",
    ],
  },
  {
    id: 5,
    name: "Hiking in Perhentian Islands",
    image: "/images/country/malaysia/places/perhentian/blog/hiking.jpg",
    description:
      "Explore scenic jungle trails on both Perhentian Kecil and Besar. Hikes offer lush views, wildlife encounters, and hidden beaches. Notable trails include Long Beach to Coral Bay and the Windmill hike.",
    location: "Long Beach for Windmill hike",
    operationalHours: "All day",
    price: "Free",
    duration: "30 minutes – 1 hour",
    tips: [
      "Wear proper shoes and bring water.",
      "Some trails are unmarked and slippery.",
      "Hike early morning or evening to avoid heat.",
    ],
  },
  {
    id: 6,
    name: "Snorkeling in Perhentian Islands",
    image: "/images/country/malaysia/places/perhentian/blog/snorkeling.jpg",
    description:
      "Snorkel in crystal-clear waters filled with coral gardens and marine life including sea turtles, clownfish, and reef sharks. Popular sites: Turtle Bay, Shark Point, Coral Garden.",
    location: "All beaches",
    operationalHours: "10am, 2pm",
    price: "RM30–RM50 for half-day tour <br /> (gear included)",
    duration: "3 hours",
    tips: [
      "Go in the morning for better visibility.",
      "Afternoons are less crowded.",
    ],
  },
  {
    id: 7,
    name: "Scuba Diving in Perhentian Islands",
    image: "/images/country/malaysia/places/perhentian/blog/scuba_diving.jpg",
    description:
      "Experience world-class diving at sites like Tokong Laut and Sugar Wreck. Encounter turtles, sharks, barracudas, and colorful coral reefs. Dive centers offer PADI certification and beginner sessions.",
    location: "Most beaches",
    operationalHours: "8am, 11am, 2pm",
    price: "RM200–RM350 per dive <br /> PADI courses from RM 1,200",
    duration: "1–1.5 hours",
    tips: [
      "No experience? Try a fun dive!",
      "Book early in peak season.",
      "Choose certified, reputable dive centers.",
    ],
    imageCreditHTML:
      'Photo by<a target = "_blank" href="https://unsplash.com/@jwaldrop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Jacob Waldrop</u></a> on<a target="_blank" href="https://unsplash.com/photos/two-persons-scuba-diving-7RAem-MijmY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a>',
  },
  {
    id: 8,
    name: "Visit Both Perhentian Kecil & Perhentian Besar",
    image: "/images/country/malaysia/places/perhentian/blog/kecil_besar.jpg",
    description:
      "Explore both islands for a complete experience—Kecil offers vibrant nightlife and budget stays, while Besar is serene with upscale resorts and family-friendly beaches.",
    location: "Perhentian Kecil & Besar",
    operationalHours: "All day",
    price: "Varies by transport and activities",
    duration: "Half or full day",
    tips: [
      "Use water taxis or tours to hop between islands.",
      "Explore Turtle Beach and Coral Bay for snorkeling.",
    ],
    imageCreditHTML:
      '<a target ="_blank" href="https://commons.wikimedia.org/wiki/File:Pulau_Perhentian,_Islas_Perhentian.jpg"><u>Casarhe</u>r</a>, <a target ="_blank" href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons',
  },
  {
    id: 9,
    name: "Book a Beachside Resort",
    image: "/images/country/malaysia/places/perhentian/beach_resort.jpg",
    description:
      "Stay in a beachfront resort to wake up to ocean views and private beach access. Options range from budget chalets to luxury escapes.",
    location: "All beaches",
    operationalHours: "Check-in usually from 2pm",
    price: "Varies by resort",
    duration: "1 night+",
    tips: ["Book in advance, especially during peak season."],
    imageCreditHTML: "",
  },
  {
    id: 10,
    name: "Island Hopping",
    image:
      "/images/country/malaysia/places/perhentian/blog/perhentian_islandhopping.jpg",
    description:
      "Join a boat tour to explore hidden coves, snorkeling spots, and scenic beaches like Turtle Beach, Shark Point, and Romantic Beach.",
    location: "Starts from main beaches",
    operationalHours: "All day",
    price: "RM40–RM70",
    duration: "Half day",
    tips: [
      "Bring reef-safe sunscreen.",
      "Tours usually include snorkeling gear.",
    ],
    imageCreditHTML:
      '<a target = "_blank" href="https://commons.wikimedia.org/wiki/File:Beach_at_dawn,_Perhentian_Islands.jpg"><u>Chamberlain of Nilai</u></a>, <a target = "_blank" href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons',
  },
  {
    id: 11,
    name: "Chill at the Beach",
    image: "/images/country/malaysia/places/perhentian/blog/chill_beach.jpg",
    description:
      "Relax on postcard-perfect beaches with soft white sand and turquoise waters. Long Beach is social and lively, Coral Bay is serene and peaceful.",
    location: "Long Beach, Coral Bay",
    operationalHours: "All day",
    price: "Free",
    duration: "Flexible",
    tips: [
      "Carry sunblock and stay hydrated.",
      "Perfect for reading or just relaxing under a palm tree.",
    ],
    imageCreditHTML:
      "Photo by <a target='_blank' href='https://unsplash.com/@sasha_india?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Sasha India</u></a> on <a target='_blank' href='https://unsplash.com/photos/palm-trees-under-cloudy-sky-NAQZhTNGIWQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Unsplash</u></a>",
  },
  {
    id: 12,
    name: "Sunset at Adam & Eve Beach",
    image: "/images/country/malaysia/places/perhentian/blog/adam_eve_beach.jpg",
    description:
      "A secluded beach on Perhentian Kecil, perfect for a quiet, romantic sunset. Accessible by a scenic forest trail or short boat ride.",
    location: "Adam & Eve Beach, Perhentian Kecil",
    operationalHours: "Sunset",
    price: "Free",
    duration: "30–60 minutes",
    tips: [
      "Bring a flashlight if hiking back after dark.",
      "Carry water and snacks.",
    ],
    imageCreditHTML:
      'Photo by <a target="_blank" href="https://unsplash.com/@sergiomenamx?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Sergio Mena Ferreira</u></a> on <a target="_blank" href="https://unsplash.com/photos/ocean-waves-crashing-on-shore-during-sunset-N5sC8zZUgy4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a>',
  },
  {
    id: 13,
    name: "Kayaking Around the Islands",
    image: "/images/country/malaysia/places/perhentian/blog/kayaking.jpg",
    description:
      "Kayak along the coastline to reach hidden coves and coral gardens. Rentals available by hour or day; life jackets included.",
    location: "Available at major beaches",
    operationalHours: "Daylight hours",
    price: "RM20–RM30 per hour <br /> RM50–RM70 full day",
    duration: "1–6 hours",
    tips: [
      "Use waterproof pouches for valuables.",
      "Check sea conditions before starting.",
    ],
  },
  {
    id: 14,
    name: "Turtle Spotting",
    image:
      "/images/country/malaysia/places/perhentian/blog/turtle_spotting.jpg",
    description:
      "Spot green and hawksbill turtles in the waters around Perhentian. Best seen in the morning near Turtle Beach or on guided tours.",
    location: "Turtle Beach and snorkeling sites",
    operationalHours: "Morning preferred",
    price: "Varies by tour",
    duration: "1–2 hours",
    tips: [
      "Be respectful and don’t touch the turtles.",
      "Use a snorkeling guide for the best chances.",
    ],
    imageCreditHTML:
      'Photo by <a target="_blank" href="https://unsplash.com/@pascalvendel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Pascal van de Vendel</u></a> on <a target="_blank" href="https://unsplash.com/photos/a-green-turtle-swimming-over-a-coral-reef-ZaOWcaK_f0s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a>',
  },
  {
    id: 15,
    name: "Breakfast by the Seaside",
    image:
      "/images/country/malaysia/places/perhentian/blog/seaside_breakfast.jpg",
    description:
      "Start your day with breakfast right by the beach. Enjoy local and Western dishes with ocean views and fresh morning air.",
    location: "Beachfront cafés",
    operationalHours: "7am – 11am",
    price: "RM10–RM30",
    duration: "1 hour",
    tips: [
      "Try local dishes like nasi lemak and roti canai.",
      "Arrive early for less crowd and best views.",
    ],
    imageCreditHTML:
      'Photo by <a target="_blank" href="https://www.pexels.com/@taryn-elliott/"><u>Taryn Elliott</u></a> on <a target="_blank" href="https://www.pexels.com/photo/person-pouring-hot-coffee-on-mug-9716820/"><u>Pexels</u></a>',
  },
  {
    id: 16,
    name: "Kuala Besut – Gateway to the Perhentian Islands",
    image: "/images/country/malaysia/places/perhentian/blog/kuala_besut.png",
    description:
      "Kuala Besut is the main jetty town to reach Perhentian Islands. Explore local markets, riverside views, and authentic Malay food while you wait for your boat.",
    location: "Kuala Besut",
    operationalHours: "All day",
    price: "Free to explore",
    duration: "1–2 hours",
    tips: [
      "Try local snacks at food stalls.",
      "Stroll along the riverside while waiting for your boat.",
    ],
  },
  {
    id: 17,
    name: "Day Trip to Redang Island",
    image: "/images/country/malaysia/places/perhentian/blog/redang_trip.jpg",
    description:
      "Hop on a boat from Perhentian to Redang for a day. Includes snorkeling at Redang Marine Park and relaxing on its pristine beaches.",
    location: "Redang Island (via Perhentian)",
    operationalHours: "Departure: 9am | Return: ~4pm",
    price: "RM120–RM180 per person <br /> (includes gear and transfers)",
    duration: "Half to full day",
    tips: [
      "Pack reef-safe sunscreen and water.",
      "Tours fill up fast—book in advance.",
    ],
  },
  {
    id: 18,
    name: "Masjid A R Rahman",
    image:
      "/images/country/malaysia/places/perhentian/blog/masjid_ar_rahman.jpg",
    description:
      "An overwater mosque on Perhentian Kecil offering stunning views and a peaceful atmosphere. Built as a gift from the Sultan of Terengganu in 2016.",
    location: "Near Kampung Nelayan, Perhentian Kecil",
    operationalHours: "Open daily (avoid prayer times)",
    price: "Free",
    duration: "15–30 minutes",
    tips: [
      "Non-Muslims can admire from outside or enter respectfully.",
      "Wear appropriate attire (covered shoulders and knees).",
    ],
    imageCreditHTML:
      'Photo by <a target="_blank" href="https://unsplash.com/@suuamr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Suu Amran</u></a> on <a target="_blank" href="https://unsplash.com/photos/a-large-white-building-sitting-on-top-of-a-body-of-water-pgTB0bqWkEY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a>',
  },
];

export const PERHENTIAN_ISLANDS_TRAVEL_GUIDE = {
  title: "Perhentian Islands Travel Guide",
  category: "Travel Guide",
  tableOfContentHeading: "Perhentian Islands Travel Guide",
  image:
    "/images/country/malaysia/places/perhentian/things_to_know_perhentian.jpg",
  slug: "/perhentian-islands/travel-guide",
  data: [
    {
      id: 1,
      icon: "PLANE",
      heading: "How to Reach Perhentian Islands",
      description: `
    To reach the Perhentian Islands, the most common route is via Kuala Besut Jetty in Terengganu. First, fly to Kota Bharu Airport (KBR), the nearest airport. From there, it’s about a 1-hour taxi or Grab ride to Kuala Besut Jetty.
    <br />
    <n
    Speedboats operate regularly between 9:00 AM and 5:00 PM, costing RM35–RM70 one-way depending on your boat type. The boat ride takes approximately 30–45 minutes to either Perhentian Besar (Big Island) or Perhentian Kecil (Small Island).
    <br />
    <br />
    It’s highly recommended to book your boat transfer in advance, you can book the jetty from redbus or easybook. If you're arriving from Kuala Terengganu or other parts of Malaysia, buses and taxis are also available to reach Kuala Besut.
    <br />
    <br />
    The jetty is the only departure point for travelers heading to Perhentian, and boats may be canceled in case of bad weather, so always check the forecast.

                `,
    },
    {
      id: 2,
      icon: "CAR",
      heading: "Getting Around Perhentian Islands",
      description: `
   Getting around the Perhentian Islands is simple and part of the charm. There are no cars or roads—transport is mainly by boat or foot. Water taxis are the most common mode of travel between beaches and from Perhentian Besar to Perhentian Kecil.
   <br />
   <br />
   Fares range from RM10 to RM50 depending on distance.
   <br />
   <br />
   Walking is ideal for exploring local beaches, jungle trails, and accommodation zones. On Perhentian Kecil, it’s possible to hike through the island’s interior trails to reach less crowded beaches like Adam & Eve or D’Lagoon. Boat transfers run in the dark as well put the prices doubles up, so plan accordingly. It’s best to carry cash, as boat taxis are often paid directly to the operator. Always confirm the price beforehand.
   <br />
   <br />
   For snorkeling or island hopping, many tours include transportation, making it a convenient way to see multiple spots in a single trip.
                `,
    },
    {
      id: 3,
      icon: "INFO",
      heading: "About Perhentian Islands",
      description: `
      The Perhentian Islands are a pair of stunning tropical islands located off the northeastern coast of Peninsular Malaysia.
      <br />
    <br />
    Perhentian Besar (Big Island) is more relaxed and family-friendly, known for its resorts, peaceful beaches, and calm waters. Perhentian Kecil (Small Island) is more popular with backpackers, offering vibrant nightlife, budget stays, and social beach scenes. Both islands boast turquoise waters, rich coral reefs, and abundant marine life, making them top destinations for snorkeling and scuba diving. There are no roads or ATMs, giving the islands a laid-back, off-grid vibe

                `,
    },
    {
      id: 4,
      icon: "HOTEL",
      heading: "Where to Stay?",
      description: `
       Accommodation on the Perhentian Islands ranges from budget hostels to luxury beachfront resorts.
       <br />
       <br />
Perhentian Kecil is ideal for budget travelers, with dorms and guesthouses on Long Beach or Coral Bay, priced from RM50 to RM150 per night. It’s great for solo travelers or those seeking a lively vibe
      <br />
       <br />
       Some of the beaches to stay in Kecil -
       <br />
        <li>D’Lagoon Beach</li>
        <li>Corel Bay</li>
        <li>Long Beach</li>

        <br />
        <br />
        Perhentian Besar, on the other hand, offers more mid-range and luxury options, with beachfront chalets, boutique resorts, and family villas ranging from RM200 to RM700+ per night. Most resorts include breakfast and offer direct beach access. Some even have diving centers or arrange snorkeling tours.

        <br />
        <br />
        Some of the beaches to stay in Besar -
        <br />
        <li>Teluk Pauh (Pauh Bay)</li>
        <li>Tuna Bay</li>
        <li>Petani Beach</li>

        <br />
        <br />
        Since there are no ATMs, always carry enough cash. Book well in advance during peak seasons (May–August), as accommodation fills up fast. Whether you’re after social hostels, romantic retreats, or family-friendly stays, both islands cater to a variety of travel styles.



                `,
    },
    {
      id: 5,
      icon: "SUN",
      heading: "When Is the Best Time to Visit?",
      description: `
      The best time to visit the Perhentian Islands is from <b>March to October</b>, when the weather is sunny, the sea is calm, and most services are operational. This is considered the dry season, perfect for snorkeling, diving, and beach activities.
      <br />
      <br />
     <b>May to August</b> is peak season, so expect higher accommodation prices and crowds—booking in advance is essential.
      <br />
      <br />
      Avoid the monsoon season from <b>November to February</b>, as the islands shut down for safety, with most resorts and boat services closed. Water activities are suspended during this period due to rough seas.
      <br />
      <br />
      If you prefer fewer crowds and slightly lower rates, aim for <b>March–April or September–October</b>. These shoulder months still offer good weather and full access to tours and facilities, making them ideal for a more relaxed trip.

                `,
    },
    {
      id: 6,
      icon: "CLOCK",
      heading: "How Long you should Spend ?",
      description: `
      A <b>3 to 5-day stay</b> is ideal for exploring the Perhentian Islands without feeling rushed. In three days, you can relax on the beaches, go snorkeling, and take part in one island-hopping or diving tour. If you stay for 4–5 days, you’ll have time to explore both islands, discover hidden beaches, and enjoy more activities like jungle trekking, kayaking, or scuba diving certification.
      <br />
      <br />
      Longer stays also give flexibility for weather changes, which can affect boat tours. Since there are no cars and nightlife is limited (except on Kecil), the islands are best suited for unwinding and nature-focused travel. Most visitors choose to stay on one island and do day trips to the other. Whether you’re backpacking or honeymooning, 3 to 5 days is the sweet spot for making the most of your Perhentian adventure.

                `,
    },
    {
      id: 7,
      icon: "CHECK",
      heading: "Must-Do Things",
      description: `
    The Perhentian Islands are a paradise for outdoor lovers and ocean enthusiasts. Start with <b>snorkeling</b> some of the best coral reefs are found near Turtle Bay, Shark Point, and Romantic Beach. Full-day snorkeling tours cost around <b>RM50–RM80</b> per person and cover 4–6 popular spots. <b>Scuba diving</b> is a must if you want to explore deeper reefs, shipwrecks, and marine life—dives range from <b>RM200–RM350</b>, while certification courses start from <b>RM1000</b>.
    <br />
    <br />
    Hike jungle trails on Kecil to hidden beaches like Adam & Eve Beach, and enjoy scenic views of the island. Don’t miss <b>kayaking</b> (<b>RM30/hour</b>), <b>sunset watching</b> at Coral Bay, or a <b>beach picnic</b>. In the evenings, Long Beach comes alive with fire shows and beach bars. Whether it’s relaxing or exploring, the islands offer the perfect blend of nature, adventure, and chill vibes.

                `,
    },
    {
      id: 7,
      icon: "CHECK",
      heading: "Best Day Trips",
      description: `
   Perhentian offers excellent opportunities for scenic day trips.
   <br />
   <br />
    One of the top excursions is the <b>island-hopping boat tour</b> (<b>RM50–RM100</b>), taking you to nearby beaches, snorkeling spots, and even a few secluded sandbars.
        <br>
        <br>
    A day trip to <b>Redang Island</b> (approx. <b>RM150 per person</b>) is possible by private boat and gives you a chance to explore another stunning island with clear waters and diverse marine life.
<br>
        <br>
    <b>Turtle spotting trips to Turtle Bay</b> are popular, especially in the morning hours. You can also take a water taxi across to the neighboring island (Kecil to Besar or vice versa) for a different experience. Some of the half-day tour includes Romantic Beach, Lighthouse, and Shark Point.

                `,
    },
    {
      id: 7,
      icon: "PlANE",
      heading: "Quick Travel Tips",
      description: `
     <li> 💸 <b>Cash is king:</b> There are no ATMs on the islands, so carry enough Malaysian Ringgit.</li>
     <br/>
    <li>🌊 <b>Pack reef-safe sunscreen:</b> Protect the marine ecosystem and your skin.</li>
    <br/>
    <li>📱 <b>Limited Wi-Fi:</b> Outside of the resorts, places have slow or no internet, download offline maps and entertainment.</li>
  <br/>
    <li>🛥️ <b>Arrive early:</b> Last boats to the island from Kuala Besut Jetty usually leave by 4–5 PM.</li>
<br/>
    <li>🌧️ <b>Avoid monsoon season:</b> November–February brings rough seas and closed resorts.</li>
<br/>
    <li>🐢 <b>Be eco-conscious:</b> Say no to plastic, and never touch marine life while snorkeling.</li>
<br/>
    <li>🧴 <b>Carry essentials:</b> Bring mosquito repellent, a waterproof dry bag, and light clothing.</li>
<br/>
    <li>🕒 <b>Plan ahead:</b> Book stays and activities in advance during peak season (May–August).</li>


                `,
    },
  ],
  related_articles: [],
};
