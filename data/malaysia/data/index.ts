import { ICONS } from "@/constants/icon";
import {
  Bike,
  Book,
  BookOpenCheck,
  Building,
  Calendar,
  DollarSign,
  FerrisWheel,
  Languages,
  MapPin,
  Plane,
  Pyramid,
  Shield,
  Soup,
  Star,
  TrainFront,
  Waves,
  Wifi,
} from "lucide-react";

export const THINGS_TO_KNOW_BEFORE_GOING = {
  malaysia: {
    heading: "Malaysia Travel Guide",
    image:
      "/images/country/malaysia/things_to_know_before_going_to_malaysia.jpg",
    description:
      "Essential travel tips, information, and advice for your trip to Malaysia",
    tableOfContentHeading: "View Check List",
    overview:
      "Malaysia is a captivating blend of diverse cultures, stunning landscapes, and mouthwatering cuisine. But Before you jet off, it’s important to get familiar with a few essentials that will make your trip smoother. In this article, we cover everything you need to know before visiting Malaysia from visa requirements and currency tips to weather, local customs, dress codes, safety advice, and health precautions. Learn what to pack, how to get around, and how to respect local traditions. Whether it’s your first time in Southeast Asia or you're a seasoned traveler, this guide ensures you arrive in Malaysia informed and ready to explore with confidence.",
    data: [
      {
        id: 1,
        heading: "Culture & History",
        icon: "PYRAMID",
        description: `
                Malaysia’s rich tapestry of culture and history is one of its most fascinating aspects and a key reason travelers are drawn to the country. A melting pot of <b>Malay, Chinese, Indian</b> and <b>indigenous</b> influences, Malaysia offers a vibrant cultural experience unlike any other in Southeast Asia.
                You’ll see this diversity reflected in its <b>festivals, food, languages, and religions</b>. Islam is the official religion, but Malaysia also celebrates Diwali, Chinese New Year, and Christmas.
                <br />
                <br />
                Respect local customs: dress modestly when visiting mosques or temples, remove shoes before entering homes or religious places, and avoid public displays of affection. Islam is the dominant religion, and it's wise to be mindful of religious practices, especially during Ramadan.
                <br />
                <br />
                Traditional values are strong, especially in rural areas. Learning about the culture enhances your appreciation of Malaysia’s heritage.
                `,
      },
      {
        id: 2,
        icon: "PLANE",
        heading: "Visa Requirements",
        description: `
                Before entering Malaysia, check the <a href="https://www.malaysia.gov.my/portal/subcategory/1543" target="_blank" class="text-teal-600 underline">visa requirements</a> based on your nationality. Many travelers can enter visa-free for 14 to 90 days. For longer stays or for nationalities requiring a visa, apply online via the <b>eVisa or eNTRI</b> systems, which are straightforward and quick. Immigration officials may ask for proof of onward travel and accommodation, so have those ready.
                <br />
                <br />
                <b>However, all foreign visitors irrespective of visa requirement must complete the Malaysia Digital Arrival Card (MDAC)</b>.
                <br />
                <br />
                <b>Few of visa-free countries:</b> USA, EU member states, Australia, India, China, Canada, Japan, South Korea, South Africa, Vietnam, Thailand, Indonesia, UAE.
                `,
      },
      {
        id: 3,
        icon: "MAP_PIN",
        heading: "What’s MDAC, and the complete process ?",
        description: `
            Malaysia Digital Arrival Card(MDAC), a mandatory online form that all foreign travelers, except Singapore, must complete before entering Malaysia. It's not a visa but a required registration document that streamlines entry procedures and improves border security.
            <br/>
            <br/>
<b>All foreign visitors must complete the Malaysia Digital Arrival Card (MDAC) online within 3 days before arrival.</b> You can submit the MDAC on the <a href="https://imigresen-online.imi.gov.my/mdac/main" target="_blank" rel="noopener noreferrer" class="text-teal-600 underline">official immigration website</a>. It’s a quick, free and mandatory process that streamlines immigration clearance. Make sure your passport is valid for at least six months.
<br/>
<br/>
If you're arriving by land—such as from Thailand or Singapore—the visa and MDAC requirements still apply. Always carry a printed copy or a screenshot of your approved MDAC for smoother processing at airport or land border checkpoints.
<br/>
<br/>
<b>Important: </b>Do not fill out the MDAC form earlier than 3 days before your arrival. It must be submitted within the 3 days leading up to your travel date


        `,
      },
      {
        id: 4,
        icon: "DOLLAR_SIGN",
        heading: "Currency in Malaysia: Exchange Tips & Daily Costs",
        description: `
        <b>Malaysia uses the Malaysian Ringgit (MYR)</b>.

        <br/>
        <br/>
1 USD equals ~ RM4.5.
<br/>
<br/>
Exchange money at licensed money changers in malls or city centers for the best rates. Avoid airport kiosks and hotels as they offer poor exchange rates. ATMs are a safe option for direct withdrawals. Always check for hidden fees and ensure the exchanger is authorized and regulated.
<br/>
<br/>
Malaysia is a <b>budget-friendly</b> destination, especially for street food, local transport, and mid-range stays. Backpackers can spend under <b>RM200/day</b>, while mid-range travelers spend around <b>RM300–500/day</b>. Costs can rise in tourist-heavy zones like islands or during peak travel seasons, so budget accordingly.


        `,
      },

      {
        id: 5,
        icon: "PYRAMID",
        heading: "Best Time to Visit",
        description: `

        Malaysia has a tropical climate, so it's <b>hot and humid year-round</b>. However, the best time to visit depends on the region.Explore our in-depth city-specific <a href="/malaysia" target="_blank" class="text-teal-600 underline">travel guides</a> travel guides for everything you need to know about the destinations you're visiting in Malaysia.
        <br/>
        <br/>
        For most of Peninsular Malaysia, the dry season runs from <b>November to August</b>, making it ideal for outdoor travel and beach destinations.
        <b>The East Coast (Kuala Terengganu, Perhentian Islands) experiences heavy monsoons from November to January</b>.
        <br/>
        <br/>
        In <b>Sabah and Sarawak</b>, dry months vary slightly, but March to September is generally pleasant.
        <br/>
        <br/>
        Mountain areas like <b>Cameron Highlands</b> remain cooler throughout the year, offering a refreshing escape from the tropical heat.
        `,
      },
      {
        id: 6,
        icon: "WIFI",
        heading: "Network",
        description: `
        Malaysia has excellent mobile coverage across cities and tourist areas. Major telecom providers include <b>Hotlink (Maxis), Digi, Celcom, and U Mobile.</b>
<br />
<br />
You can easily purchase a tourist SIM card at airports, convenience stores, or mobile kiosks. 4G coverage is strong in most places, and 5G is expanding in major cities. Plans are affordable — expect to pay around RM20–RM50 for 7–unlimited GB of data.
<br />
<br />
Wi-Fi is available in hotels, cafes, and shopping malls. If you're exploring remote areas or islands, the signal may be weaker, so download maps or important info in advance.



        `,
      },
      {
        id: 7,
        icon: "LANGUAGES",
        heading: "Languages",
        description: `
            The national language is Bahasa Malaysia (Malay), but English is widely spoken, especially in urban centers, tourist areas, and by younger generations.
            <br />
            <br />
            You’ll also hear Mandarin, Cantonese, and Tamil, reflecting Malaysia’s multicultural heritage. Road signs and public information are often bilingual, in Malay and English. Learning a few basic Malay phrases like “terima kasih” (thank you) or “selamat pagi” (good morning) can enhance your travel experience. Most locals are friendly and appreciate visitors who make an effort. Language won't be a major barrier during your trip in Malaysia.


        `,
      },
      {
        id: 8,
        icon: "TRAIN_FRONT",
        heading: "Getting Around Malaysia",
        description: `
            Traveling between cities in Malaysia is affordable and efficient thanks to a well-developed transport network.
            <br />
            <br />
            <li>
              <b>By Bus:</b> Intercity buses are the most economical way to travel across Malaysia. Major hubs like Kuala Lumpur, Penang, and Johor Bahru are well-connected.
Most intercity buses and trains in Malaysia offer comfortable seating, and <b>select routes also feature Business Class</b> options. Consider booking a ticket in advance on platforms like RedBus or Easybook.
            </li>
            <br />
            <li>
            <b>By Train:</b> KTM’s intercity and ETS (Electric Train Service) offer comfortable travel between major destinations like KL, Ipoh, and Butterworth (Penang). It's scenic and reliable.
            </li>
            <br />
            <li>
            <b>By Flight:</b> For longer distances (e.g., Kuala Lumpur to Sabah or Sarawak), flying is fast and convenient. Budget airlines(Super Cheap) like AirAsia and Firefly operate frequent domestic routes.
            </li>
            <br />
            <li>
            <b>By Car:</b> Renting a car is ideal for flexible road trips, especially in regions like Langkawi, Cameron Highlands, or the East Coast. Highways are well-maintained and signage is in English. Malaysia drives on the left-side.
            </li>
        `,
      },
      {
        id: 9,
        icon: "BIKE",
        heading: "Best Ways to Get Around Malaysian Cities and Towns",
        description: `
            Local transportation in Malaysia is both reliable and budget-friendly. In major cities, use <b>Grab</b> for convenient, cashless rides it’s more trustworthy than street taxis. It usually costs around <b>RM10–RM12 for a 5 km ride</b>.
            <br />
            <br />
Kuala Lumpur has a strong public transport network, including buses, LRT, and MRT. Fares are cheap and schedules are frequent. In tourist towns, you might rely on shared vans, trishaws, or taxis — always ask for the meter or agree on a price.
            <br />
            <br />
On islands, transportation may include scooters, bicycles, or boat transfers. Walking is easy in compact towns like George Town or Melaka, making exploration more enjoyable.
            <br />
            <br />
Renting a scooter is a convenient and budget-friendly way to hop between attractions especially in places like Langkawi, where public transport is limited.
<br />
<li>Scooter rental - <b>RM40–RM60 per day.</li></b>
        `,
      },
      {
        id: 10,
        icon: "SOUP",
        heading: "Food and Alcohol Costs in Malaysia: What to Expect",
        description: `
Malaysia’s cuisine is a flavorful mix of Malay, Chinese, and Indian influences—don’t miss dishes like nasi lemak, laksa, and roti canai costs around RM5–RM10, while mid-range meals at local restaurants are typically RM15–RM30. Street food is both delicious and budget-friendly, especially in cities like Penang and Kuala Lumpur. For more insights, explore our in-depth article on Malaysian cuisine -
<br />
<br />
<li>A  <a href="/malaysia/complete-food-guide" target="_blank" class="text-teal-600 underline">complete food guide</a> provide info of what to, when to and the vegetarian options.</li>
<li> <a href="/malaysia/what-to-eat" target="_blank" class="text-teal-600 underline">Must-try dishes</a> you shouldn't miss in Malaysia.</li>
<br />
Alcohol is taxed heavily—expect to pay RM15–RM30 ($3–$7 USD) for a beer at bars, and more in upscale places. Supermarkets sell beer from RM8 ($1.70 USD) per can, but alcohol is limited in Muslim-majority areas.
<br />
<br />
Langkawi and duty-free zones offer better prices. Always drink responsibly and respect local customs regarding alcohol.
        `,
      },
      {
        id: 11,
        icon: "SHIELD",
        heading: "Is Malaysia Safe for Travelers?",
        description: `
          Malaysia is generally very <b>safe for travelers</b>, with low violent crime rates. Petty theft (like pickpocketing or bag snatching) can happen in crowded areas, so stay alert and keep valuables secure. Always use official taxis or Grab, especially at night.
          <br />
          <br />
Tap water isn't always safe to drink — use bottled or filtered water. Naturewise, be cautious during hikes or ocean activities, but serious risks are rare. Malaysia is politically stable and welcoming to tourists. Keep emergency numbers handy:
<br />
<br />
<b>999 for ambulance or police</b>, and 991 for fire.
        `,
      },
      {
        id: 12,
        icon: "FERRIS_WHEEL",
        heading: "What Are the Must-Visit Places in Malaysia?",
        description: `
          Malaysia has something for every kind of traveler. Discover the top things to do in Malaysia with our detailed article of <a href="/malaysia" target="_blank" rel="noopener noreferrer" class="text-teal-600 underline">top things to do in Malaysia</a>.
          <br />
          <br />
One can explore the vibrant capital <b>Kuala Lumpur</b>, with its Petronas Towers, Batu Caves and street food. Wander historic <b>George Town (Penang)</b>, a UNESCO heritage site filled with culture and art. Relax on tropical islands like <b>Langkawi</b>, <b>Perhentian, or Redang</b>. Dive into unforgettable underwater adventures with scuba diving or snorkeling at not only Malaysia’s but world's top marine spots like <b>Sipadan</b> and Lankayan Island. Discover nature in Cameron Highlands or climb Mount Kinabalu in <b>Sabah</b>. Visit <b>Melaka</b> for colonial charm or Borneo for orangutans and rainforests.
          <br />
          <br />
Each destination has its own unique flavor whether you're chasing beaches, tea plantations, food trails, or eco-adventures, Malaysia is full of surprises.
        `,
      },
      {
        id: 13,
        icon: "BOOK_OPEN_CHECK",
        heading: "Quick Tips",
        description: `
         <li>Be prepared for sudden rain showers, carry a light poncho or umbrella.</li>
<li>The sun can be intense, so don’t forget sunscreen.</li>
<li>For essentials like groceries or bottled water, shop at local minimarts or supermarkets.</li>
        `,
      },
    ],
    related_articles: [
      {
        slug: "kuala-lumpur/top-things-to-do",
        title: "Top Things to Do in Kuala Lumpur",
        image: "/images/country/malaysia/places/kuala_lumpur/kuala_lumpur.png",
        category: "Activities",
      },
      {
        slug: "penang/top-things-to-do",
        title: "Top Things to Do in Penang",
        image: "/images/country/malaysia/places/penang/penang.jpg",
        category: "Activities",
      },
      {
        slug: "langkawi/top-things-to-do",
        title: "Top Things to Do in Langkawi",
        image: "/images/country/malaysia/places/langkawi/langkawi_banner.jpg",
        category: "Activities",
      },
    ],
  },
};

