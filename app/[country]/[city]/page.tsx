import { notFound } from 'next/navigation';

interface PageParams {
  country: string;
  city: string;
}

// Allowed city names (itineraries)
const ALLOWED_CITIES = [
  '9-days-itinerary',
  '16-days-itinerary'
] as const;

const DynamicCountryPage = async ({
    params,
  }: {
    params: Promise<{ country: string; city: string }>;
  }) => {
  const { country, city } = await params;

  // Validate if the city is in the allowed list
  if (!ALLOWED_CITIES.includes(city as typeof ALLOWED_CITIES[number])) {
    notFound();
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {country} {city}
      </h1>
      <div className="prose max-w-none">
        <article className="space-y-8">
          <section className="day-section">
            <h2 className="text-2xl font-semibold mb-4">Day 1: Arrival in Langkawi – Beachside Bliss and Sunset Vibes</h2>
            <p className="mb-4">Start your Malaysia adventure by catching a flight to the beautiful island of Langkawi. Whether flying directly or via Kuala Lumpur International Airport (KLIA/KLIA2), you'll reach Langkawi in about an hour. Upon arrival, take a taxi from the airport to your hotel and complete check-in formalities. Once settled, renting a scooter is a great idea for getting around easily and discovering hidden gems at your own pace.</p>
            <p className="mb-4">Once done, head straight to the island's lively heart, Pantai Cenang. This bustling beachside strip offers soft sandy shores, beachfront cafes, and boutique shops perfect for some light souvenir hunting. As the day mellows, make your way toward Pantai Tengah, Langkawi's quieter and more serene beach just south of Cenang. This is the perfect spot to unwind and watch the sun dip below the horizon in a blaze of tropical colors.</p>
            <p>For dinner, choose one of the cozy seaside restaurants offering fresh seafood and local Malaysian flavors—ideal for setting the mood for your beach vacation.</p>
          </section>

          <section className="day-section">
            <h2 className="text-2xl font-semibold mb-4">Day 2: Langkawi SkyCab, Sky Bridge & Sunset Cruise Adventure</h2>
            <p className="mb-4">Begin your second day in Langkawi with one of the island's most iconic experiences: the Langkawi SkyCab. Ride the panoramic cable car up to the top of Gunung Mat Cincang, where sweeping views of Langkawi's lush rainforest and turquoise waters await. Once at the top, take a walk along the Langkawi Sky Bridge, a curved suspension bridge offering jaw-dropping views and photo-perfect moments. You have an option to skywalk at Sky Eagle at the middle station.</p>
            <p className="mb-4">After soaking in the views, head down to the Oriental Village. This charming complex is home to quirky shops, local eateries, and family-friendly attractions like the 3D Art Museum, SkyDome, and SkyRex. 3D Art Museum is highly recommended and the entrance is included in the SkyCable combo ticket. Grab a leisurely lunch here before winding down for the afternoon.</p>
            <p>As the sun begins to dip, make your way to the pier for a magical sunset cruise. Sailing across the Andaman Sea while the sky changes color is a truly relaxing and romantic way to end the day. Many cruises offer light refreshments, snorkelling options and music onboard, perfect for soaking in the island's tropical charm.</p>
          </section>

          <section className="day-section">
            <h2 className="text-2xl font-semibold mb-4">Day 3: Kilim Geoforest Park, Waterfalls & Langkawi Night Market</h2>
            <p className="mb-4">Start your third day in Langkawi with a nature-filled adventure to Kilim Karst Geoforest Park, a UNESCO-recognized geopark rich in biodiversity and dramatic limestone formations. Embark on a guided boat tour that glides through scenic mangrove forests, caves, and emerald waterways. Along the way, you may spot wildlife such as eagles, monitor lizards, and playful monkeys. Some tours also include stops at floating fish farms or bat caves, making the experience even more immersive and educational.</p>
            <p className="mb-4">After the boat trip, head back toward the central part of the island and cool off at one of Langkawi's scenic waterfalls. Temurun Waterfall in the north or Seven Wells Waterfall (Telaga Tujuh) near the cable car area are both excellent options for a refreshing dip or a peaceful picnic surrounded by lush greenery. Don't forget your swimwear and camera—these waterfalls are truly postcard-worthy.</p>
            <p>As evening approaches, dive into Langkawi's local culture by visiting a Langkawi Night Market. These markets rotate locations throughout the week, so check our article about the langkawi travel guide to locate the area that is hosting. Wander through the stalls filled with aromatic Malaysian street food, local snacks, handmade souvenirs, and tropical fruits. It's a great place to interact with locals, try something new, and soak in the island's authentic vibe.</p>
          </section>

          <section className="day-section">
            <h2 className="text-2xl font-semibold mb-4">Day 4: Travel from Langkawi to Penang – Culture, Heritage & Coastal Charm</h2>
            <p className="mb-4">Your fourth day begins with a scenic transfer from Langkawi to Penang, either by a short domestic flight or a leisurely ferry ride across the Andaman Sea. Once you arrive, take a taxi to your hotel in George Town, the vibrant capital of Penang and a UNESCO World Heritage Site known for its multicultural charm, colonial-era architecture, and delicious street food.</p>
            <p className="mb-4">After check-in and a brief rest, begin exploring the heart of George Town's Heritage Zone. This walkable area is filled with historic shophouses, temples, and mosques that reflect the island's diverse cultural tapestry. Meander through narrow streets lined with colorful murals, aromatic food stalls, and local boutiques.</p>
            <p className="mb-4">As evening sets in, head to the iconic Penang Street Art Trail, where you can discover interactive murals by Lithuanian artist Ernest Zacharevic and other local talents. These creative artworks make for fun photo ops and reveal Penang's unique fusion of art and history. Continue your journey to the enchanting Cheong Fatt Tze Mansion, also known as the Blue Mansion. This heritage house is a stunning example of 19th-century Chinese architecture and offers guided tours for those interested in its rich backstory.</p>
            <p className="mb-4">Head to Clan Jetties at the sunset and capture some insta worth pics, where traditional Chinese waterfront homes stand on stilts over the sea.</p>
            <p>As night falls, indulge in a mouthwatering dinner at Gurney Drive Hawker Centre, one of the best places to sample Penang's legendary street food.</p>
          </section>

          <section className="day-section">
            <h2 className="text-2xl font-semibold mb-4">Day 5: Explore Penang – Hilltop Views, Temples & Beach Relaxation</h2>
            <p className="mb-4">Day 5 is all about discovering the natural beauty, spiritual landmarks, and coastal charm of Penang. Begin your morning with a visit to Penang Hill, one of the island's most popular attractions. Take the funicular train ride up to the summit, where panoramic views of George Town and the surrounding landscape unfold before you. The cool hilltop breeze and lush surroundings make it a refreshing escape from the city heat. While at the top, take time to visit The Habitat, a serene eco-park featuring canopy walks, rainforest trails, and native flora and fauna.</p>
            <p className="mb-4">Then, descend the hill and make your way to Kek Lok Si Temple in Air Itam, one of Southeast Asia's largest Buddhist temples. Wander through its beautifully designed halls, prayer pavilions, and towering pagoda. Don't miss the massive statue of the Goddess of Mercy overlooking the complex—it's one of Penang's most iconic sights.</p>
            <p className="mb-4">In the afternoon, return to your hotel to rest or grab lunch at a nearby café. As evening approaches, head to Batu Ferringhi Beach, Penang's popular coastal retreat. You can relax on the golden sands, enjoy a swim, or take a stroll along the beach promenade.</p>
            <p>As night falls, you can explore one of the nearby night markets that pop up around Batu Ferringhi, offering local food, handmade goods, and lively energy.</p>
          </section>

          <section className="day-section">
            <h2 className="text-2xl font-semibold mb-4">Day 6: Arrival in Kuala Lumpur – Iconic Towers & City Skyline</h2>
            <p className="mb-4">On Day 6, fly into Kuala Lumpur, Malaysia's buzzing capital city. Upon arrival at KLIA or KLIA2, you have two main transfer options: the KLIA Ekspres train, which takes you directly to KL Sentral in under 30 minutes, or a taxi ride that offers convenience, especially if you're traveling with luggage.</p>
            <p className="mb-4">Once at your city-center hotel, check in and take some time to unwind—many hotels offer rooftop infinity pools with sweeping city views, perfect for a relaxing break after your journey.</p>
            <p className="mb-4">In the evening, step into the heart of Kuala Lumpur by visiting the city's most iconic landmark—the Petronas Twin Towers. These twin skyscrapers are especially magical when illuminated after sunset. Take the elevator up to the Skybridge and observation deck to enjoy panoramic views of the city skyline. Book your Petronas Tower visit online in advance to skip queues, and time your visit just before sunset for stunning views. Afterward, enjoy a peaceful walk around KLCC Park, a beautifully landscaped area complete with fountains and walking trails.</p>
            <p className="mb-4">For dinner, head to the Suria KLCC food court, located inside the towers. It's an easy and delicious introduction to Malaysian flavors, with a wide range of local and international cuisines. If you're up for more exploration, stroll through the adjacent shopping mall or catch a water fountain light show at the park's esplanade.</p>
            <p className="text-sm italic">Quick Tip: Book your Petronas Tower visit online in advance to skip queues, and time your visit just before sunset for stunning views.</p>
          </section>

          <section className="day-section">
            <h2 className="text-2xl font-semibold mb-4">Day 7: Explore Kuala Lumpur – Culture, Markets & Nightlife</h2>
            <p className="mb-4">Begin your full day in Kuala Lumpur with a morning trip to the iconic Batu Caves, a striking Hindu temple complex nestled within towering limestone cliffs. Just a short Grab or taxi ride from the city (about 20–30 minutes), this spiritual site features a massive golden statue of Lord Murugan and a colorful flight of 272 steps leading up to the main temple cave. The climb is part of the experience, offering scenic views and a close encounter with the resident monkeys. Checkout the dark cave and ramayana cave for more adventure.</p>
            <p className="mb-4">After returning to the city, spend your midday at Central Market, a cultural hub where you can shop for traditional crafts, batik prints, and souvenirs. Just a short walk away is Petaling Street in Chinatown, where you can enjoy bustling street scenes, bargain shopping, and local eats. It's a great spot to sample Malaysian Chinese delicacies in an energetic atmosphere.</p>
            <p className="mb-4">In the late afternoon, escape into nature at the KL Forest Eco Park, a green lung in the heart of the city. Explore its canopy walkways and shaded trails, then head up to Menara Kuala Lumpur (KL Tower) for sweeping views of the city. Time your visit to catch the sunset—it's truly mesmerizing from the observation deck.</p>
            <p>For dinner and nightlife, walk over to Jalan Alor, KL's legendary night food street, where sizzling woks and smoky grills serve everything from satay to seafood. Wrap up your night at Changkat Bukit Bintang, a vibrant nightlife strip packed with bars, clubs, and live music.</p>
          </section>

          <section className="day-section">
            <h2 className="text-2xl font-semibold mb-4">Day 8: Day Trip to Malacca or More of Kuala Lumpur</h2>
            <p className="mb-4">Today offers you two exciting options—either a historical day trip to Malacca (Melaka) or a deeper dive into Kuala Lumpur's cultural gems.</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Option 1: Day Trip to Malacca</h3>
              <p className="mb-4">Begin your journey with a comfortable bus ride from TBS Bus Terminal to Melaka Sentral, which takes around two hours. Upon arrival, head straight to Dutch Square, where the iconic red-painted buildings like Christ Church and The Stadthuys offer a glimpse into Malaysia's colonial past. Climb up to St. Paul's Hill for panoramic views and explore the ruins of A Famosa Fort, a Portuguese fortress dating back to the 16th century.</p>
              <p className="mb-4">Stroll along Jonker Street, a lively lane brimming with antique shops, local crafts, and street food. If time permits, take a relaxing Malacca River Cruise to see murals, bridges, and charming cafes lining the waterway. In the evening, return to Kuala Lumpur for a well-earned rest.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Option 2: More of Kuala Lumpur</h3>
              <p className="mb-4">If you prefer a slower pace, start your day with a visit to the Islamic Arts Museum Malaysia, home to beautifully curated exhibitions and Islamic architecture. Continue to Masjid Negara (National Mosque), an architectural marvel with peaceful grounds.</p>
              <p className="mb-4">Later, explore the colorful Thean Hou Temple, one of Southeast Asia's oldest and grandest Chinese temples. Enjoy lunch in Little India, where the aroma of spices and colorful textiles fills the air. Spend the afternoon at Merdeka Square, admire the Sultan Abdul Samad Building, and stroll along the scenic River of Life.</p>
              <p>As night falls, consider visiting TREC KL, a modern nightlife zone with bars and music, or shop and dine at Pavilion Mall.</p>
            </div>
          </section>

          <section className="day-section">
            <h2 className="text-2xl font-semibold mb-4">Day 9: Return via Kuala Lumpur – Final Explorations & Departure</h2>
            <p className="mb-4">Your final day in Malaysia offers a perfect balance of relaxation, last-minute sightseeing, and a smooth departure. Begin your morning with a leisurely breakfast at your hotel. If you have time before your flight, take this opportunity to explore any sights you might have missed earlier in Kuala Lumpur.</p>
            <p className="mb-4">One great option is a return visit to the Islamic Arts Museum Malaysia, especially if you didn't get a chance on Day 8. Its serene atmosphere and world-class exhibits make it a peaceful and enriching way to end your trip. Alternatively, visit the National Mosque (Masjid Negara), located nearby, to admire its striking modern architecture and tranquil gardens.</p>
            <p className="mb-4">Another excellent spot to consider is the Thean Hou Temple, known for its intricate carvings, vibrant décor, and sweeping city views. You could pair this with a stop in Little India (Brickfields), where you can enjoy a flavorful lunch and experience the area's colorful culture.</p>
            <p className="mb-4">For those looking to squeeze in a bit more shopping, Central Market, Suria KLCC, or Pavilion Mall are all ideal for picking up souvenirs, snacks, or traditional crafts. Don't forget to leave some space in your bag for gifts and keepsakes!</p>
            <p>As departure time nears, make your way to KLIA or KLIA2. If time allows, browse airport shops for last-minute mementos or enjoy a relaxed meal before your flight.</p>
          </section>

          <section className="travel-tips mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Travel Tips:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Check our travel guide to know everything before visiting malaysia</li>
              <li>Domestic Flights: Book AirAsia or Malaysia Airlines for internal flights early to get good prices.</li>
              <li>Getting Around Cities: Use Grab app (Malaysia's version of Uber).</li>
              <li>Currency: Malaysian Ringgit (MYR).</li>
              <li>Internet: Get a local SIM or eSIM for data access.</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default DynamicCountryPage;