export const MALAYSIA_NINE_DAYS_ITINERARY = [
  {
    heading: "Day 1: Arrival in Langkawi – Beachside Bliss and Sunset Vibes",
    sections: [
      {
        type: "content",
        text: `Start your Malaysia adventure by catching a flight to the beautiful island of Langkawi. Whether flying directly or via Kuala Lumpur International Airport (KLIA/KLIA2), you'll reach Langkawi in about an hour. Upon arrival, take a taxi from the airport to your hotel and complete check-in formalities. Once settled, <b>renting a scooter</b> is a great idea for getting around easily and discovering hidden gems at your own pace.
        `,
      },
      {
        type: "content",
        text: `

        Once done, head straight to the island's lively heart, <b>Pantai Cenang.</b> Drive through the Jalan Kuala Muda Road to catch a flight landing on one side and the ocean on the other. This bustling beachside strip offers soft sandy shores, beachfront cafes, and boutique shops perfect for some light souvenir hunting. As the day mellows, make your way toward <b>Pantai Tengah</b>, Langkawi's quieter and more serene beach just south of Cenang. This is the perfect spot to unwind and watch the sun dip below the horizon in a blaze of tropical colors.

        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/langkawi/langkawi_banner.jpg",
            alt: "Langkawi",
          },
        ],
      },
      {
        type: "content",
        text: "For dinner, choose one of the cozy seaside restaurants offering fresh seafood and local Malaysian flavors, ideal for setting the mood for your beach vacation.",
      },
    ],
  },
  {
    heading: "Day 2: Langkawi SkyCab, Sky Bridge & Sunset Cruise Adventure",
    sections: [
      {
        type: "content",
        text: `
          Begin your second day in Langkawi with one of the island’s most iconic experiences: the <b>Langkawi SkyCab</b>. Ride the panoramic cable car up to the top of Gunung Mat Cincang, where sweeping views of Langkawi’s lush rainforest and turquoise waters await. Once at the top, take a walk along the <b>Langkawi Sky Bridge</b>, a curved suspension bridge offering jaw-dropping views and photo-perfect moments. You have an option for skywalk at <b>Sky Eagle</b> at the middle station.

        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/langkawi/travel_guide_banner.jpg",
            alt: "Langkawi skycab",
          },
        ],
      },
      {
        type: "content",
        text: `
        After soaking in the views, head down to the <b>Oriental Village</b>. This charming complex is home to quirky shops, local eateries, and family-friendly attractions like the <b>3D Art Museum</b>, SkyDome, and SkyRex. <b>3D Art Museum</b> is highly recommended and the entrance is included in the SkyCable combo ticket. Grab a leisurely lunch here before winding down for the afternoon.
        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/langkawi/blog/3d_art.jpg",
            alt: "3D Art Museum",
          },
        ],
      },
      {
        type: "content",
        text: `
        As the sun begins to dip, make your way to the pier for a magical <b>sunset cruise</b>. Sailing across the Andaman Sea while the sky changes color is a truly relaxing and romantic way to end the day. Many cruises offer light refreshments, snorkelling options and music onboard, perfect for soaking in the island’s tropical charm.

        `,
      },
    ],
  },
  {
    heading: "Day 3 : Kilim Geoforest Park, Waterfalls & Langkawi Night Market",
    sections: [
      {
        type: "content",
        text: `Start your third day in Langkawi with a nature-filled adventure to <b>Kilim Karst Geoforest Park</b>, a UNESCO-recognized geopark rich in biodiversity and dramatic limestone formations. Embark on a guided boat tour that glides through scenic mangrove forests, caves, and emerald waterways. Along the way, you may spot wildlife such as eagles, monitor lizards, and playful monkeys. Some tours also include stops at floating fish farms or bat caves, making the experience even more immersive and educational.`,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/national_museum.jpg",
            alt: "National Museum",
          },
        ],
      },
      {
        type: "content",
        text: `
        After the boat trip, head back toward the central part of the island and cool off at one of Langkawi’s scenic waterfalls. <b>Temurun Waterfall</b> in the north or <b>Seven Wells Waterfall (Telaga Tujuh)</b> near the cable car area are both excellent options for a refreshing dip or a peaceful picnic surrounded by lush greenery. Don’t forget your swimwear and camera—these waterfalls are truly postcard-worthy.

        `,
      },
      {
        type: "content",
        text: `

        As evening approaches, dive into Langkawi’s local culture by visiting a <b>Langkawi Night Market</b>. These markets rotate locations throughout the week, so check our article about the <b>langkawi travel guide</b> to locate the area that is hosting. Wander through the stalls filled with aromatic Malaysian street food, local snacks, handmade souvenirs, and tropical fruits. It’s a great place to interact with locals, try something new, and soak in the island’s authentic vibe.
        `,
      },
    ],
  },
  {
    heading:
      "Day 4: Travel from Langkawi to Penang – Culture, Heritage & Coastal Charm",
    sections: [
      {
        type: "content",
        text: `Your fourth day begins with a scenic transfer from Langkawi to Penang, either by a short domestic flight or a leisurely ferry ride across the Andaman Sea. Once you arrive, take a taxi to your hotel in <b>George Town</b>, the vibrant capital of Penang and a UNESCO World Heritage Site known for its multicultural charm, colonial-era architecture, and delicious street food.`,
      },
      {
        type: "content",
        text: `
        After check-in and a brief rest, begin exploring the heart of <b>George Town’s Heritage Zone</b>. This walkable area is filled with historic shophouses, temples, and mosques that reflect the island’s diverse cultural tapestry. Meander through narrow streets lined with colorful murals, aromatic food stalls, and local boutiques
        `,
      },
      {
        type: "content",
        text: `
        As evening sets in, head to the iconic <b>Penang Street Art Trail</b>, where you can discover interactive murals by Lithuanian artist Ernest Zacharevic and other local talents. These creative artworks make for fun photo ops and reveal Penang’s unique fusion of art and history.Continue your journey to the enchanting <b>Cheong Fatt Tze Mansion</b>, also known as the Blue Mansion. This heritage house is a stunning example of 19th-century Chinese architecture and offers guided tours for those interested in its rich backstory.
        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/pavilion_kl.jpg",
            alt: "Pavilion KL",
          },
        ],
      },
      {
        type: "content",
        text: `
        Head to <b>Clan Jetties</b> at the sunset and capture some insta worth pics, where traditional Chinese waterfront homes stand on stilts over the sea.
        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/heli_lounge.jpg",
            alt: "Heli Lounge Bar",
          },
        ],
      },
      {
        type: "content",
        text: `
        As night falls, indulge in a mouthwatering dinner at <b>Gurney Drive Hawker Centre</b>, one of the best places to sample Penang’s legendary street food.
        `,
      },
    ],
  },
  {
    heading:
      "Day 5: Explore Penang – Hilltop Views, Temples & Beach Relaxation",
    sections: [
      {
        type: "content",
        text: `
        Day 5 is all about discovering the natural beauty, spiritual landmarks, and coastal charm of Penang. Begin your morning with a visit to <b>Penang Hill</b>, one of the island’s most popular attractions. Take the funicular train ride up to the summit, where panoramic views of George Town and the surrounding landscape unfold before you. The cool hilltop breeze and lush surroundings make it a refreshing escape from the city heat. While at the top, take time to visit <b>The Habitat,</b> a serene eco-park featuring canopy walks, rainforest trails, and native flora and fauna.
        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/chinatown.jpg",
            alt: "Chinatown",
          },
        ],
      },
      {
        type: "content",
        text: `
        Then, descend the hill and make your way to <b>Kek Lok Si Temple</b> in Air Itam, one of Southeast Asia’s largest Buddhist temples. Wander through its beautifully designed halls, prayer pavilions, and towering pagoda. Don’t miss the massive statue of the Goddess of Mercy overlooking the complex—it’s one of Penang’s most iconic sights.
        `,
      },
      {
        type: "content",
        text: `
        In the afternoon, return to your hotel to rest or grab lunch at a nearby café. As evening approaches, head to <b>Batu Ferringhi Beach</b>, Penang’s popular coastal retreat. You can relax on the golden sands, enjoy a swim, or take a stroll along the beach promenade.

      `,
      },
      {
        type: "content",
        text: `
      As night falls, you can explore one of the nearby <b>night markets</b> that pop up around Batu Ferringhi, offering local food, handmade goods, and lively energy.

      `,
      },
    ],
  },
  {
    heading: "Day 6: Arrival in Kuala Lumpur – Iconic Towers & City Skyline",
    sections: [
      {
        type: "content",
        text: `
        On Day 6, fly into <b>Kuala Lumpur</b>, Malaysia’s buzzing capital city. Upon arrival at <b>KLIA or KLIA2</b>, you have two main transfer options: the KLIA Ekspres train, which takes you directly to KL Sentral in under 30 minutes, or a taxi ride that offers convenience, especially if you're traveling with luggage.
        `,
      },
      {
        type: "content",
        text: `
        Once at your city-center hotel, check in and take some time to unwind—many hotels offer rooftop infinity pools with sweeping city views, perfect for a relaxing break after your journey.
        `,
      },
      {
        type: "content",
        text: `
          In the evening, step into the heart of Kuala Lumpur by visiting the city’s most iconic landmark—the <b>Petronas Twin Towers</b>. These twin skyscrapers are especially magical when illuminated after sunset. Take the elevator up to the <b>Skybridge and observation deck</b> to enjoy panoramic views of the city skyline. Book your Petronas Tower visit online in advance to skip queues, and time your visit just before sunset for stunning views. Afterward, enjoy a peaceful walk around <b>KLCC Park</b>, a beautifully landscaped area complete with fountains and walking trails.
        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/bukit_bintang.jpg",
            alt: "Bukit Bintang",
          },
        ],
      },
      {
        type: "content",
        text: `
        For dinner, head to the <b>Suria KLCC food court</b>, located inside the towers. It’s an easy and delicious introduction to Malaysian flavors, with a wide range of local and international cuisines. If you’re up for more exploration, stroll through the adjacent shopping mall or catch a water fountain light show at the park’s esplanade.
        `,
      },
      {
        type: "content",
        text: `
        <b>Quick Tip</b>: Book your Petronas Tower visit online in advance to skip queues, and time your visit just before sunset for stunning views.
        `,
      },
    ],
  },
  {
    heading: "Day 7: Explore Kuala Lumpur – Culture, Markets & Nightlife",
    sections: [
      {
        type: "content",
        text: `
        Begin your full day in Kuala Lumpur with a morning trip to the iconic <b>Batu Caves</b>, a striking Hindu temple complex nestled within towering limestone cliffs. Just a short Grab or taxi ride from the city (about 20–30 minutes), this spiritual site features a massive golden statue of Lord Murugan and a colorful flight of 272 steps leading up to the main temple cave. The climb is part of the experience, offering scenic views and a close encounter with the resident monkeys. Checkout the dark cave and ramayana cave for more adventure.


        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/thean_hou_temple.jpg",
            alt: "<b><b>Thean Hou Temple</b></b>",
          },
        ],
      },
      {
        type: "content",
        text: `After returning to the city, spend your midday at <b>Central Market</b>, a cultural hub where you can shop for traditional crafts, batik prints, and souvenirs. Just a short walk away is <b>Petaling Street</b> in <b>Chinatown</b>, where you can enjoy bustling street scenes, bargain shopping, and local eats. It’s a great spot to sample Malaysian Chinese delicacies in an energetic atmosphere.
`,
      },
      {
        type: "content",
        text: `
        In the late afternoon, escape into nature at the <b>KL Forest Eco Park</b>, a green lung in the heart of the city. Explore its canopy walkways and shaded trails, then head up to <b>Menara Kuala Lumpur (KL Tower)</b> for sweeping views of the city. Time your visit to catch the sunset—it’s truly mesmerizing from the observation deck.
        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/batu_caves.jpg",
            alt: "Batu Caves",
          },
        ],
      },
      {
        type: "content",
        text: `
        For dinner and nightlife, walk over to <b>Jalan Alor</b>, KL’s legendary night food street, where sizzling woks and smoky grills serve everything from satay to seafood. Wrap up your night at <b>Changkat Bukit Bintang</b>, a vibrant nightlife strip packed with bars, clubs, and live music.
        `,
      },
    ],
  },
  {
    heading: "Day 8: Day Trip to Malacca or More of Kuala Lumpur",
    sections: [
      {
        type: "content",
        text: `Today offers you two exciting options—either a historical day trip to <b>Malacca (Melaka)</b> or a deeper dive into Kuala Lumpur’s cultural gems.`,
      },
      {
        type: "content",
        text: `
        <b>Option 1: Day Trip to Malacca</b>
 Begin your journey with a comfortable bus ride from <b>TBS Bus Terminal to Melaka Sentral</b>, which takes around two hours. Upon arrival, head straight to <b>Dutch Square</b>, where the iconic red-painted buildings like <b>Christ Church</b> and <b>The Stadthuys</b> offer a glimpse into Malaysia’s colonial past. Climb up to <b>St. Paul’s Hill </b> for panoramic views and explore the ruins of <b>A Famosa Fort</b>, a Portuguese fortress dating back to the 16th century.
        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/genting_highlands.jpg",
            alt: "Genting Highlands",
          },
        ],
      },
      {
        type: "content",
        text: `
        Stroll along <b>Jonker Street</b>, a lively lane brimming with antique shops, local crafts, and street food. If time permits, take a relaxing <b>Malacca River Cruise</b> to see murals, bridges, and charming cafes lining the waterway. In the evening, return to Kuala Lumpur for a well-earned rest.

        `,
      },
      {
        type: "content",
        text: `
       <b>Option 2: More of Kuala Lumpur</b>
        <br>
If you prefer a slower pace, start your day with a visit to the <b>Islamic Arts Museum Malaysia</b>, home to beautifully curated exhibitions and Islamic architecture. Continue to <b>Masjid Negara (National Mosque)</b>, an architectural marvel with peaceful grounds.
<br>
Later, explore the colorful <b><b>Thean Hou Temple</b></b>, one of Southeast Asia’s oldest and grandest Chinese temples. Enjoy lunch in <b>Little India</b>, where the aroma of spices and colorful textiles fills the air. Spend the afternoon at <b>Merdeka Square</b>, admire the <b>Sultan Abdul Samad Building</b>, and stroll along the scenic<b> River of Life</b>.
        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/interact_locals.jpg",
            alt: " Islamic Arts Museum Malaysia",
          },
        ],
      },
    ],
  },
  {
    heading: "Day 9: Markets & Farewell",
    sections: [
      {
        type: "content",
        text: `
        Your final day in Malaysia offers a perfect balance of relaxation, last-minute sightseeing, and a smooth departure. Begin your morning with a leisurely breakfast at your hotel. If you have time before your flight, take this opportunity to explore any sights you might have missed earlier in Kuala Lumpur.
        <br>
One great option is a return visit to the <b> Islamic Arts Museum Malaysia</b>, especially if you didn’t get a chance on Day 8. Its serene atmosphere and world-class exhibits make it a peaceful and enriching way to end your trip. Alternatively, visit the <b>National Mosque (Masjid Negara)</b>, located nearby, to admire its striking modern architecture and tranquil gardens.
<br >
Another excellent spot to consider is the <b>Thean Hou Temple</b>, known for its intricate carvings, vibrant décor, and sweeping city views. You could pair this with a stop in <b>Little India (Brickfields)</b>, where you can enjoy a flavorful lunch and experience the area’s colorful culture.
<br >
For those looking to squeeze in a bit more shopping,<b>Central Market, Suria KLCC</b>, or <b>Pavilion Mall</b> are all ideal for picking up souvenirs, snacks, or traditional crafts. Don’t forget to leave some space in your bag for gifts and keepsakes!

        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/metro_ride.jpg",
            alt: "Metro Ride",
          },
        ],
      },
      {
        type: "content",
        text: `
        As departure time nears, make your way to <b>KLIA or KLIA2</b>. If time allows, browse airport shops for last-minute mementos or enjoy a relaxed meal before your flight.

        `,
      },
    ],
  },
];

export const MALAYSIA_SIXTEEN_DAYS_ITINERARY = [
  {
    heading: "Day 1: Arrival in Langkawi – Beachside Bliss and Sunset Vibes",
    sections: [
      {
        type: "content",
        text: `
        Start your Malaysia adventure by catching a flight to the beautiful island of Langkawi. Whether flying directly or via Kuala Lumpur International Airport (KLIA/KLIA2), you’ll reach Langkawi in about an hour. Upon arrival, take a taxi from the airport to your hotel and complete check-in formalities. Once settled, <b>renting a scooter </b>is a great idea for getting around easily and discovering hidden gems at your own pace.
        <br>
        <br>
        Once done, head straight to the island’s lively heart,<b>Pantai Cenang</b>. Drive through the Jalan Kuala Muda Road to catch a flight landing on one side and the ocean on the other. This bustling beachside strip offers soft sandy shores, beachfront cafes, and boutique shops perfect for some light souvenir hunting. As the day mellows, make your way toward <b>Pantai Tengah</b>, Langkawi’s quieter and more serene beach just south of Cenang. This is the perfect spot to unwind and watch the sun dip below the horizon in a blaze of tropical colors.
        <br>
        <br>
        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/petrnos_tower.jpg",
            alt: "Petronas Twin Towers",
          },
        ],
      },
      {
        type: "content",
        text: `For dinner, choose one of the cozy seaside restaurants offering fresh seafood and local Malaysian flavors, ideal for setting the mood for your beach vacation.`,
      },
    ],
  },
  {
    heading: "Day 2: Langkawi SkyCab, Sky Bridge & Sunset Cruise Adventure",
    sections: [
      {
        type: "content",
        text: `Begin your second day in Langkawi with one of the island’s most iconic experiences: the <b>Langkawi SkyCab</b>. Ride the panoramic cable car up to the top of Gunung Mat Cincang, where sweeping views of Langkawi’s lush rainforest and turquoise waters await. Once at the top, take a walk along the <b>Langkawi Sky Bridge</b>, a curved suspension bridge offering jaw-dropping views and photo-perfect moments. You have an option for skywalk at Sky Eagle at the middle station.`,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/batu_caves.jpg",
            alt: "Batu Caves",
          },
        ],
      },
      {
        type: "content",
        text: `After soaking in the views, head down to the <b>Oriental Village</b>. This charming complex is home to quirky shops, local eateries, and family-friendly attractions like the 3D Art Museum, SkyDome, and SkyRex. <b>3D Art Museum</b> is highly recommended and the entrance is included in the SkyCable combo ticket. Grab a leisurely lunch here before winding down for the afternoon.`,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/sultan_abdul_samad.jpg",
            alt: "<b>Sultan Abdul Samad Building</b>",
          },
        ],
      },
      {
        type: "content",
        text: `
        As the sun begins to dip, make your way to the pier for a magical <b>sunset cruise</b>. Sailing across the Andaman Sea while the sky changes color is a truly relaxing and romantic way to end the day. Many cruises offer light refreshments, snorkelling options and music onboard, perfect for soaking in the island’s tropical charm.

        `,
      },
    ],
  },
  {
    heading: "Day 3: Kilim Geoforest Park, Waterfalls & Langkawi Night Market",
    sections: [
      {
        type: "content",
        text: `Start your third day in Langkawi with a nature-filled adventure to <b>Kilim Karst Geoforest Park</b>, a UNESCO-recognized geopark rich in biodiversity and dramatic limestone formations. Embark on a guided boat tour that glides through scenic mangrove forests, caves, and emerald waterways. Along the way, you may spot wildlife such as eagles, monitor lizards, and playful monkeys. Some tours also include stops at floating fish farms or bat caves, making the experience even more immersive and educational.`,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/national_museum.jpg",
            alt: "National Museum",
          },
        ],
      },
      {
        type: "content",
        text: `
        After the boat trip, head back toward the central part of the island and cool off at one of Langkawi’s scenic waterfalls. <b>Temurun Waterfall</b> in the north or Seven Wells Waterfall (Telaga Tujuh) near the cable car area are both excellent options for a refreshing dip or a peaceful picnic surrounded by lush greenery. Don’t forget your swimwear and camera—these waterfalls are truly postcard-worthy.
        <br>
        <br>
        As evening approaches, dive into Langkawi’s local culture by visiting a <b>Langkawi Night Market</b>. These markets rotate locations throughout the week, so check our article about the <b>langkawi travel guide</b> to locate the area that is hosting. Wander through the stalls filled with aromatic Malaysian street food, local snacks, handmade souvenirs, and tropical fruits. It’s a great place to interact with locals, try something new, and soak in the island’s authentic vibe.
        `,
      },
      {
        type: "images",
        images: [
          {
            src: "/images/country/malaysia/places/kuala_lumpur/blog/botanical_garden.jpg",
            alt: "Perdana Botanical Garden",
          },
        ],
      },
    ],
  },
  {
    heading: "Day 4: Fly to Penang & Explore George Town’s Heritage",
    sections: [
      {
        type: "content",
        text: `
         Start your day with a short flight or scenic ferry ride from Langkawi to <b>Penang</b> ,  the cultural capital of Malaysia. Once you land, take a taxi to your hotel in <b> George Town</b>, a UNESCO World Heritage Site known for its historic architecture and vibrant multicultural vibe. After check-in, spend your afternoon exploring the <b>UNESCO Heritage Zone</b>, where colonial buildings, temples, and mosques blend seamlessly.
        <br>
        <br>
         Wander through <b>Armenian Street </b> and discover <b>Penang’s famous street art</b> —quirky murals and 3D installations that narrate local stories and folklore. Don’t miss iconic spots like the <b>“Kids on Bicycle”</b> mural or <b>“Boy on Chair.”</b>. Then, visit the <b>Cheong Fatt Tze Mansion</b>, also known as the Blue Mansion, for a glimpse into the lavish lifestyle of a 19th-century Chinese tycoon. Continue to <b>Chew and Tan Jetty</b>, traditional Chinese clan settlements built on stilts over the sea, offering a unique look at Penang’s living heritage.
        <br>
        <br>
         As night falls, dive into Penang’s legendary food scene. Head to the <b>local night markets</b>, where you can feast on hawker favorites such as Char Kway Teow, Penang Laksa, and Satay. The atmosphere buzzes with locals and travelers alike enjoying the warm night air and aromatic flavors.
        `,
      },
    ],
  },
  {
    heading: "Day 5: Temples, Hills & Penang’s Culinary Delights",
    sections: [
      {
        type: "content",
        text: `Kick off Day 5 in Penang with a visit to one of the island’s most revered landmarks—<b>Kek Lok Si Temple</b>, located in Air Itam. This sprawling hilltop Buddhist temple complex is the largest in southeast asia and is adorned with intricate carvings, colorful sculptures, and stunning pagodas. Don’t miss the massive statue of the Goddess of Mercy (Kuan Yin), which overlooks the temple grounds. Though it is a bit too commercialised.
        <br>
        <br>
        By early afternoon, head to <b>Penang Hill</b>, accessible via a funicular train that climbs up through lush tropical forests. At the summit, enjoy a refreshing breeze and sweeping views over George Town and the coastline. Spend time exploring <b>The Habitat</b>, a well-preserved rainforest park featuring canopy walks, nature trails, and exotic flora and fauna. It’s a wonderful contrast to the urban energy below and offers a deeper appreciation for Penang’s natural beauty.
        <br>
        <br>
        As dusk settles in, make your way toward <b>Gurney Drive</b>, a seafront promenade renowned for its lively <b>hawker food scene</b>. This is one of the best places to sample Penang’s legendary street food—try favorites like Penang laksa, rojak, grilled seafood, and more. The bustling atmosphere, combined with the sea breeze and flavorsome dishes, makes for a perfect evening. Wrap up your day with a leisurely stroll along the promenade or relax at a seaside café. Today perfectly balances heritage, nature, and culinary adventure, showcasing why Penang is such a beloved destination in Malaysia.
        `,
      },
    ],
  },
  {
    heading: "Day 6: Discover Nature, History & Coastal Vibes in Penang",
    sections: [
      {
        type: "content",
        text: `

        Begin Day with a journey into Penang’s natural world at <b>Entopia: Penang Butterfly Farm</b>, located in Teluk Bahang. This award-winning eco-park is home to thousands of free-flying butterflies, insects, and reptiles, all set in lush tropical gardens and interactive exhibits. It’s an educational and family-friendly attraction that brings you closer to nature while offering vibrant photo opportunities. The calm atmosphere and rich biodiversity make it a refreshing way to start the day.
        <br>
        <br>
        In the afternoon, choose between two historically rich experiences. Visit the <b>Penang State Museum</b>, which delves into the island’s diverse cultural heritage, or opt for the <b>Penang War Museum</b> in Batu Maung. Set within a former British military fortress, the War Museum offers a hauntingly immersive look at World War II history, complete with tunnels and bunkers.
        <br>
        <br>
        Later in the day, wind descended at <b>Batu Ferringhi Beach</b>, one of Penang’s most popular coastal retreats. Whether you prefer lounging on the sand, trying water sports, or strolling along the shoreline, this beach offers the ideal mix of relaxation and activity. Alternatively, head back into George Town and visit <b>Komtar Tower</b>, the tallest building in Penang. The Rainbow Skywalk on the rooftop offers thrilling panoramic views from a glass walkway, perfect for sunset watching.
        <br>
        <br>
        In the evening, grab a bite from a night market or enjoy a laid-back dinner near the beach. Afterward, board your <b>overnight bus to Kuala Besut</b>, preparing for the tropical adventures awaiting on the east coast.
        `,
      },
    ],
  },
  {
    heading: "Day 7: Arrival in Paradise – Welcome to the Perhentian Islands",
    sections: [
      {
        type: "content",
        text: `
        After an overnight journey, you’ll arrive early at <b>Kuala Besut Jetty</b>, the gateway to the pristine <b>Perhentian Islands</b>. Catch a morning ferry to either Perhentian Besar (Big Island) or Perhentian Kecil (Small Island), both offering turquoise waters, white sandy beaches, and a relaxed island vibe. As the boat approaches the islands, you’ll be greeted with scenes of lush greenery and crystal-clear sea—pure tropical bliss.
        <br>
        <br>
       <b>Quick tip</b> - book a stay in well advance, check out our full Perhentian travel guide
        <br>
        <br>
        Upon arrival, most resorts allow early baggage storage even before official check-in (usually around 2 PM), so take advantage of the time to grab breakfast at a beachside café and unwind by the sea. Whether you choose to nap in a hammock, explore the beach, or dip your toes in the warm water, this is the perfect opportunity to slow down and soak in your surroundings after several days of sightseeing.
        <br>
        <br>
        In the evening, once you've checked in and freshened up, consider heading to <b> Long Beach on Perhentian Kecil</b>, known for its lively atmosphere, beach bars, and fire shows. If you’re staying on the quieter Perhentian Besar, enjoy a romantic dinner by the sea under swaying palms and starry skies. Whether you're a solo traveler, a couple, or with friends, the island’s relaxed pace and natural beauty offer the perfect escape. Let the sound of waves be your lullaby as you ease into island life.
        `,
      },
    ],
  },
  {
    heading:
      "Day 8: Snorkeling Adventures & Scenic Hikes on the Perhentian Islands",
    sections: [
      {
        type: "content",
        text: `
        Begin your second day in the Perhentians with one of the most iconic island experiences— <b>snorkeling in crystal-clear waters</b> teeming with marine life. Join a guided 3 hour snorkeling trip that takes you to top spots like <b>Shark Point, Turtle Bay</b>, and the vibrant <b>Coral Garden</b>. Swim alongside reef sharks, sea turtles, and a rainbow of tropical fish in calm, warm waters that make snorkeling accessible even for beginners. Underwater visibility here is excellent, so don’t forget your action camera or waterproof phone case.
        <br>
        <br>
        After your marine adventure, return to your resort for lunch and a bit of rest. In the afternoon, set out on a <b>hike to the Windmill viewpoint on Perhentian Kecil</b>, one of the island’s most breathtaking lookouts. The hike itself winds through jungle trails, offering glimpses of wildlife and shaded paths. At the summit, you’ll be rewarded with panoramic views of the sea and surrounding coastline, perfect for an unforgettable photo session.
        <br>
        <br>
        As the sun dips, head down to a secluded stretch of beach for a peaceful swim or to simply enjoy the golden hour in tranquility. For dinner and evening fun,<b>return to Long Beach</b>, where the party scene comes alive with beachside bonfires, music, and fire-dancing shows. If you prefer a quieter night, opt for a relaxed dinner under the stars at your resort. Whether you’re seeking adventure or serenity, today perfectly captures the spirit of island life in the Perhentians.
        `,
      },
    ],
  },
  {
    heading: "Day 9: Scuba Diving, Island Hopping & Sunset Bliss",
    sections: [
      {
        type: "content",
        text: `Today is all about discovering the Perhentian Islands’ magic both above and below the surface. If you’re a certified diver or even a beginner looking to try, it’s the perfect opportunity to go <b>scuba diving</b> in one of Southeast Asia’s most beautiful underwater locations. Join a local dive center for a morning dive session and explore colorful coral reefs, fascinating shipwrecks, and encounters with turtles, reef sharks, and schools of tropical fish. The underwater world here is remarkably intact and peaceful, making it a diver’s paradise.
        <br>
        <br>
        After your diving adventure, recharge with a delicious local lunch and prepare for an exciting <b>island-hopping tour</b> in the afternoon. Board a speedboat and cruise to nearby uninhabited islets and secluded beaches. Explore <b>Romantic Beach, D’Lagoon</b>, or even the remote <b>Rawa Island</b>, each with its own charm. Many tours also include stops for snorkeling and photography, so keep your camera ready.
        <br>
        <br>
        As the day winds down, find your way to the tranquil <b>Adam and Eve Beach</b>, a hidden gem perfect for a quiet sunset experience. With fewer crowds and crystal-clear water, it’s the ideal place to reflect on the day’s adventures.
        <br>
        <br>
        In the evening, return to your resort and enjoy a relaxed beachside dinner. If you're up for more, stroll along the moonlit beach. It’s a day that blends thrill, beauty, and peace, exactly what the Perhentians are known for.
`,
      },
    ],
  },
  {
    heading: "Day 10: Explore Culture in Kuala Terengganu",
    sections: [
      {
        type: "content",
        text: `
          After enjoying the island serenity, it’s time to transition from tropical bliss to cultural exploration. Begin the morning early with a <b>ferry ride from the Perhentian Islands to Kuala Besut</b>, followed by a scenic bus or private transfer to <b>Kuala Terengganu</b, the vibrant capital of Terengganu state on Malaysia’s east coast. The journey offers glimpses of lush countryside and coastal towns before you arrive in the city. Upon check-in at your hotel, take some time to relax after your transfer and refresh for an afternoon of sightseeing.
          <br>
          <br>
          In the evening, dive into the cultural heart of Kuala Terengganu. Start your exploration with the <b>Crystal Mosque</b>, an architectural marvel located on the island of Wan Man. Built with glass and steel, it looks stunning during sunset when it reflects the soft evening light. From there, stroll along the <b>Kuala Terengganu Drawbridge</b>, one of Malaysia’s few modern bascule bridges offering views of the river and skyline. It’s a great spot for photos and a peaceful walk.
          <br>
          <br>
          Conclude your day at <b>Pasar Payang (Central Market)</b>, a bustling hub filled with traditional textiles, handicrafts, and local snacks. It’s a great place to pick up unique souvenirs and experience local flavors. Enjoy a traditional Terengganu dinner at a nearby riverside eatery and soak in the calm vibes of this culturally rich city. After island adventures, today offers the perfect mix of architecture, heritage, and coastal charm.
           <br>
           <br>
          <b>Alternate: Final Island Bliss & Overnight Transfer to Kuala Lumpur</b>
          <br>
          <br>
          Savor your final day in paradise by taking it slow and enjoying a <b>laid-back morning on the Perhentian Islands</b>. This is your time to unwind—go for one last swim in the turquoise waters, lounge on the white-sand beaches, or read a book under the shade of swaying palms. After lunch, take time to pack and freshen up. Most resorts offer changing and luggage storage facilities even after check-out, so you can enjoy the island until the <b>late afternoon ferry</b> departs. Around <b>4 PM</b>, head to the jetty and board your ferry back to <b>Kuala Besut</b>, soaking in the final views of this tropical escape.
          <br>
          <br>
          Upon arriving at Kuala Besut in the evening, make your way to the nearby bus terminal for an <b>overnight bus to Kuala Lumpur</b>. The journey is long but convenient, allowing you to rest as you travel back to the city.
        `,
      },
    ],
  },
  {
    heading:
      "Day 11: Arrival in Kuala Lumpur – Petronas Twin Towers & City Vibes",
    sections: [
      {
        type: "content",
        text: `
        After you arrive in bustling Kuala Lumpur, Malaysia’s vibrant capital full of cultural, culinary, and modern attractions, head to your hotel located in the city center, easily accessible by the efficient <b>metro (LRT/MRT)</b> or a comfortable taxi ride. Once checked in, take some time to unwind and recharge at your hotel — perhaps enjoy a refreshing dip in the <b>infinity pool</b> if available, perfect for relaxing after your travels.
        <br>
        <br>
        Quick tip - book a stay around Bukit Bintang area, check out our full kuala lumpur guide
        <br>
        <br>
        As the afternoon fades into evening, prepare to explore one of KL’s most iconic landmarks: the <b>Petronas Twin Towers</b>. These majestic skyscrapers dominate the city skyline and offer visitors a chance to visit the <b>Skybridge and observation deck</b> for panoramic views of Kuala Lumpur’s urban sprawl and surrounding hills. As night falls, witness the spectacular <b>KLCC Lake Symphony Night Fountain Show</b>— a mesmerizing water, light, and music performance that delights visitors nightly. Check out the Fountain show timings in our top things to do Kuala Lumpur article.
        <br>
        <br>
        For dinner, head to the <b>Suria KLCC food court</b> located at the base of the towers. Here, you can savor a variety of Malaysian dishes, from spicy nasi lemak to savory satay, all within a lively, convenient setting.


        `,
      },
    ],
  },
  {
    heading: "Day 12: Explore Kuala Lumpur – Culture, Nature, and Nightlife",
    sections: [
      {
        type: "content",
        text: `
        Begin your day with a visit to the iconic <b>Batu Caves</b>, just 20–30 minutes from the city center. Besides the towering golden statue and the main Temple Cave reached by 272 colorful steps, be sure to explore the <b>Dark Caves</b>, a guided tour through a limestone cave system home to rare cave fauna and impressive rock formations. For a cultural touch, visit the <b>Ramayana Cave,</b> which beautifully depicts scenes from the ancient Hindu epic through detailed statues and murals — a peaceful and fascinating spot at the base of Batu Caves.
        <br>
        <br>
        Return to Kuala Lumpur’s heart and dive into the bustling <b>Central Market</b> and <b>Petaling Street</b> in Chinatown. Central Market offers local handicrafts and souvenirs, while Petaling Street buzzes with food stalls serving authentic Malaysian street food, perfect for a delicious lunch.
        <br>
        <br>
        In the afternoon, reconnect with nature at the <b>KL Forest Eco Park</b>, a tropical rainforest in the city featuring canopy walks and rich biodiversity. Then head to <b>Menara KL Tower</b> for panoramic views from the observation deck, ideal for catching a stunning sunset over the city.
        <br>
        <br>
        As evening falls, explore <b>Jalan Alor Night Food Street</b>, famous for its vibrant street food scene with dishes like satay, char kway teow, and grilled seafood <b>(checkout our complete food guide)</b>. Cap off your day in the lively <b>Bukit Bintang</b> district, enjoying the nightlife and entertainment around <b>Changkat Avenue</b>.
        <br>
        <br>
        This day blends cultural heritage, natural beauty, and vibrant city life, showcasing the best of Kuala Lumpur

        `,
      },
    ],
  },
  {
    heading:
      "Day 13: Day Trip to Cameron Highlands – Refreshing Highlands and Nature Escape",
    sections: [
      {
        type: "content",
        text: `
        For a peaceful escape from Kuala Lumpur, take a day trip to <b>Cameron Highlands</b>, a cool hill station about 3 to 4 hours away. Known for its lush tea plantations and rolling hills, it’s ideal for nature lovers seeking relaxation. Start with a visit to the famous <b>Boh Tea Plantation</b>, where you can enjoy panoramic views and sample fresh tea and cakes.
        <br>
        <br>
        Explore the vibrant <b>Cameron Market</b> to find fresh local produce, then wander through the mystical <b>Mossy Forest</b> with its fog-covered trees and rare plants. If time permits, stop by a <b>Strawberry Farm</b> to pick fresh strawberries or sip on strawberry juice. After soaking in the cool climate and scenic beauty, return to Kuala Lumpur feeling refreshed and rejuvenated.
        `,
      },
    ],
  },
  {
    heading: "Day 14: More of Kuala Lumpur – Culture, Heritage, and Nightlife",
    sections: [
      {
        type: "content",
        text: `
        Take a more relaxed day exploring some of Kuala Lumpur’s cultural and historical gems. Start your morning by unwinding at your hotel or choose to visit the fascinating <b>Islamic Arts Museum Malaysia</b>, one of the world’s top museums dedicated to Islamic decorative arts. The impressive collection of textiles, ceramics, jewelry, and calligraphy offers deep insight into Islamic culture and history.
        <br>
        <br>
        Next, visit the nearby <b>National Mosque (Masjid Negara)</b>, an architectural marvel known for its stunning modern design and tranquil surroundings. It’s a peaceful spot to experience Malaysia’s religious diversity.
        <br>
        <br>
        For lunch, head to <b>Thean Hou Temple</b>, one of the oldest and largest Chinese temples in Southeast Asia. Admire its ornate decorations and panoramic views over the city. Nearby, explore Little India, a vibrant neighborhood filled with colorful shops, fragrant spices, and authentic Indian eateries—perfect for a flavorful lunch experience.
        <br>
        <br>
        In the afternoon, stroll through <b>Merdeka Square</b>, where Malaysia declared its independence, and admire colonial landmarks like the <b>Sultan Abdul Samad Building</b>. Follow this with a walk along the <b>River of Life</b>, a beautifully revitalized waterfront area featuring stunning light displays and modern urban design.
        <br>
        As evening falls, experience Kuala Lumpur’s trendy nightlife by visiting <b>TREC KL</b>, a bustling entertainment hub with bars, clubs, and live music. Alternatively, explore the upscale <b>Pavilion Mall</b> area, perfect for shopping or enjoying a sophisticated dinner.
        `,
      },
    ],
  },
  {
    heading:
      "Day 15: Day Trip to Malacca – Historic Charm and Cultural Treasures",
    sections: [
      {
        type: "content",
        text: `
        Embark on a memorable day trip from Kuala Lumpur to the historic city of <b>Malacca (Melaka)</b>, just about a two-hour bus ride from the <b>TBS Bus Terminal</b>. This UNESCO World Heritage Site is famous for its rich blend of colonial architecture, multicultural heritage, and vibrant street life.
        <br>
        <br>
        Start your exploration at <b>Dutch Square</b>, also known as Red Square, where you’ll find iconic landmarks like the  <b>Christ Church</b> and the <b>Stadthuys</b>, the oldest Dutch building in the region. The colonial buildings’ striking red facades and charming streets offer fantastic photo opportunities and a glimpse into Malacca’s past.
        <br>
        <br>
        Next, visit <b>St. Paul’s Hill,</b>, where the ruins of the old church offer panoramic views of the city and the Malacca Strait. Nearby is the <b>A Famosa Fort</b>, a historic Portuguese fortress dating back to the 16th century, symbolizing the city’s colonial legacy.
        <br>
        <br>
        Take time to wander through <b>Jonker Street</b>, the heart of Malacca’s Chinatown, known for its bustling shops, unique antiques, and vibrant food stalls offering local delicacies. Don’t miss a relaxing <b>Malacca River Cruise</b>, a scenic boat ride along the river lined with colorful murals and historic buildings, perfect for soaking in the city’s atmosphere from a different perspective.
        <br>
        In the evening, catch a bus back to Kuala Lumpur, enriched with cultural insights and memories of Malacca’s timeless charm.

        `,
      },
    ],
  },
  {
    heading: `Day 16: Departure from Malaysia – Last Moments and Farewell`,
    sections: [
      {
        type: "content",
        text: `
        On your final day in Malaysia, take some time to enjoy a relaxed morning at your hotel, soaking in any last views or simply unwinding before your journey. If you haven’t already, this is a great moment to pick up any last-minute souvenirs and gifts at the airport shops, Malaysian crafts, local snacks, and unique keepsakes make perfect reminders of your trip.
        <br>
        <br>
        Ensure you have ample time to check out and head to Kuala Lumpur International Airport (KLIA/KLIA2) for your departure flight. Depending on your flight schedule, consider arriving early to enjoy the airport’s facilities, which often include comfortable lounges, dining options, and shops.
        <br>
        <br>
        Reflect on the diverse experiences of your Malaysian adventure, from tropical islands and highland retreats to vibrant city life and cultural landmarks. Whether this is the end of your journey or the start of another destination, Malaysia’s warm hospitality and rich heritage will surely leave a lasting impression.
        <br>
        <br>
        Safe travels and until next time—Malaysia awaits your return!
        `,
      },
    ],
  },
];

export const MALAYSIA_TOP_THINGS_TO_DO = {
  title: "Malaysia Top Things to Do",
  image: "/images/country/malaysia/top_things_do_malaysia.jpg",
  data: [
    {
      id: 1,
      title: "Langkawi Cable Car & Sky Bridge (SkyCab)",
      description:
        "The Langkawi Cable Car, also known as SkyCab, is one of the most thrilling experiences on the island. Taking you from the Oriental Village up to Gunung Mat Cincang, it offers panoramic views of Langkawi's rainforest, mountains, and turquoise seas. The 15-minute ride is also one of the world's steepest cable car gradients, at 42 degrees just before the middle station. At the top level located the stunning curved suspension Langkawi Sky Bridge located 660 meters above sea level, offering awe-inspiring views of the rainforest and surrounding islands.It's ideal for those looking to combine adventure with scenic photography. From the top station there is an option to either take a nature walk(10-15 mins) or SkyGlide(Sort of an Elevator) to reach the Sky Bridge. ",
      operationalHours: "9:30 AM – 6:00 PM (Daily)",
      location: "Oriental Village, Burau Bay, Langkawi",
      price:
        "SkyCab: </br><li>RM43 (Adult, Malaysian)</li> <li>RM85 (Adult, Foreigner)</li>SkyBridge entry is free </br>Nature Walk - RM6 </br>SkyGlide - RM 10 ",
      duration: "3 hours",
      tips: [
        "Combo Tickets include the entry to 3D Art Museum and SkyDom",
        "Books the ticket offline at the counter only cause of unpredictable weather",
        "Checkout the Eagle's Nest Skywalk at a middle station",
        "Nature walk is a short hike but a steep one so brace yourself",
      ],
      image:
        "/images/country/malaysia/places/langkawi/blog/langkawi_cablecar.jpg",
      imageCreditHTML:
        '<a target="_blank" href="https://commons.wikimedia.org/wiki/File:Langkawi_Cable_Car.JPG"><u>RoB</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/3.0"><u>CC BY-SA 3.0</u></a>, via Wikimedia Commons',
    },
    {
      id: 2,
      title: "Sunset at KL Tower",
      description:
        "The KL Tower is one of Malaysia’s most iconic landmarks, standing at 421 meters tall and offering breathtaking 360-degree views of Kuala Lumpur. Built primarily as a telecommunications tower, it also functions as a top tourist attraction with an observation deck, sky deck, revolving restaurant, and thrilling experiences like the glass sky box and skywalk . Nestled atop Bukit Nanas, it combines panoramic city views with a slice of rainforest below.",
      operationalHours: "9 AM-10 PM(9:30 PM Last Entry)",
      location: "Bukit Nanas, Kuala Lumpur",
      price:
        "Sky Terrace - 140RM</br> Observation Deck - 100RM</br> Combo(Terrace + Deck) - 180 RM</br> SkyBox - 10RM",
      duration: "2 Hours",
      tips: [
        "Visit an hour early to sunset to watch the evening and night view of city",
        "Sky Box tickets will be bought at Sky terrace only, the queue can be long for SKy Box so prepare accordingly",
        "Don’t book in advance as permission to sky terrace depends on weather",
        `Checkout the Discounted price for MyKLD holders & kids on the
        <a href="https://ticket.kltower.com/" target="_blank" class="text-teal-600 underline">official website</a>`,
      ],
      image: "/images/country/malaysia/places/kuala_lumpur/blog/kl_tower.jpg",
      imageCreditHTML: null,
    },
    {
      id: 3,
      title: "Batu Caves",
      description:
        "Batu Caves is one of Malaysia’s most iconic spiritual landmarks, located just north of Kuala Lumpur. This massive limestone hill houses a series of caves and cave temples, the most famous being the Temple Cave, accessed by climbing 272 vibrant steps. Dominated by a towering golden statue of Lord Murugan, it’s a major site for Hindu worship and the focal point of the annual Thaipusam festival. In addition to religious significance, the site is also rich in natural wonder. You can explore the Dark Cave (for guided eco-tours) or the colorful Cave Villa, filled with murals and statues. Batu Caves is free to enter, though some attractions charge a fee.",
      operationalHours: "6:00 AM – 9:00 PM",
      location: "Gombak, Selangor</br>(30 mins ride from city centre)",
      price:
        "Batu Caves - Free</br>Dark Caves & Cave villa <li>RM15-RM20 per adult</li>",
      duration: "2-3 hours",
      tips: [
        "Book lessons with certified instructors",
        "Early morning has the best waves",
        "Apply reef-safe sunscreen",
      ],
      image: "/images/country/malaysia/places/kuala_lumpur/blog/batu_caves.jpg",
      imageCreditHTML: null,
    },
    {
      id: 4,
      title: "Scuba at Sipadan Island",
      description:
        `Sipadan Island is often hailed as not only Malaysia’s but one of the world’s best dive sites, thanks to its dramatic wall dives and extraordinary marine biodiversity. Surrounded by deep waters, it's home to large schools of barracudas, reef sharks, sea turtles, and countless tropical fish. The island's reefs drop steeply into the abyss, making it ideal for drift and deep dives. With strict conservation rules, only 176 divers are allowed per day, ensuring a pristine underwater environment. Strong currents, deep walls, and pelagic sightings make it ideal for certified(mandatory to hold a diver certificate) and confident divers.  <b>Check our complate guide <a href="/malaysia/best-places-for-scuba" target="_blank" class="text-teal-600 underline">best places for scuba</a>.</b>`,
      operationalHours: "7:00 AM – 4:00 PM",
      location: "Sipadan Island",
      price: "Depends on Diving Packages",
      duration: "2-3 hours",
      tips: [
        "Dive between April to December, Peak diving conditions occur between July and August when visibility is at its highest",
        "Need to book Diving packages which often include accommodation, meals, equipment rental, and boat transfers",
        "Book in advance as diving is regulated with limited daily permits, making it both exclusive and relatively expensive",
      ],
      image:
        "/images/country/malaysia/places/sipadan_islands_places_to_visit.jpg",
      imageCreditHTML: null,
    },
    {
      id: 5,
      title: "Penang Hill & The Habitat",
      description:
        "Penang Hill, or Bukit Bendera, offers a cool, scenic retreat from George Town’s tropical heat. Located 833 meters above sea level, it's famous for its panoramic views, lush greenery, colonial-era bungalows, and a refreshing climate. Visitors typically ascend via the iconic funicular railway, one of the oldest in the world. Nestled within the pristine rainforest atop Penang Hill, The Habitat is an eco-conscious attraction offering immersive experiences in biodiversity and conservation. It features scenic nature trails, themed gardens, and the famed Curtis Crest Tree Top Walk, the highest public viewing point on the island. Penang Hill is ideal for families, nature lovers, and couples seeking a peaceful escape with photo-worthy views of the island and mainland.",
      operationalHours: "6:30 AM – 11:00 PM (Daily)",
      location: "Air Itam, Penang",
      price:
        "Funicular Train (Round Trip): <li>RM12–RM30 (Standard)</li> <li>RM 40–RM80 (Fast Lane)</li> The Habitat - RM 40-60",
      duration: "3-4 hours",
      tips: [
        "Bring a light jacket—it can get cool at the top",
        "Visit early morning for fewer crowds or late evening for sunset viewss",
      ],
      image: "/images/country/malaysia/places/penang/blog/penang_hill.jpeg",
      imageCreditHTML: null,
    },
    {
      id: 6,
      title: "Petronas Twin Towers",
      description:
        "The Petronas Twin Towers are the crown jewel of Kuala Lumpur’s skyline and were once the tallest buildings in the world. Standing 452 meters tall with 88 floors, they are connected by a unique Skybridge at the 41st and 42nd floors. Visitors can tour both the Skybridge and the Observation Deck on the 86th floor for incredible 360° views of the city. The towers are surrounded by the lush KLCC Park and are attached to the luxury Suria KLCC Mall, making this a complete urban experience. Stunning by day and mesmerizing when lit up at night, the towers are a must-visit landmark.",
      operationalHours: "9:00 AM – 9:00 PM (Closed Mondays)",
      location: "City Centre, Kuala Lumpur",
      price:
        "SkyBridge & Obersvational Deck - <li>Adults: RM 80</li>  <li>Children: RM 33</li>",
      duration: "1-2 hours",
      tips: [
        "Book Tickets Online",
        "Combine with KLCC Park and Night Fountains",
      ],
      image:
        "/images/country/malaysia/places/kuala_lumpur/blog/petronas_tower.jpg",
      imageCreditHTML: null,
    },
    {
      id: 7,
      title: "Street Arts of Penang & Melaka",
      description: `Malaysia’s vibrant street art scene is best experienced in the heritage cities of George Town (Penang) and Melaka, where crumbling walls become canvases for creativity. In Penang, world-renowned murals like "Children on a Bicycle" by Ernest Zacharevic have turned alleyways into open-air galleries. The artwork blends humor, nostalgia, and daily life, often incorporating real objects like swings and bicycles. Meanwhile, Melaka's Jonker Street and riverside are adorned with bold, colorful graffiti and cultural motifs depicting local heritage, folklore, and modern messages. Both cities celebrate art as a living part of their identity, making a street art walk an unmissable experience for culture lovers and Instagrammers alike.`,
      operationalHours: "Open 24/7 (outdoor public areas)",
      location:
        "<li>George Town (Penang Island)</li><li> Melaka City Centre</li>",
      price: "Free",
      duration: "2-3 hours",
      tips: [
        "Best explored on foot or by bicycle",
        "Start early or go late in the afternoon to beat the heat",
      ],
      image: "/images/country/malaysia/places/penang/blog/street_art.jpg",
      imageCreditHTML: null,
    },
    {
      id: 8,
      title: "Penang Jetties",
      description: `The Clan Jetties of Penang are a unique cultural and historical attraction located along the waterfront of George Town, offering a glimpse into the island’s Chinese heritage. Dating back to the 19th century, these wooden jetties were established by Chinese immigrant clans, each building its own jetty over the water as a community village. The most famous is Chew Jetty, where visitors can walk along wooden walkways lined with stilt houses, small shrines, and souvenir stalls. Unlike the more touristy Chew Jetty, Tan Jetty is quieter, making it ideal for travelers seeking a serene atmosphere and stunning photo opportunities. The jetties offer stunning views of the waterfront and are best visited around sunrise or sunset.`,
      operationalHours: "Open 24/7",
      location: "Weld Quay, George Town, Penang",
      price: "Free",
      duration: "1-2 hours",
      image: "/images/country/malaysia/places/penang/blog/clan_jetty.jpg",
      imageCreditHTML: null,
    },
    {
      id: 9,
      title: "Chinatown (Petaling Street)",
      description: `Chinatown, centered on Petaling Street, is a vibrant district bursting with color, culture, and commerce. It’s famous for bargain shopping, Chinese temples, and street food. Here you’ll find knock-off goods, herbal medicine shops, and stalls selling everything from souvenirs to clothes. Street food is a major draw – try roasted duck, wantan mee, and traditional Chinese pastries. Chinatown offers a lively contrast to KL’s glitzy malls.`,
      operationalHours: "10:00 AM – late nigh",
      location: "Petaling Street, near Pasar Seni MRT",
      tips: [
        "Bargain when shopping",
        "Hold your bag tight as it can get crowded at peak hours",
      ],
      image: "/images/country/malaysia/places/kuala_lumpur/blog/chinatown.jpg",
      imageCreditHTML: null,
    },
    {
      id: 10,
      title: "Little India (Brickfields)",
      description: `Little India, located in the Brickfields neighborhood, is a vibrant district rich in Indian culture, color, and cuisine. With music playing from shopfronts, streets adorned with floral garlands, and the scent of spices in the air, this area offers an immersive cultural experience. Visitors can shop for traditional clothing, jewelry, and souvenirs, or enjoy South Indian meals served on banana leaves. Must-try dishes include dosas, biryani, and sweet treats like laddu. The area also features temples, colonial buildings, and street art.`,
      operationalHours:
        "Open daily</br> Shops operates from 10:00 AM – 9:00 PM",
      location: "Brickfields",
      image:
        "/images/country/malaysia/places/kuala_lumpur/blog/little_india.jpg",
      imageCreditHTML: null,
    },
    {
      id: 11,
      title: "Island Hopping at Perhentian",
      description: `Island hopping is one of the top things to do in the Perhentian Islands. A typical tour includes stops at Turtle Beach, Shark Point, and Romantic Beach. You’ll visit hidden coves, and experience the natural beauty of both Perhentian Kecil and Besar. Head to Adam & Eve Beach, it is one of the most secluded spots in Perhentian Kecil. It's the perfect place to watch a quiet, romantic sunset surrounded by jungle and sea. The beach is less crowded and best reached by foot through a scenic forest trail or a short boat ride.`,
      operationalHours: "7 AM - 6 PM",
      location: "Perhentian Islands",
      price: "RM40–RM70 ",
      duration: "Half day",
      tips: [
        `Visit our detailed <a href="/malaysia/perhentian-islands/top-things-to-do" target="_blank" class="text-teal-600 underline">Perhentian Island travel guide</a> and things to do`,
      ],
      image: "/images/country/malaysia/places/perhentian/perhentian_banner.jpg",
      imageCreditHTML: null,
    },
    {
      id: 12,
      title: "Hawker Stalls at Gurney Drive",
      description: `Gurney Drive is Penang’s most iconic seafront promenade, renowned for its vibrant evening hawker scene. As the sun sets, Gurney Drive Hawker Centre comes alive with the aroma of sizzling woks and spicy broths. This open-air food haven offers authentic Penang street food at budget-friendly prices. Try Char Kway Teow, Penang Laksa, grilled seafood, and local desserts. It's a must-visit for food lovers looking to experience the heart of Penang’s culinary culture.`,
      operationalHours: "5:00 PM – 11:00 PM",
      location: "Gurney Drive, George Town",
      price: "Dishes range from RM5–RM15 ",
      duration: "2 hours day",
      tips: [
        `Arrive early to grab a table`,
        "Carry cash, Share plates to taste more dishes",
      ],
    },
    {
      id: 13,
      title: "Red Square, Melaka",
      description: `The iconic Red Square, also known as Dutch Square, is the historic heart of Melaka City and one of Malaysia’s most photographed landmarks. Instantly recognizable by its vivid crimson buildings and colonial Dutch architecture, the square reflects Melaka’s rich colonial past under Portuguese, Dutch, and British rule. Key attractions around the square include the Christ Church (built in 1753), The Stadthuys (once the governor's residence, now a museum), and the Queen Victoria Fountain. The area buzzes with activity—trishaws decked in neon lights and music offer tours, while souvenir shops and local vendors line the streets. With its vibrant colors, historic charm, and easy walkability, Red Square is a perfect introduction to Melaka’s UNESCO-listed heritage.`,
      operationalHours: "Open 24/7 </br>Museums: 9:00 AM – 5:30 PM",
      location: "Bandar Hilir, Melaka City",
      price: "Free(Museum entry~MYR 10)",
      duration: "1-2 hours",
      tips: [
        `Great for photography, look for reflections in the fountain area`,
        "Combine with a walk up to St. Paul’s Hill for panoramic views",
      ],
      image: "/images/country/malaysia/places/melaka/red_square.jpg",
      imageCreditHTML:
        "Photo by <a target='_blank' href='https://www.pexels.com/photo/historic-christ-church-melaka-on-a-sunny-day-29238004/'><u>Ihsan Adityawarman</u></a>",
    },
    {
      id: 14,
      title: "Explore Food at Jalan Alor Street",
      description: `Jalan Alor is Kuala Lumpur’s legendary food street, renowned for its buzzing nightlife and mouth watering street food. Located in the heart of Bukit Bintang, this street transforms into a culinary haven as the sun sets. The aroma of grilled satay, spicy noodles, fresh seafood, and exotic fruits fills the air while locals and tourists gather at open-air tables. It’s the best place to sample authentic Malaysian flavors, as well as Chinese, Thai, and even fusion dishes. From budget-friendly snacks to full meals, Jalan Alor offers a true taste of KL’s food culture.`,
      operationalHours: "5:00 PM – Late midnight",
      location: "Bandar Hilir, Melaka City",
      price: "Dishes range from RM10–RM30",
      duration: "2 hours",
      tips: [
        `Try satay, Marshmallow IceCream and char kway teow`,
        `Checkout our detailed article on <a href="/malaysia/what-to-eat" target="_blank" class="text-teal-600 underline">what to eat</a> in malaysia`,
      ],
    },
    {
      id: 15,
      title: "Snorkeling",
      description: `Malaysia is a top destination for snorkeling enthusiasts, offering crystal-clear waters, vibrant coral reefs, and an abundance of marine life across both the Peninsular and Bornean coasts. Islands like Perhentian, Redang, Tioman, and Sipadan provide easy access to shallow reefs where you can spot clownfish, parrotfish, sea turtles, and even reef sharks. The best time for snorkeling on the east coast (Perhentian, Redang, Tioman) is March to October, when visibility is at its peak. Whether you're a beginner or an experienced snorkeler, Malaysia offers world-class underwater experiences that are both accessible and affordable.`,
      operationalHours: "Daily(7 AM - 4PM)",
      location: "Perhentian Islands, Redang, Tioman, Sipadan, Mataking",
      price:
        "MYR 30–100 for half-day tours </br>MYR 120–250 for full-day trips",
      duration: "2-4 hours per session",
      tips: [
        `Book early during peak seasons`,
        `Checkout our complete <a href="/malaysia/scuba-diving" target="_blank" class="text-teal-600 underline">Malaysia diving guide</a>`,
      ],
      image: "/images/country/malaysia/places/perhentian/blog/snorkeling.jpg",
      imageCreditHTML: null,
    },
    {
      id: 16,
      title: "Mangrove Tour (Kilim Geoforest Park)",
      description: `Kilim Geoforest Park is a UNESCO-recognized mangrove forest with stunning limestone formations, caves, and diverse wildlife. Mangrove boat tours take visitors through narrow waterways where you can spot eagles, monkeys, and exotic birds. The park also features bat caves and floating fish farms. This ecotourism experience highlights the importance of mangroves in protecting the coastline and sustaining local fisheries. It’s both educational and breathtakingly beautiful.`,
      operationalHours: "Tours available 9:00 AM – 5:00 PM",
      location: "Hotel Pickup",
      price: "RM80–RM150",
      duration: "Half Day",
      image: "/images/country/malaysia/places/langkawi/blog/mangrove.jpg",
      imageCreditHTML: null,
    },
    {
      id: 17,
      title: "Langkawi Night Markets",
      description: `Langkawi’s night markets offer an authentic taste of local life with bustling stalls selling delicious street food, fresh produce, clothing, and handicrafts. These markets rotate locations nightly in different towns like Kuah, Pantai Cenang, and Temoyong, providing a vibrant atmosphere to explore. Checkout the Night markets schedules here on our Langkawi travel guide. Sample local favorites such as satay, laksa, grilled seafood, kuih (traditional sweets) and many more. It’s an ideal way to immerse yourself in Malaysian culture, meet locals, and find souvenirs.`,
      operationalHours:
        "Generally 5:00 PM – 11:00 PM </br>(varies by location and day)",
      location: `Rotating locations, check daily schedule on our <a href="/malaysia/langkawi/travel-guide" target="_blank" class="text-teal-600 underline">Langkawi complete guide</a>`,
      price: "Dishes range from RM2–RM10",
      duration: "2 Hours",
      image: "/images/country/malaysia/places/langkawi/blog/nightmarket.jpg",
      imageCreditHTML: null,
    },
    {
      id: 18,
      title: "Relax at an Infinity Pool",
      description: `Kuala Lumpur is home to several high-rise hotels and residences that offer stunning infinity pools with sweeping views of the skyline – particularly the Petronas Towers and KL Tower. Popular options include the rooftop pools at The Face Suites, Banyan Tree KL, or Regalia Residences (some offer day passes). Whether you're swimming at sunrise or lounging at sunset, it’s a relaxing and luxurious way to unwind in the city. Infinity pools here are also social media favorites, perfect for that iconic KL backdrop.`,
      operationalHours: "7:00 AM – 7:00 PM",
      location: `Free for guests</br> RM 30–100 for day passes (if offered)`,
      image:
        "/images/country/malaysia/places/kuala_lumpur/blog/infinity_pool.jpg",
      imageCreditHTML: null,
    },
    {
      id: 19,
      title: "A Day at Genting Highlands",
      description: `Genting Highlands is a popular hill resort an hour from KL, known for its cool climate, theme parks, casinos, shopping, and entertainment. Located at 1,800 meters above sea level, it offers a refreshing escape from the city heat. Highlights include the Skytropolis Indoor Theme Park, SkyAvenue Mall, Genting Premium Outlets, and Resorts World Casino. The Awana Skyway Cable Car ride provides spectacular mountain views. It’s perfect for families, couples, and anyone seeking fun or relaxation in a highland setting.`,
      operationalHours: "10:00 AM – 10:00 PM(Attractions)",
      location: `Genting Highlands, Pahang (about 1 hour from KL)`,
      price: "Cable Car RM 10–18</br> Other attractions priced separately",
      duration: "Full-day trip",
      tips: [
        `Bring a light jacket as it can be chilly`,
        `Buy tickets in advance for cable car/theme parks`,
      ],
      image:
        "/images/country/malaysia/places/kuala_lumpur/blog/genting_highlands.jpg",
      imageCreditHTML: null,
    },
    {
      id: 20,
      title: "Melaka River Cruise",
      description: `The Melaka River Cruise offers a scenic 45-minute journey through the heart of Melaka, showcasing the city's rich heritage and vibrant culture. As you glide along the river, you'll pass by historical landmarks, colonial buildings, traditional Malay villages, and colorful murals that narrate the story of this UNESCO World Heritage Site. The cruise is especially enchanting at night when the riverside is illuminated with lights, creating a magical ambiance.`,
      operationalHours:
        "9:00 AM–11:30 PM </br>Closed on Friday from 12:15 PM - 2:45 PM",
      location: `Taman Rempah Jetty, Muara Jetty`,
      price: "RM30–RM50",
      duration: "Approximately 45 minutes",
      tips: [
        `Opt for an evening cruise to experience the illuminated riverside`,
        `One day pass can also be purchased to take multiple stops`,
      ],
      image: "/images/country/malaysia/places/melaka/blog/melaka_river.jpg",
      imageCreditHTML:
        "Photo by <a target='_blank' href='https://unsplash.com/@fajrihfzh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Fajri Hafizh</u></a> on <a target='_blank' href='https://unsplash.com/photos/a-boat-traveling-down-a-river-next-to-tall-buildings-2AWi2LKFvuo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Unsplash</u></a>",
    },
    {
      id: 21,
      title: "Kek Lok Si Temple",
      description: `Kek Lok Si is Southeast Asia’s largest Buddhist temple and a must-see cultural landmark in Penang. Located on a hillside in Air Itam, it features stunning architecture blending Chinese, Thai, and Burmese styles, with a massive statue of the Goddess of Mercy. The temple complex is beautifully illuminated during Chinese New Year, attracting thousands of visitors. Enjoy panoramic views of the city from the top and explore pagodas, prayer halls, and gardens.`,
      operationalHours:
        "9:00 AM–11:30 PM </br>Closed on Friday from 12:15 PM - 2:45 PM",
      location: `Taman Rempah Jetty, Muara Jetty`,
      price: "RM30–RM50",
      duration: "Approximately 45 minutes",
      tips: [
        `Opt for an evening cruise to experience the illuminated riverside`,
        `One day pass can also be purchased to take multiple stops`,
      ],
      image:
        "/images/country/malaysia/places/penang/blog/kek_lok_si_temple.jpg",
      imageCreditHTML: null,
    },
    {
      id: 22,
      title: "Merdeka Square",
      description: `Merdeka Square is a historic site where Malaysia’s independence was declared in 1957. It’s home to one of the tallest flagpoles in the world and surrounded by colonial-era architecture, including the Sultan Abdul Samad Building and St. Mary’s Cathedral. The square represents national pride and is a symbolic site for parades, cultural events, and photography. With its open green field and surrounding historical buildings, it offers a contrast to KL’s modern cityscape and is ideal for a quiet walk or cultural stop.`,
      operationalHours: "Open 24/7 (best visited during daylight)",
      location: `Jalan Raja, Kuala Lumpur`,
      price: "Free",
      duration: "1 hour",
      image:
        "/images/country/malaysia/places/kuala_lumpur/blog/merdeka_square.jpg",
      imageCreditHTML: null,
    },
    {
      id: 23,
      title: "Sunset Cruise, Langkawi",
      description: `A sunset cruise in Langkawi is an unforgettable way to witness the island’s breathtaking coastline bathed in golden light. These boat tours often include stops for snorkeling, island hopping, or dinner on board. Many cruises offer panoramic views of Langkawi’s limestone cliffs, mangroves, and the famous Pregnant Maiden Lake. Evening cruises combine relaxation, stunning scenery, and sometimes live music or cocktails, creating a romantic or peaceful end to your day. It’s a popular choice for couples and groups alike.`,
      operationalHours: "Usually departs around 4:30 PM",
      location: `<li>Pantai Cenang </li><li>Kuah Jetty</li>`,
      price: "RM100–RM300 per person </br>(varies by operator and package)",
      duration: "3-4 hours",
      image: "/images/country/malaysia/places/langkawi/blog/sunset_cruise.jpg",
      imageCreditHTML:
        "Photo by <a target='_blank' href='https://www.pexels.com/@bertellifotografia/'><u>Matheus Bertelli</u></a> on <a target='_blank' href='https://www.pexels.com/photo/a-sailboat-in-the-ocean-at-sunset-15141424/'><u>Pexels</u></a>",
    },
    {
      id: 24,
      title: "Book a beachside Resort and Relax",
      description: `Book a beachside resort in Malaysia and spend your days soaking in sun, sea, and serenity. From the powdery shores of Langkawi and the crystal-clear waters of the Perhentian Islands to the quiet luxury of Pangkor Laut, Malaysia offers beachfront stays to suit every traveler's dream. Wake up to ocean views, take lazy swims, sip coconut water under palm trees, and unwind with a sunset massage or a seaside dinner. Whether you're seeking a romantic escape, a family break, or a solo recharge, chilling at a beachfront resort offers the perfect blend of comfort and nature. It’s not just a stay, it's a slow-paced experience made for true relaxation.`,
      image: "/images/country/malaysia/places/langkawi/blog/beach_resort.jpg",
      imageCreditHTML: null,
    },
    {
      id: 25,
      title: "3D Art Museum Langkawi",
      description: `The 3D Art Museum in Langkawi, is one of the largest 3D interactive art galleries in Southeast Asia. Located in the scenic Oriental Village near the Langkawi Cable Car, this vibrant indoor space features over 200 imaginative and hyper-realistic artworks painted across walls, ceilings, and floors. The gallery is divided into themed zones such as fantasy, underwater, safari, illusion, and heritage, offering a unique and immersive experience for all ages. It's a fun, family-friendly escape that also provides a cool break from Langkawi’s outdoor heat.`,
      image: "/images/country/malaysia/places/langkawi/blog/3d_art.jpg",
      imageCreditHTML: null,
      operationalHours: "9:00 AM – 6:00 PM (Daily)",
      location: `Oriental Village, Langkawi`,
      price: "RM38 (Adult)</br>Included in the SkyCab Combo Ticket",
      duration: "1 hour",
      tips: [
        `Buy the SkyCab Combo Ticket and clubb it with SkyDom and SkyCab`,
        `Bring a fully charged phone or camera, you’ll want lots of photos!`,
      ],
    },
    {
      id: 26,
      title: "KL Forest Eco Park",
      description: `Located at the base of KL Tower, the KL Forest Eco Park is a hidden rainforest in the heart of the city. It’s one of the oldest forest reserves in Malaysia and offers elevated canopy walkways, nature trails, and a surprising escape into greenery without leaving downtown. You can explore tropical flora, spot small wildlife, and take in views of the city skyline peeking through the trees. The main highlight is the Canopy Walk – a suspension bridge that gives you a treetop-level experience. It’s great for families, couples, or solo travelers wanting a mix of nature and city in one spot.`,
      image: "/images/country/malaysia/places/kuala_lumpur/blog/kl_forest.jpg",
      imageCreditHTML: null,
      operationalHours: "Daily, 8:00 AM – 5:30 PM",
      location: `Jalan Raja Chulan, near KL Tower`,
      price: "Free",
      duration: "1-1.5 hour",
      tips: [`Combine with the KL Tower visit`],
    },
    {
      id: 27,
      title: "Party at Changkat Avenue",
      description: `Changkat Bukit Bintang is Kuala Lumpur’s most energetic nightlife strip, a lively avenue packed with bars, lounges, pubs, and rooftop venues. As night falls, the street transforms into a vibrant party zone filled with music, neon lights, and social buzz. Whether you're in the mood for cocktails, craft beers, dancing, or a casual drink with a view, The atmosphere is cosmopolitan, making it a popular hangout for both locals and travelers. With themed nights, live music, and occasional events, it’s the ideal spot to unwind after a day of sightseeing.`,
      operationalHours: "Daily, 5:00 PM – 3:00 AM",
      location: `Changkat Bukit `,
      tips: [
        `Avoid taking personal vehicle`,
        "Stays open till late in the night so plan accordingly",
      ],
      image:
        "/images/country/malaysia/places/kuala_lumpur/blog/changkat_avenue.jpg",
      imageCreditHTML:
        "<a target='_blank' href='https://commons.wikimedia.org/wiki/File:KL_-_Changkat_Bkt_Bintang_St_Patrick%27s_Day_2012.JPG'><u>Azreey</u></a>, <a target='_blank' href='https://creativecommons.org/licenses/by-sa/3.0'><u>CC BY-SA 3.0</u></a>, via Wikimedia Commons",
    },
    {
      id: 28,
      title: "Cave Temples in Ipoh",
      description: `The cave temples of Ipoh are among Malaysia’s most unique spiritual and cultural attractions, blending natural limestone formations with centuries-old Buddhist and Taoist traditions. Carved into dramatic karst hills, these sacred sites are not only places of worship but also marvels of architecture and geology. Perak Cave Temple, with its towering Buddha statue and panoramic hilltop views, is the most famous, while Kek Lok Tong stands out for its tranquil garden and peaceful interior cavern. These temples offer a serene escape just outside Ipoh’s city center, perfect for spiritual reflection or simply appreciating nature and artistry intertwined.`,
      operationalHours: "Daily, 9:00 AM – 5:00 PM",
      location: `Gunung Rapat area, Ipoh, Perak`,
      price: "Free",
      duration: "2–3 hours to visit multiple temples",
      image: "/images/country/malaysia/places/ipoh/cave_temple.jpg",
      imageCreditHTML:
        "<a target='_blank' href='https://commons.wikimedia.org/wiki/File:Parting_shot_of_the_cartoon-ish_statues_and_forecourt_of_Ipoh%27s_Ling_Sen_Tong_cave_temple_(53473288689).jpg'><u>shankar s. from Poona (pune), India, India</u></a>, <a target='_blank' href='https://creativecommons.org/licenses/by/2.0'><u>CC BY 2.0</u></a>, via Wikimedia Commons",
    },
    {
      id: 29,
      title: "Interact with Locals",
      description: `One of the best ways to truly experience Kuala Lumpur is by interacting with its diverse locals. Malays, Chinese, Indians, and indigenous cultures coexist here, creating a rich cultural blend. Strike up conversations at street food stalls, in markets, while taking a taxi or join guided community tours for deeper insights. Locals are generally friendly, multilingual, and eager to share stories or recommend hidden gems. Visit neighborhoods like Kampung Baru for traditional Malay life, or explore cultural streets during local festivals. It’s not just about sights—it’s about connection.`,
      image:
        "/images/country/malaysia/places/kuala_lumpur/blog/interact_locals.jpg",
      imageCreditHTML: null,
    },
    {
      id: 30,
      title: "Melaka Straits Mosque",
      description: `The Melaka Straits Mosque, also known as Masjid Selat Melaka, is a stunning architectural landmark situated on the man-made island of Pulau Melaka. Built on stilts over the sea, the mosque appears to float when the tide is high, offering a breathtaking sight against the backdrop of the Strait of Malacca. Inaugurated in 2006, its design beautifully blends Middle Eastern and Malay craftsmanship, featuring a striking golden dome and intricate stained-glass windows. Visitors are welcomed to explore the mosque outside of prayer times, provided they adhere to modest dress codes robes and headscarves are available at the entrance.`,
      operationalHours:
        "<li>9:00 AM – 12:30 PM</li><li>2:30 PM – 4:15 PM</li><li>5:30 PM – 6:30 PM</li>",
      location: `Jalan Pulau Melaka, Melaka`,
      price: "Free",
      duration: "1–2 hours",
      tips: [
        `Visit during sunset for the most picturesque views`,
        "Combine your visit with nearby attractions like Jonker Street and A Famosa for a comprehensive Melaka experience",
      ],
      image: "/images/country/malaysia/places_to_visit.jpg",
      imageCreditHTML: null,
    },
    {
      id: 31,
      title: "Bukit Bintang",
      description: `Bukit Bintang is Kuala Lumpur’s premier shopping and entertainment district, bustling day and night. From luxury malls and boutique shops to street markets and local cafes, it’s a haven for retail therapy. The area also features a thriving nightlife scene, with rooftop bars, shisha lounges, karaoke spots, and nightclubs. Street performers and neon-lit streets add energy to the vibe. Whether you're dining at a Michelin-rated restaurant or grabbing snacks at Jalan Alor nearby, Bukit Bintang delivers variety and excitement.`,
      tips: [
        `Book a stay around Bukit Bintang Area`,
        "Stroll around the area during night",
      ],
      image:
        "/images/country/malaysia/places/kuala_lumpur/blog/bukit_bintang.jpg",
      imageCreditHTML: null,
    },
    {
      id: 32,
      title: "Gunung Mulu National Park",
      description: `A UNESCO World Heritage Site, Gunung Mulu National Park in Sarawak, Malaysian Borneo, is renowned for its vast limestone cave systems, towering karst formations, and rich biodiversity. Spanning over 528 square kilometers, the park is home to record-breaking natural wonders, including the world's largest cave chamber, Sarawak Chamber, and the world's second-largest cave passage, Deer Cave. Visitors can explore illuminated show caves like Lang Cave and Clearwater Cave, embark on the challenging Pinnacles Hike to witness sharp limestone spires, or experience the mesmerizing bat exodus at dusk. `,
      operationalHours:
        "Open daily </br>Guided tours operate between 8:00 AM – 5:00 PM",
      location: `Miri Division, Sarawak, Malaysia </br>(accessible via Mulu Airport)`,
      price:
        "5-day pass: <li>RM 30 (foreign adults) </li><li>RM 10 (children)</li><li> RM 15 (Malaysian adults)</li><li> RM 7 (seniors)",
      duration: "2–3 days",
      tips: [
        `Best visited during the drier months of June to September for optimal trekking and cave exploration`,
        "Book flights and accommodations in advance due to limited access",
      ],
      image:
        "/images/country/malaysia/places/sarawak/gunung_mulu_national_park.jpg",
      imageCreditHTML:
        "<a target='_blank' href='https://commons.wikimedia.org/wiki/File:Mulu_Pinnacles.jpg'><u>Nur Nafis Naim</u></a>, <a target='_blank' href='https://creativecommons.org/licenses/by-sa/4.0'><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons",
    },
    {
      id: 33,
      title: "Cameron Highlands",
      description: `Nestled in the Titiwangsa Mountains of central Malaysia, Cameron Highlands is a cool-climate hill station famed for its lush tea plantations, scenic trails, and colonial charm. At over 1,500 meters above sea level, it offers a refreshing escape from the tropical heat, with misty mornings and temperate weather year-round. Visitors can explore rolling green landscapes at the Boh Tea Plantation, pick fresh strawberries at local farms, or enjoy leisurely walks through mossy forests and flower gardens. The region also boasts colorful local markets, English-style cottages, and a mix of Malay, Chinese, and Indian culture. `,
      operationalHours:
        "Open year-round</br>most attractions 9:00 AM – 5:00 PM",
      duration: "1 Full day",
      image: "/images/country/malaysia/places/terengganu/crystal_mosque.jpg",
      imageCreditHTML:
        "Photo by <a target='_blank' href='https://www.pexels.com/photo/view-of-a-mosque-7500930/'><u>Pok Rie</u></a>",
    },
    {
      id: 34,
      title: "LEGOLAND Malaysia",
      description: `Located in Iskandar Puteri, Johor, LEGOLAND Malaysia Resort is Southeast Asia’s first international theme park, offering a comprehensive LEGO experience for families and enthusiasts alike. The resort encompasses a Theme Park with over 40 interactive rides and attractions across 8 themed zones, a Water Park featuring more than 20 slides and water-based activities, and SEA LIFE Malaysia, an aquarium with 11 habitat zones housing over 13,000 marine creatures. Guests can extend their adventure by staying at the LEGO-themed LEGOLAND Hotel, which offers rooms decorated in Pirate, Kingdom, Adventure, NINJAGO, or LEGO Friends themes.`,
      operationalHours: `<li>Theme Park: 10:00 AM – 6:00 PM </br>(Closed on Wednesdays)</li>
<li>Water Park: 10:00 AM – 6:00 PM </br>(Closed on Tuesdays)</li>
<li>SEA LIFE Malaysia: 10:00 AM – 6:00 PM </br>(Open daily)</li>
`,
      location: `Jalan Legoland, Kuala Johor`,
      price: `1-Day Theme Park:  <li>RM199 (Adult), RM169 (Child/Senior)</li>
1-Day Theme Park + SEA LIFE: <li> RM279 (Adult), RM219 (Child/Senior)</li>
1-Day Triple-Park (All Three Park): <li> RM399 (Adult), RM329 (Child/Senior)</li>`,
      duration: "1-2 days",
      image: "/images/country/malaysia/places/johor/legoland.jpg",
      imageCreditHTML:
        "<a target='_blank' href='https://commons.wikimedia.org/wiki/File:Legoland_Malaysia_Resort_Water_Park.jpg'><u>Mohd Fazlin Mohd Effendy Ooi from Kuala Lumpur, Malaysia</u></a>, <a target='_blank' href='https://creativecommons.org/licenses/by/2.0'><u>CC BY 2.0</u></a>, via Wikimedia Commons",
    },
    {
      id: 35,
      title: "Kayaking",
      description: `Malaysia offers a diverse array of kayaking experiences, from tranquil mangrove explorations to exhilarating white-water adventures. In Langkawi, the Kilim Geoforest Park provides serene mangrove kayaking tours, where paddlers can navigate through limestone caves and observe wildlife like eagles and otters. For those seeking adrenaline, the Kampar River in Gopeng, Perak, offers thrilling white-water kayaking experiences amidst lush rainforest settings.`,
      operationalHours: `9:00 AM – 5:00 PM`,
      location: `Langkawi, Perhentian`,
      price: `RM 50-RM 200 per person`,
      duration: "2–4 hours",
      image: "/images/country/malaysia/places/perhentian/blog/kayaking.jpg",
      imageCreditHTML: null,
    },
    {
      id: 36,
      title: "Take a Trishaw Ride",
      description: `A trishaw ride through GeorgeTown is a charming way to explore the city’s sights at a relaxed pace. These colorful, pedal-powered rickshaws offer guided tours or customized routes, passing through heritage streets, markets, and street art spots. It’s perfect for those wanting a unique and nostalgic travel experience.`,
      operationalHours: `9:00 AM – 10:00 PM`,
      location: `<li>George Town</li><li> Maleka`,
      price: `RM30–RM60 per hour (negotiate fare)`,
      duration: "30 minutes – 2 hours",
      image: "/images/country/malaysia/places/penang/blog/trikshaw.jpeg",
      imageCreditHTML: null,
    },
    {
      id: 37,
      title: "Crystal Mosque, Kuala Terengganu",
      description: `The Crystal Mosque, or Masjid Kristal, stands as a gleaming symbol of modern Islamic architecture in Kuala Terengganu, Malaysia. Situated on Wan Man Island within the Islamic Heritage Park, this stunning mosque is constructed from steel, glass, and crystal, giving it a shimmering appearance that reflects beautifully against the surrounding waters. Inaugurated in 2008, the mosque can accommodate over 1,500 worshippers and is renowned for its unique design and serene ambiance.`,
      operationalHours: "9:00 AM – 6:00 PM (Daily)",
      location: "Pulau Wan Man, Kuala Terengganu",
      price: "Free",
      duration: "1–2 hours",
      image: "/images/country/malaysia/places/terengganu/crystal_mosque.jpg",
      imageCreditHTML: null,
    },
    {
      id: 39,
      title: "Gaya Street, Kota Kinabalu",
      description: `Once known as Bond Street during the British colonial era, Gaya Street is the historical and cultural heart of Kota Kinabalu, Sabah. Lined with charming shophouses, cafes, and heritage buildings, the street offers a glimpse into the city's rich past and vibrant present. Every Sunday morning, Gaya Street transforms into a bustling open-air market, known as the Gaya Street Sunday Market, where locals and tourists alike explore stalls selling everything from local handicrafts and souvenirs to fresh produce and street food. `,
      operationalHours: `Open 24/7`,
      location: `Jalan Gaya, Kota Kinabalu`,
      price: `Free`,
      duration: "2 hours",
      image: "/images/country/malaysia/places/sabah/gaya_street.jpg",
      imageCreditHTML:
        "<a target='_blank' href='https://commons.wikimedia.org/wiki/File:Gaya_Street_Sunday_Market,_2024_(16).jpg'><u>Bahnfrend</u></a>, <a target='_blank' href='https://creativecommons.org/licenses/by-sa/4.0'><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons",
    },
    {
      id: 39,
      title: "Tioman Island, Pahang, Malaysia",
      description: `Nestled in the South China Sea off Peninsular Malaysia's east coast, Tioman Island is a tropical haven renowned for its crystal-clear waters, lush rainforests, and vibrant marine life. Whether you're an adventure seeker or in search of tranquility, Tioman offers a diverse range of activities to suit every traveler.`,
      image: "/images/country/malaysia/tioman_island.jpg",
      imageCreditHTML: null,
    },
    {
      id: 40,
      title: "Bako National Park, Sarawak",
      description: `Established in 1957, Bako National Park is Sarawak’s oldest and one of its most biodiverse reserves, encompassing 27 square kilometers of pristine rainforest, secluded beaches, and dramatic coastline. Located about 37 kilometers from Kuching, the park is accessible via a 30-minute drive followed by a 20-minute boat ride from the Bako Jetty. Despite its compact size, Bako boasts seven distinct ecosystems, including mangrove swamps, dipterocarp forests, and heathlands, making it a haven for nature enthusiasts.`,
      operationalHours: "8:00 AM – 5:00 PM",
      location: ` Muara Tebas Peninsula, Kuching Division, Sarawak`,
      price: "<li>RM20(adults) </li><li> RM7(children)</li>",
      duration: "1–2 days",
      tips: [
        `Wear sturdy footwear and bring insect repellent`,
        "Book accommodations in advance if planning an overnight stay",
      ],
      image: "/images/country/malaysia/places/sarawak/bako_national_park.jpg",
      imageCreditHTML: null,
    },
  ],
  related_articles: [
    {
      slug: "/malaysia/kuala_lumpur",
      title: "Best Street Food in Bali: A Culinary Adventure",
      category: "Food",
      image: "/images/country/malaysia/places/kuala_lumpur/kuala_lumpur.png",
    },
    {
      slug: "/malaysia/kuala_lumpur",
      title: "Ultimate Guide to Bali's Beaches",
      category: "Beaches",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      slug: "/malaysia/kuala_lumpur",
      title: "Best Street Food in Bali: A Culinary Adventure",
      category: "Food",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      slug: "/malaysia/kuala_lumpur",
      title: "Ultimate Guide to Bali's Beaches",
      category: "Beaches",
      image: "/placeholder.svg?height=150&width=200",
    },
  ],
  more_about_data: [
    {
      slug: "/malaysia/kuala_lumpur",
      title: "Best Street Food in Bali: A Culinary Adventure",
      category: "Food",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      slug: "/malaysia/kuala_lumpur",
      title: "Ultimate Guide to Bali's Beaches",
      category: "Beaches",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      slug: "/malaysia/kuala_lumpur",
      title: "Best Street Food in Bali: A Culinary Adventure",
      category: "Food",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      slug: "/malaysia/kuala_lumpur",
      title: "Ultimate Guide to Bali's Beaches",
      category: "Beaches",
      image: "/placeholder.svg?height=150&width=200",
    },
  ],
};
