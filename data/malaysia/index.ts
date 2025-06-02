import {
  MALAYSIA_SIXTEEN_DAYS_ITINERARY,
  MALAYSIA_NINE_DAYS_ITINERARY,
  MALAYSIA_TOP_THINGS_TO_DO,
} from "./data";
import {
  KUALA_LUMPUR_RELATED_ARTICLES,
  KAULA_LUMPUR_TRAVEL_GUIDE,
  KAULA_LUMPUR_BLOG_POST,
} from "./kuala-lumpur/data";
import { LANGKAWI_BLOG_POST, LANGKAWI_TRAVEL_GUIDE } from "./langkawi/data";
import {
  PENANG_BLOG_POST,
  PENANG_RELATED_ARTICLES,
  PENANG_TRAVEL_GUIDE,
} from "./penang/data";
import {
  PERHENTIAN_ISLANDS_BLOG_POST,
  PERHENTIAN_ISLANDS_TRAVEL_GUIDE,
} from "./perhentian/data";

export const MALAYSISA_FOOD_DATA = [
  {
    id: 1,
    name: "Nasi Lemak",
    description:
      "Nasi Lemak is often considered Malaysia's national dish—a fragrant, coconut milk-infused rice served with sambal (spicy chili paste), crunchy anchovies, toasted peanuts, cucumber slices, and a hard-boiled or fried egg. Traditionally eaten for breakfast, it's now enjoyed all day, often upgraded with add-ons like fried chicken, beef rendang, sambal sotong (squid), or ayam masak merah. The perfect balance of creamy, spicy, and crunchy makes it a favorite among locals and tourists alike.",
    image: "/images/country/malaysia/food/nasi_lemak.jpg",
    otherInfo: {
      where_to_eat:
        "Street stalls, mamak shops, roadside warungs, and even high-end cafés.",
      range: "RM7–RM15 (basic to premium toppings)",
      vegetarian_available: true,
    },
  },
  {
    id: 2,
    name: "Roti Canai",
    description:
      "Roti Canai is a beloved Malaysian flatbread with Indian roots, known for its crispy exterior and soft, chewy layers inside. Made by skillfully flipping and folding dough before pan-frying it with ghee or oil, it's usually served with dhal (lentil curry), chicken curry, or fish curry. It's eaten any time of the day, especially for breakfast and supper. Sweet variations with sugar, banana, or condensed milk are also popular.",
    image: "/images/country/malaysia/food/roti_canai.jpg",
    otherInfo: {
      where_to_eat: "Mamak stalls and Indian Muslim restaurants.",
      range:
        "RM1.50–RM5 (basic to filled varieties like egg, cheese, or sardine)",
      vegetarian_available: true,
      tips: [
        "Pair it with teh tarik for the ultimate local breakfast or supper combo.",
      ],
    },
    imageCreditHTML: `
    <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Roti_Canai_(4553382417).jpg"><u>Geoff Peters from Vancouver, BC, Canada</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by/2.0"><u>CC BY 2.0</u></a>, via Wikimedia Commons
    `,
  },
  {
    id: 3,
    name: "Char Kway Teow",
    description:
      "Char Kway Teow features flat rice noodles cooked over high heat in a seasoned wok to achieve a smoky flavor known as 'wok hei.' Traditional ingredients include prawns, cockles, Chinese sausage, eggs, bean sprouts, and chives, all tossed in a mix of soy sauces and sometimes chili paste. The result is a savory, slightly charred dish bursting with texture and umami.",
    image: "/images/country/malaysia/food/char_kyaw_teow.jpg",
    otherInfo: {
      where_to_eat:
        "Hawker stalls in Penang (e.g., Lorong Selamat), Chinese kopitiams, and local night markets.",
      range: "RM6–RM12",
      vegetarian_available: true,
      tips: ["Request without seafood and sausage for vegetarian version"],
    },
    imageCreditHTML: `
      <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Malaysian_Char_Kuey_Teow.jpg"><u>Foodi-elaine</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons
    `,
  },
  {
    id: 4,
    name: "Laksa",
    description:
      "Laksa is a bold, aromatic noodle soup popular across Malaysia, with two main styles: Curry Laksa and Asam Laksa. Curry Laksa features a rich coconut-based broth with tofu puffs, shrimp, egg, and yellow noodles. Asam Laksa, on the other hand, is tangy and spicy with a mackerel and tamarind-based broth, served with thick rice noodles, mint, cucumber, and pineapple.",
    otherInfo: {
      where_to_eat:
        "Local hawker stalls and food courts—try Penang's Air Itam Market for Asam Laksa or KL's Madras Lane for Curry Laksa.",
      range: "RM6–RM10",
      vegetarian_available: false,
      tips: [],
    },
    image: "/images/country/malaysia/food/laksa.jpg",
    imageCreditHTML: `
      Photo by <a target="_blank" href="https://www.pexels.com/@su-la-pyae-54514809"><u>Su La Pyae</u>  </a> on <a target="_blank" href="https://www.pexels.com/photo/delicious-asian-noodle-bowl-with-fresh-herbs-28907751"><u>Pexels</u></a>
    `,
  },
  {
    id: 5,
    name: "Nasi Kandar",
    description:
      "Originating from Penang, Nasi Kandar is a popular Indian Muslim dish where plain or flavored rice is served with an assortment of curries and sides like fried chicken, beef rendang, okra, egg, or squid. The signature touch is the 'banjir' or gravy mix, where multiple curry sauces are poured over the rice. It's a flavor explosion—spicy, savory, and aromatic. The variety of toppings lets you build your own hearty plate.",
    otherInfo: {
      where_to_eat:
        "Nasi Kandar Line Clear (Penang), Kayu Nasi Kandar, Pelita, and other 24-hour mamak eateries.",
      range: "RM8–RM20 (depends on number/type of sides)",
      vegetarian_available: true,
      tips: [
        "Request rice with vegetable sides, dhal, and eggs; avoid meat gravies.",
      ],
    },
    image: "/images/country/malaysia/food/nasi_kandar.jpg",
    imageCreditHTML: `
      <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Nasi_kandar_Al_hilal.jpg"><u>RAYEESAHAMED</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons
    `,
  },
  {
    id: 6,
    name: "Mee Goreng Mamak",
    description:
      "Mee Goreng Mamak is a beloved Malaysian noodle dish with strong Indian-Muslim influences. It features yellow noodles stir-fried with tofu, potatoes, bean sprouts, eggs, and sometimes squid or chicken, all tossed in a tangy, spicy sauce with a squeeze of lime and a touch of tomato ketchup or chili sauce. Garnished with green chilies and crispy shallots, it's both hearty and flavorful.",
    otherInfo: {
      where_to_eat:
        "Mamak stalls, Indian Muslim restaurants, and night markets.",
      range: "RM5–RM9",
      vegetarian_available: true,
      tips: [
        "Request no meat or seafood; tofu and egg versions are widely available.",
        "Always ask for 'kurang pedas' (less spicy) if you're sensitive to chili heat.",
      ],
    },
    image: "/images/country/malaysia/food/mee_goreng.jpg",
    imageCreditHTML: `
    Photo by <a target="_blank" href="https://unsplash.com/@eprayatama?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>R Eris</u></a> on <a target="_blank" href="https://unsplash.com/photos/a-plate-of-food-on-a-table-with-utensils-i5XurHSjE1M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a>
    `,
  },
  {
    id: 7,
    name: "Rendang",
    description:
      "Rendang is a rich, slow-cooked dry curry usually made with beef, simmered for hours in coconut milk and a mix of aromatic spices like lemongrass, galangal, turmeric, and chili. Originally from Indonesia, it's become a Malaysian staple, especially during festive seasons. The meat becomes incredibly tender, soaking up the thick, flavorful sauce until it almost melts in your mouth.",
    otherInfo: {
      where_to_eat:
        "Malay restaurants, Nasi Campur stalls, and during festivals like Hari Raya.",
      range: "RM8–RM15 per portion",
      vegetarian_available: false,
      tips: [],
    },
    image: "/images/country/malaysia/food/rendang.jpg",
    imageCreditHTML: `
      Photo by <a target="_blank" href="https://unsplash.com/@kurisuchanxx?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Christian Dala</u></a> on <a target="_blank" href="https://unsplash.com/photos/a-close-up-of-a-bowl-of-food-on-a-table-voSslbaAVtY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a>
    `,
  },
  {
    id: 8,
    name: "Hainanese Chicken Rice",
    description:
      "Hainanese Chicken Rice is a simple yet comforting dish featuring poached or roasted chicken served with fragrant rice cooked in chicken broth, accompanied by garlic chili sauce, dark soy sauce, and a light chicken soup. Though originally from China, it's been embraced in Malaysia, especially in cities like Kuala Lumpur and Ipoh.",
    otherInfo: {
      where_to_eat:
        "Chinese kopitiams, hawker stalls, and chicken rice shops (e.g., Nam Heong, The Chicken Rice Shop).",
      range: "RM6–RM12",
      vegetarian_available: false,
      tips: [],
    },
    image: "/images/country/malaysia/food/hainese_checken_rice.jpg",
    imageCreditHTML: `
    Photo by  <a  target="_blank "href="https://www.pexels.com/@change-c-c-974768353/">Change C.C</a> on <a target="_blank" href="https://www.pexels.com/photo/hainanese-chicken-rice-with-fresh-vegetables-30120279/"><u>Pexels</u></a>
    `,
  },
  {
    id: 9,
    name: "Ikan Bakar",
    description:
      "Ikan Bakar means 'grilled fish' in Malay, and it's a smoky, spicy delight widely loved across Malaysia. Fresh fish, commonly stingray, mackerel, or seabass, is marinated with turmeric, chili paste, and tamarind, then grilled over an open flame or charcoal fire, often wrapped in banana leaves to retain moisture and flavor. It's served with sambal belacan (spicy shrimp paste) and a side of rice or ulam (herbs).",
    otherInfo: {
      where_to_eat:
        "Coastal hawker stalls, night markets, and food courts—try Kampung Baru in KL or Medan Ikan Bakar in Melaka.",
      range: "RM10–RM25 (based on fish type and size)",
      vegetarian_available: false,
      tips: [],
    },
    image: "/images/country/malaysia/food/ikan_bakar.jpg",
    imageCreditHTML: `
      <a href="https://commons.wikimedia.org/wiki/File:Gurame_bakar_kecap_2.JPG"><u>Gunawan Kartapranata</u></a>, <a href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons
    `,
  },
  {
    id: 10,
    name: "Nasi Campur",
    description:
      "Nasi Campur means 'mixed rice' and is a quintessential Malaysian lunch meal. Diners select plain rice and choose from a wide array of dishes—curried meats, fried fish, stir-fried vegetables, tofu, sambals, and more. It's a flexible, budget-friendly way to taste multiple local flavors on one plate.",
    otherInfo: {
      where_to_eat:
        "Warungs, Malay food courts, and roadside stalls. Famous places include Warung Kak Long and Gerai Rahmah.",
      range: "RM6–RM15 (based on selection)",
      vegetarian_available: true,
      tips: ["Plenty of veggie, egg, and tofu options; avoid meat gravies."],
    },
    image: "/images/country/malaysia/food/nasi_campur.jpg",
    imageCreditHTML: `
      <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Nasi_Campur.jpg"><u>Fei Tan</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by/2.0"><u>CC BY 2.0</u></a>, via Wikimedia Commons
    `,
  },
  {
    id: 11,
    name: "Satay",
    description:
      "Satay is a skewered and grilled meat dish, often made with chicken, beef, or lamb, and served with a rich peanut sauce, cucumber, onions, and rice cakes (ketupat). The meat is marinated in turmeric, lemongrass, and spices, then grilled over hot coals for that signature char and smoky flavor. It's a popular snack or dinner dish and a festival staple.",
    image: "/images/country/malaysia/food/satay.jpg",
    otherInfo: {
      where_to_eat:
        "Satay Kajang Haji Samuri (Selangor), street food markets, and night markets.",
      range: "RM1–RM1.50 per stick; sets cost RM8–RM15",
      vegetarian_available: false,
      tips: [],
    },
  },
  {
    id: 12,
    name: "Rojak",
    description:
      "Rojak is a traditional fruit and vegetable salad dish popular in Malaysia, available in two main styles: Indian Rojak (more savory) and Penang Rojak (fruit-based and sweet-spicy). Indian Rojak includes fried dough, tofu, egg, and potatoes with thick peanut sauce. Penang Rojak uses cucumber, pineapple, jicama, and fried dough fritters tossed in a dark, sticky shrimp paste sauce with crushed peanuts.",
    image: "/images/country/malaysia/food/rujak.jpg",
    otherInfo: {
      where_to_eat:
        "Food courts, street stalls, and night markets—try Gurney Drive (Penang) or Brickfields (KL).",
      range: "RM5–RM10",
      vegetarian_available: true,
      tips: ["Especially Penang Rojak, just confirm sauce ingredients."],
    },
  },
  {
    id: 13,
    name: "Roti John",
    description:
      "Roti John is Malaysia's take on a stuffed omelet sandwich. A split baguette is filled with minced meat (usually chicken or beef), onions, eggs, and sometimes sardines, then pan-fried until crispy and golden. It's topped with chili sauce, mayonnaise, and occasionally cheese for extra indulgence. Often sold at night markets, it's perfect as a filling street snack or light meal.",
    image: "/placeholder.svg?height=300&width=500",
    otherInfo: {
      where_to_eat:
        "Pasar malam (night markets), bazaar Ramadan stalls, and street vendors.",
      range: "RM5–RM9",
      vegetarian_available: true,
      tips: ["Egg-and-onion-only versions are available at some stalls."],
    },
  },
  {
    id: 14,
    name: "Murtabak",
    description:
      "Murtabak is a savory stuffed pancake or pan-fried bread, originally of Arab-Indian origin but widely loved in Malaysia. It's made using a thin dough similar to roti canai, filled with minced meat (usually beef or chicken), onions, egg, and sometimes potatoes, then folded and grilled until crispy. Served hot with a side of curry, dhal, and pickled onions, Murtabak is a filling and flavorful meal often enjoyed during dinner or late-night suppers.",
    image: "/images/country/malaysia/food/martabak.jpg",
    otherInfo: {
      where_to_eat:
        "Mamak restaurants, night markets, and bazaar Ramadan stalls.",
      range: "RM6–RM12 (depending on size and filling)",
      vegetarian_available: true,
      tips: [
        "Egg-and-onion versions or potato fillings available at some stalls.",
      ],
    },
  },
  {
    id: 15,
    name: "Banana Leaf Rice",
    description:
      "Banana Leaf Rice is a South Indian-inspired Malaysian meal where rice is served on a banana leaf with a variety of vegetable curries, pickles, papadum, and sides like rasam or sambar. You can add meat (chicken, mutton, fish) or keep it vegetarian. The beauty lies in mixing the spicy curries with crunchy, tangy, and savory elements on a fragrant leaf. It's commonly eaten by hand for full flavor.",
    otherInfo: {
      where_to_eat:
        "Indian restaurants like Sri Nirwana Maju (Bangsar), Devi's Corner, or Raju's Banana Leaf.",
      range: "RM7–RM15 (vegetarian), RM15–RM25 (with meat)",
      vegetarian_available: true,
      tips: ["Free rice and curry refills are common—just ask!"],
    },
    image: "/images/country/malaysia/food/banana_leaf_rice.jpg",
    imageCreditHTML: `
      <a target="_blank" href="https://commons.wikimedia.org/wiki/File:%E0%B2%AC%E0%B2%BE%E0%B2%B3%E0%B3%86%E0%B2%B2%E0%B3%86_%E0%B2%8A%E0%B2%9F_(Banana_leaf_meal).jpg"><u>Codegeass123</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons
    `,
  },
  {
    id: 16,
    name: "Teh Tarik",
    description:
      "Teh Tarik, meaning 'pulled tea,' is Malaysia's national drink and a must-try beverage. It's made by 'pulling' strong black tea mixed with condensed milk from one cup to another at a height, creating a frothy top and enhancing flavor. The result is a smooth, sweet, and slightly creamy drink, often enjoyed with breakfast or as a companion to spicy meals. It's loved for its taste and the fun preparation process.",
    otherInfo: {
      where_to_eat: "Mamak stalls, kopitiams, Indian Muslim restaurants.",
      range: "RM1.50–RM3",
      vegetarian_available: true,
      tips: [],
    },
    image: "/images/country/malaysia/food/teh_tarik.jpg",
    innerCreditHTML: `
      <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Teh_tarik_2.jpg"><u>Alpha from Melbourne, Australia</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/2.0"><u>CC BY-SA 2.0</u></a>, via Wikimedia Commons
    `,
  },
  {
    id: 17,
    name: "Apam Balik",
    description:
      "Apam Balik is a popular Malaysian street snack, essentially a thick, crispy pancake folded in half and filled with crushed peanuts, sugar, and sweet corn. The outer crust is golden and crisp, while the inside remains fluffy and sweet. Variations now include fillings like Nutella, cheese, or even bananas. It's often enjoyed as a dessert or tea-time snack and is especially popular at night markets.",
    image: "/placeholder.svg?height=300&width=500",
    otherInfo: {
      where_to_eat:
        "Pasar malam (night markets), roadside vendors, and morning markets.",
      range: "RM2–RM5 (depends on filling and size)",
      vegetarian_available: true,
      tips: [],
    },
  },
  {
    id: 18,
    name: "Kek Lapis Sarawak",
    description:
      "Kek Lapis Sarawak is a colorful, layered cake originating from Sarawak, Borneo. It's made with butter, condensed milk, and various flavorings like pandan, chocolate, or fruit essences. The cake is labor-intensive, with each layer baked individually to create stunning patterns. It's usually served during festivals or gifted as a souvenir.",
    image: "/images/country/malaysia/food/kek_lapis_sarawak.jpg",
    otherInfo: {
      where_to_eat:
        "Specialty shops in Sarawak, local cake shops, and major airports.",
      range: "RM10–RM40 (depending on size and pattern)",
      vegetarian_available: true,
      tips: ["Most versions are vegetarian, but check for eggs"],
    },
    imageCreditHTML: `
      <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Kek_Lapis_Sarawak.jpg"><u>bob P-&amp;-S</u></a>, <a href="https://creativecommons.org/licenses/by/2.0"><u>CC BY 2.0</u></a>, via Wikimedia Commons
    `,
  },
  {
    id: 19,
    name: "Ais Kacang",
    description:
      "Ais Kacang (also called ABC – Air Batu Campur) is Malaysia's ultimate shaved ice dessert. It's a colorful mountain of finely shaved ice drenched in rose syrup, condensed milk, and gula Melaka (palm sugar syrup), served with toppings like sweet corn, red beans, grass jelly, peanuts, and sometimes ice cream. Refreshing and satisfyingly sweet, it's a popular treat in Malaysia's hot climate and a must-try during food market visits.",
    image: "/placeholder.svg?height=300&width=500",
    otherInfo: {
      where_to_eat: "Hawker centers, food courts, and dessert shops",
      range: "RM4–RM7",
      vegetarian_available: true,
      tips: [],
    },
  },
  {
    id: 20,
    name: "Cendol",
    description:
      "Cendol is a beloved icy dessert featuring green pandan-flavored rice flour jelly, coconut milk, shaved ice, and gula Melaka. It's sweet, creamy, and slightly smoky thanks to the palm sugar syrup. Some versions include red beans or glutinous rice for added texture.",
    otherInfo: {
      where_to_eat:
        "Penang Road Famous Teochew Cendol (George Town), Jonker 88 (Melaka), or roadside stalls.",
      range: "RM3–RM6",
      vegetarian_available: true,
      tips: [
        "Go for the original version before trying durian cendol—it's intensely flavorful and not for everyone.",
      ],
    },
    image: "/images/country/malaysia/food/cendol.jpg",
    imageCreditHTML: `
      Image by <a target="_blank" href="https://pixabay.com/users/cegoh-94852/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=837368"><u>Jason Goh</u></a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=837368"><u>Pixabay</u></a>
    `,
  },
  {
    id: 21,
    name: "Durian",
    description:
      "Durian is often called Malaysia's most controversial fruit, famously known as the 'King of Fruits'. its strong aroma and custard-like texture spark passionate reactions—people either love it or loathe it. The taste is sweet, creamy, and slightly savory. Popular varieties include Musang King and D24. Often eaten fresh, it's also used in cakes, ice creams, and pastries.",
    image: "/images/country/malaysia/food/durian.jpg",
    otherInfo: {
      where_to_eat: "Durian stalls, markets, and dedicated durian farms.",
      range: "RM10–RM80 (based on variety and weight)",
      vegetarian_available: true,
      tips: [
        "First time? Start with durian ice cream or crepes before diving into the raw fruit.",
      ],
    },
  },
  {
    id: 22,
    name: "Sambal Udang",
    description:
      "Sambal Udang is a bold and spicy prawn dish cooked in a fragrant sambal sauce made from chili, garlic, shallots, tamarind, and sometimes belacan (fermented shrimp paste). The prawns absorb the spicy-tangy flavor, resulting in a rich and aromatic seafood delight often paired with steamed rice. A favorite among Malaysians, it's a festive dish as well as a staple in home cooking.",
    otherInfo: {
      where_to_eat:
        "Malay restaurants, Nyonya eateries, or places like Village Park or Madam Kwan's.",
      range: "RM15–RM30",
      vegetarian_available: false,
      tips: [
        "Ask for less spicy if you're not used to Malaysian heat levels—it can get intense!",
      ],
    },
    image: "/images/country/malaysia/food/sambal_udang.jpg",
    imageCreditHTML: `
      <a target=”_blank” href="https://commons.wikimedia.org/wiki/File:SAMBAL_BALADO_TERONG_UDANG.jpg"><u>Windi Utari</u></a>, <a href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons
    `,
  },
];

export const MALAYSIA_COMPLETE_FOOD_GUIDE = [
  {
    id: "breakfast",
    title: "Best Breakfast",
    description:
      "Start your day with Malaysia's most beloved breakfast dishes, from fragrant rice dishes to flaky flatbreads.",
    items: [
      {
        id: 1,
        name: "Nasi Lemak",
        description:
          "Nasi Lemak is Malaysia's iconic breakfast dish, beloved across all ethnicities. It features fragrant coconut milk rice served with spicy sambal, crispy anchovies, toasted peanuts, cucumber slices, and a hard-boiled or fried egg. Often accompanied by fried chicken or rendang, it's a satisfying, flavorful meal that fuels locals for the day ahead.",
        image: "/images/country/malaysia/food/nasi_lemak.jpg",
      },
      {
        id: 2,
        name: "Roti Canai",
        description:
          "Roti Canai is a flaky, crispy Indian-style flatbread that's a staple Malaysian breakfast, particularly in mamak stalls. Made by flipping and stretching dough until it's thin, then pan-frying until golden, it's typically served with dhal (lentil curry) or meat curries like chicken or beef.",
        image: "/images/country/malaysia/food/roti_canai.jpg",
        imageCreditHTML:
          "<a target='_blank' href='https://commons.wikimedia.org/wiki/File:Roti_Canai_(4553382417).jpg'><u>Geoff Peters from Vancouver, BC, Canada</u></a>, <a target='_blank' href='https://creativecommons.org/licenses/by/2.0'><u>CC BY 2.0</u></a>, via Wikimedia Commons",
      },
      {
        id: 3,
        name: "Kaya Toast & Soft-Boiled Eggs",
        description:
          "Kaya Toast and Soft-Boiled Eggs offer a simple yet comforting breakfast loved throughout Malaysia and Singapore. The toast is slathered with kaya, a sweet coconut and egg jam, and a generous slab of butter. It's paired with two soft-boiled eggs seasoned with light soy sauce and white pepper.",
        image: "/images/country/malaysia/food/kaya_toast.jpg",
        imageCreditHTML:
          '<a href="https://www.freepik.com/free-photo/close-up-melted-cheese-sandwich_22894828.htm#fromView=search&page=1&position=2&uuid=b3aed5e0-7599-4c24-9a9e-1c2f6141f918&query=toast+with+kaya">Image by freepik</a>',
      },
      {
        id: 4,
        name: "Chee Cheong Fun",
        description:
          "Chee Cheong Fun is a classic Chinese-Malaysian breakfast made of silky, steamed rice noodle rolls. Served plain or filled with shrimp, char siu, or minced meat, it's topped with sweet soy sauce, chili sauce, sesame seeds, and sometimes fried shallots.",
        image: "/images/country/malaysia/food/chee_cheong_fun.jpg",
        imageCreditHTML:
          "Photo by <a target='_blank' href='https://unsplash.com/@le_y0u?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>You Le</u></a> on <a target='_blank' href='https://unsplash.com/photos/a-red-plate-topped-with-meat-covered-in-sauce-syjj30AYKRM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Unsplash</u></a>",
      },
      {
        id: 5,
        name: "Nasi Dagang",
        description:
          "Nasi Dagang is a beloved East Coast Malaysian breakfast, especially in Kelantan and Terengganu. It features aromatic rice steamed in coconut milk and fenugreek seeds, served with rich tuna curry, pickled vegetables (acar), and boiled eggs.",
        image: "/images/country/malaysia/food/nasi_dagang.jpg",
        imageCreditHTML:
          "<a target = '_blank' href='https://commons.wikimedia.org/wiki/File:Nasi_Dagang_PSU.jpg'><u>Amirudin Mohd Zani</u></a>, <a target='_blank' href='https://creativecommons.org/licenses/by/2.5'><u>CC BY 2.5</u></a>, via Wikimedia Commons",
      },
      {
        id: 6,
        name: "Nasi Tumpang",
        description:
          "Nasi Tumpang is a unique Kelantanese breakfast wrapped in a conical banana leaf package. Traditionally prepared for travelers, this layered rice dish includes white rice alternated with ingredients like chicken or fish curry, sambal, beef floss (serunding), and omelet.",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  {
    id: "lunch-dinner",
    title: "Best Lunch/Dinner",
    description:
      "Discover Malaysia's most popular main dishes, perfect for lunch or dinner.",
    items: [
      {
        id: 7,
        name: "Char Kway Teow",
        description:
          "Char Kway Teow is a beloved Malaysian stir-fried noodle dish, perfect for lunch or dinner. Made with flat rice noodles, it's tossed over high heat with prawns, Chinese sausage, bean sprouts, eggs, and chives in a savory dark soy sauce.",
        image: "/images/country/malaysia/food/char_kyaw_teow.jpg",
        imageCreditHTML: `
          <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Malaysian_Char_Kuey_Teow.jpg"><u>Foodi-elaine</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons
        `,
      },
      {
        id: 8,
        name: "Laksa",
        description:
          "Laksa is a spicy noodle soup with rich regional variations across Malaysia. The two most popular types are Curry Laksa, a coconut-based broth with egg noodles, tofu puffs, chicken, and shrimp, and Asam Laksa, a tangy fish-based soup with tamarind and mackerel.",
        image: "/images/country/malaysia/food/laksa.jpg",
        imageCreditHTML: `
            Photo by <a target="_blank" href="https://www.pexels.com/@su-la-pyae-54514809"><u>Su La Pyae</u>  </a> on <a target="_blank" href="https://www.pexels.com/photo/delicious-asian-noodle-bowl-with-fresh-herbs-28907751"><u>Pexels</u></a>
          `,
      },
      {
        id: 9,
        name: "Nasi Kandar",
        description:
          "Nasi Kandar is a northern Malaysian specialty from Penang, popular for lunch or dinner. It features steamed rice served with an array of flavorful curries, gravies, and side dishes like fried chicken, beef rendang, okra, boiled eggs, and more.",
        image: "/images/country/malaysia/food/nasi_kandar.jpg",
        imageCreditHTML: `
            <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Nasi_kandar_Al_hilal.jpg"><u>RAYEESAHAMED</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons
          `,
      },
      {
        id: 10,
        name: "Mee Goreng Mamak",
        description:
          "Mee Goreng Mamak is a spicy, tangy fried noodle dish commonly eaten for lunch or dinner. Yellow noodles are wok-fried with tofu, potatoes, bean sprouts, eggs, and sometimes seafood or chicken, flavored with soy sauce, tomato ketchup, and chili paste.",
        image: "/images/country/malaysia/food/mee_goreng.jpg",
        imageCreditHTML: `
          Photo by <a target="_blank" href="https://unsplash.com/@eprayatama?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>R Eris</u></a> on <a target="_blank" href="https://unsplash.com/photos/a-plate-of-food-on-a-table-with-utensils-i5XurHSjE1M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a>
          `,
      },
      {
        id: 11,
        name: "Rendang",
        description:
          "Rendang is a slow-cooked dry curry originating from the Minangkabau culture, and it's a staple in Malaysian and Indonesian cuisine. Typically made with beef, it's simmered for hours in coconut milk and a fragrant blend of lemongrass, galangal, garlic, ginger, and chili until tender and richly caramelized.",
        image: "/images/country/malaysia/food/rendang.jpg",
        imageCreditHTML: `
            Photo by <a target="_blank" href="https://unsplash.com/@kurisuchanxx?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Christian Dala</u></a> on <a target="_blank" href="https://unsplash.com/photos/a-close-up-of-a-bowl-of-food-on-a-table-voSslbaAVtY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a>
          `,
      },
      {
        id: 12,
        name: "Hainanese Chicken Rice",
        description:
          "Hainanese Chicken Rice is a simple yet beloved dish that pairs poached or roasted chicken with fragrant rice cooked in chicken broth and garlic. Served with chili sauce, ginger paste, and soy sauce, it's light yet flavorful.",
        image: "/images/country/malaysia/food/hainese_checken_rice.jpg",
        imageCreditHTML: `
          Photo by  <a  target="_blank "href="https://www.pexels.com/@change-c-c-974768353/">Change C.C</a> on <a target="_blank" href="https://www.pexels.com/photo/hainanese-chicken-rice-with-fresh-vegetables-30120279/"><u>Pexels</u></a>
          `,
      },
      {
        id: 13,
        name: "Ikan Bakar",
        description:
          "Ikan Bakar, or grilled fish, is a smoky and spicy seafood dish perfect for lunch or dinner by the beach or at a night market. Fresh whole fish like stingray or mackerel is marinated with turmeric, chili paste, and spices, then wrapped in banana leaves and grilled over charcoal.",
        image: "/images/country/malaysia/food/ikan_bakar.jpg",
        imageCreditHTML: `
            <a href="https://commons.wikimedia.org/wiki/File:Gurame_bakar_kecap_2.JPG"><u>Gunawan Kartapranata</u></a>, <a href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons
          `,
      },
      {
        id: 14,
        name: "Nasi Campur",
        description:
          "Nasi Campur, or 'mixed rice,' is a highly customizable Malaysian meal where you pick a portion of rice and choose from a variety of sides like curries, stir-fried vegetables, fried chicken, sambal, eggs, tofu, and more.",
        image: "/images/country/malaysia/food/nasi_campur.jpg",
        imageCreditHTML: `
            <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Nasi_Campur.jpg"><u>Fei Tan</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by/2.0"><u>CC BY 2.0</u></a>, via Wikimedia Commons
          `,
      },
      {
        id: 15,
        name: "Nasi Dalca",
        description:
          "Nasi Dalca is a flavorful Malaysian-Indian dish combining spiced rice with dalca, a thick mildly spiced lentil and vegetable curry. The rice is often cooked with aromatic spices and served with additional curries, pickles, and fried chicken or beef.",
        image: "/images/country/malaysia/food/nasi_dalca.jpg",
        imageCreditHTML:
          "Photo by <a target='_blank' href='https://unsplash.com/@yosuke_ota?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Yosuke Ota</u></a> on <a target='_blank' href='https://unsplash.com/photos/a-plate-of-food-kK-ARrS8ieo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Unsplash</u></a>",
      },
    ],
  },
  {
    id: "street-food",
    title: "Street Food",
    description:
      "Experience Malaysia's vibrant street food scene with these popular snacks and quick bites.",
    items: [
      {
        id: 16,
        name: "Satay",
        description:
          "Satay is one of Malaysia's most iconic street foods, skewers of marinated meat (usually chicken or beef) grilled over open flames and served with a rich peanut sauce, cucumber, onions, and compressed rice cakes (ketupat).",
        image: "/images/country/malaysia/food/satay.jpg",
      },
      {
        id: 17,
        name: "Rojak",
        description:
          "Rojak is a bold, tangy Malaysian fruit and vegetable salad that's a true flavor bomb. Commonly made with cucumber, jicama, pineapple, tofu puffs, and dough fritters, it's tossed in a thick shrimp paste sauce blended with sugar, chili, and lime.",
        image: "/images/country/malaysia/food/rujak.jpg",
      },
      {
        id: 18,
        name: "Roti John",
        description:
          "Roti John is a uniquely Malaysian street food sandwich, especially popular in night markets and pasar malam. It features a baguette-like bun filled with minced meat (chicken or beef), egg, onions, and sometimes sardines, all fried on a hot griddle.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: 19,
        name: "Murtabak",
        description:
          "Murtabak is a thick, stuffed pan-fried flatbread that's popular across Malaysia, especially during Ramadan and at night bazaars. It's filled with spiced minced meat (usually beef or chicken), eggs, and onions, folded in a thin dough, and griddled until golden brown.",
        image: "/images/country/malaysia/food/martabak.jpg",
      },
      {
        id: 20,
        name: "Roti Tisu",
        description:
          "Roti Tisu, or 'tissue bread,' is a paper-thin, crispy version of roti canai, stretched into a tall cone or large triangle and caramelized with sugar, butter, or sweetened condensed milk.",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  {
    id: "vegetarian",
    title: "Vegetarian Options",
    description:
      "Discover delicious vegetarian dishes across Malaysia's diverse culinary landscape.",
    items: [
      {
        id: 21,
        name: "Banana Leaf Rice",
        description:
          "Banana Leaf Rice is a traditional South Indian vegetarian meal widely available in Malaysian Indian restaurants. Served on a banana leaf, it typically includes white or parboiled rice, various vegetable curries, pickles, papadum, and dhal.",
        image: "/images/country/malaysia/food/banana_leaf_rice.jpg",
        imageCreditHTML: `
            <a target="_blank" href="https://commons.wikimedia.org/wiki/File:%E0%B2%AC%E0%B2%BE%E0%B2%B3%E0%B3%86%E0%B2%B2%E0%B3%86_%E0%B2%8A%E0%B2%9F_(Banana_leaf_meal).jpg"><u>Codegeass123</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons
          `,
      },
      {
        id: 22,
        name: "Vegetarian Mee Goreng",
        description:
          "Mee Goreng can easily be made vegetarian and is widely available at Indian-Muslim (mamak) eateries and vegetarian stalls. Made with yellow noodles stir-fried in a mix of soy sauce, ketchup, and chili, it's tossed with tofu, cabbage, bean sprouts, and sometimes potatoes or tomatoes.",
        image: "/images/country/malaysia/food/mee_goreng.jpg",
        imageCreditHTML:
          "Photo by <a target='_blank' href='https://unsplash.com/@eprayatama?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>R Eris</u></a> on <a target='_blank' href='https://unsplash.com/photos/a-plate-of-food-on-a-table-with-utensils-i5XurHSjE1M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Unsplash</u></a>",
      },
      {
        id: 23,
        name: "Putu Mayam",
        description:
          "Putu Mayam (also known as Idiyappam) is a light, sweet South Indian-inspired breakfast or snack, often enjoyed by vegetarians. It consists of fine rice flour noodles served cold with shredded coconut and brown palm sugar.",
        image: "/images/country/malaysia/food/putu_mayam.jpg",
        imageCreditHTML:
          "Photo by <a target='_blank' href='https://unsplash.com/@yosuke_ota?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Yosuke Ota</u></a> on <a target='_blank' href='https://unsplash.com/photos/a-plate-of-food-kK-ARrS8ieo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Unsplash</u></a>",
      },
      {
        id: 24,
        name: "Popiah",
        description:
          "Popiah is a fresh spring roll made with a thin crepe-like skin and filled with a mix of shredded jicama, carrots, tofu, and lettuce. Vegetarian versions exclude meat and sometimes include mushrooms, bean curd, or glass noodles.",
        image: "/images/country/malaysia/food/popiah.jpg",
        imageCreditHTML:
          "<a target='_blank' href='https://commons.wikimedia.org/wiki/File:Lumpia_at_Teh_Jawa,_Purwokerto_Station,_Purwokerto_2015-03-20.jpg'><u>Crisco 1492</u></a>, <a target='_blank' href='https://creativecommons.org/licenses/by-sa/4.0'><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    description:
      "Quench your thirst with Malaysia's refreshing and unique beverages.",
    items: [
      {
        id: 25,
        name: "Teh Tarik",
        description:
          "Teh Tarik is Malaysia's national drink, a frothy, creamy pulled milk tea made with strong black tea and condensed milk. The name means 'pulled tea,' referring to the dramatic pouring technique between two cups, which cools and aerates the drink, creating its signature foam.",
        image: "/images/country/malaysia/food/teh_tarik.jpg",
        innerCreditHTML: `
            <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Teh_tarik_2.jpg"><u>Alpha from Melbourne, Australia</u></a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/2.0"><u>CC BY-SA 2.0</u></a>, via Wikimedia Commons
          `,
      },
      {
        id: 26,
        name: "Kopi",
        description:
          "Kopi is the traditional Malaysian-style black coffee, robust and often served sweet with condensed or evaporated milk. Brewed using a cloth coffee sock and dark roasted beans (sometimes with added margarine during roasting), it offers a bold, smoky flavor.",
        image: "/images/country/malaysia/food/kopi.jpg",
        imageCreditHTML:
          "Photo by <a target='_blank' href='https://unsplash.com/@le_y0u?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>You Le</u></a> on <a target='_blank' href='https://unsplash.com/photos/a-red-plate-topped-with-meat-covered-in-sauce-syjj30AYKRM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'><u>Unsplash</u></a>",
      },
      {
        id: 27,
        name: "Air Mata Kucing",
        description:
          "Air Mata Kucing is a traditional Malaysian herbal drink made from dried longan, monk fruit (luo han guo), and winter melon. This naturally sweet, cooling drink is popular in hot weather for its refreshing taste and health benefits.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: 28,
        name: "Sirap Bandung",
        description:
          "Sirap Bandung is a bright pink, sweet drink made with rose syrup and evaporated or condensed milk, creating a creamy, floral-flavored treat. Popular during festive seasons like Hari Raya and found at roadside drink stalls.",
        image: "/images/country/malaysia/food/sirap_bandung.jpg",
        imageCreditHTML:
          "<a target = “_blank” href='https://www.freepik.com/free-photo/large-glass-strawberry-milkshake-with-colorful-straws_10991607.htm#fromView=search&page=1&position=0&uuid=928f7d80-39bd-4ffa-82c2-d54604f338b2&query=Sirap+Bandung'><u>Image by Jcomp on Freepik</u></a>",
      },
      {
        id: 29,
        name: "Milo Ais",
        description:
          "Milo Ais is Malaysia's beloved iced chocolate malt drink, made with Milo powder, condensed milk, and ice—perfectly sweet and energizing. Loved by kids and adults alike, it's commonly available at school canteens, mamak stalls, and kopitiams.",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    description:
      "Satisfy your sweet tooth with Malaysia's delightful desserts and sweet treats.",
    items: [
      {
        id: 30,
        name: "Marshmallow Ice Cream",
        description:
          "Marshmallow Ice Cream is a playful and indulgent treat that's gaining popularity in trendy cafes and dessert stalls across Malaysia. This creamy dessert combines soft, fluffy marshmallows with rich, milky ice cream, often topped with rainbow sprinkles, chocolate sauce, or crushed cookies.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: 31,
        name: "Apam Balik",
        description:
          "Apam Balik is a beloved Malaysian street dessert—crispy on the outside and soft on the inside. This thick pancake is filled with a mix of crushed peanuts, sugar, and sweet corn, though modern versions include chocolate, banana, or Nutella.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: 32,
        name: "Kek Lapis Sarawak",
        description:
          "Kek Lapis Sarawak is a vibrant layered cake native to Sarawak, East Malaysia. Known for its eye-catching colors and intricate patterns, this moist, rich cake is made with butter, eggs, and a blend of spices or fruit flavors.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: 33,
        name: "Ais Kacang",
        description:
          "Ais Kacang (or ABC) is a colorful mountain of shaved ice topped with red beans, sweet corn, grass jelly, peanuts, and drizzled with syrup and condensed milk. Sometimes enriched with attap seeds or ice cream, it's one of Malaysia's most iconic desserts.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: 34,
        name: "Kuih-Muih",
        description:
          "Kuih-Muih is a general term for the wide variety of bite-sized traditional Malaysian cakes and snacks, often made with rice flour, coconut milk, and palm sugar. Common types include Kuih Seri Muka, Kuih Lapis, and Ondeh-Ondeh.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: 35,
        name: "Cendol",
        description:
          "Cendol is a refreshing iced dessert made with pandan-flavored green jelly noodles, coconut milk, palm sugar syrup (gula Melaka), and shaved ice. Often topped with red beans, glutinous rice, or even durian, Cendol is creamy, sweet, and slightly salty.",
        image: "/images/country/malaysia/food/cendol.jpg",
        imageCreditHTML: `
            Image by <a target="_blank" href="https://pixabay.com/users/cegoh-94852/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=837368"><u>Jason Goh</u></a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=837368"><u>Pixabay</u></a>
          `,
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    description:
      "Complement your main dishes with these delicious Malaysian side dishes.",
    items: [
      {
        id: 36,
        name: "Sambal Udang",
        description:
          "Sambal Udang is a spicy, flavorful Malaysian side dish made from prawns cooked in a rich sambal sauce. This dish combines the sweetness of fresh prawns with the heat of chili, garlic, tamarind, and belacan (fermented shrimp paste).",
        image: "/images/country/malaysia/food/sambal_udang.jpg",
        imageCreditHTML: `
            <a target=”_blank” href="https://commons.wikimedia.org/wiki/File:SAMBAL_BALADO_TERONG_UDANG.jpg"><u>Windi Utari</u></a>, <a href="https://creativecommons.org/licenses/by-sa/4.0"><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons
          `,
      },
      {
        id: 37,
        name: "Lemang",
        description:
          "Lemang is a traditional Malay delicacy made of glutinous rice, coconut milk, and salt, cooked slowly in bamboo over an open fire. Often enjoyed during festive seasons like Hari Raya, Lemang has a smoky aroma and sticky texture.",
        image: "/images/country/malaysia/food/lemang.jpg",
        imageCreditHTML:
          "<a target = “_blank” href='https://commons.wikimedia.org/wiki/File:Lemang_dihidang_bersama_rendang_ayam.jpg'><u>Puiyean88</u></a>, <a target = “_blank” href='https://creativecommons.org/licenses/by-sa/4.0'><u>CC BY-SA 4.0</u></a>, via Wikimedia Commons",
      },
      {
        id: 38,
        name: "Ayam Goreng",
        description:
          "Ayam Goreng, or Malaysian-style fried chicken, is a crunchy and juicy side dish commonly served with rice dishes. Marinated in turmeric, chili, garlic, and spices, the chicken is deep-fried to golden perfection.",
        image: "/images/country/malaysia/food/ayam_goreng.jpg",
        imageCreditHTML:
          "<a target = “_blank” href='https://www.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_6632395.htm#fromView=search&page=1&position=1&uuid=e1be4c2b-2eb6-4d18-8322-424d0163bcd4&query=Ayam+goreng'><u>Image by jcomp on Freepik</u></a>",
      },
      {
        id: 39,
        name: "Durian",
        description:
          "Durian is often called Malaysia's most controversial fruit, famously known as the 'King of Fruits'. Its strong aroma and custard-like texture spark passionate reactions—people either love it or loathe it.",
        image: "/images/country/malaysia/food/durian.jpg",
      },
    ],
  },
];

export const MALAYSIA_PLACES_TO_VISIT = [
  {
    id: 1,
    name: "Kuala Lumpur",
    description:
      "Kuala Lumpur, the capital city of Malaysia, is a dynamic blend of modern architecture, cultural landmarks, and street food delights. Gaze up at the Petronas Towers, roam the Batu Caves, and shop till you drop in Bukit Bintang. Savor street food in Jalan Alor and experience the soul of Malaysia in Chinatown and Little India. Locals proudly embrace their multicultural identity, creating a vibrant tapestry of flavors, festivals, and warmth that makes every moment here special.",
    image: "/images/country/malaysia/places/kuala_lumpur/kuala_lumpur.png",
    otherInfo: {
      must_do: `Visit KL Tower At sunset, Nightlife at Changkat Avenue, check out all the <a target="_blank" href="/malaysia/kuala-lumpur/top-things-to-do" class="text-teal-600 underline font-medium">top things to do in Kuala Lumpur</a> `,
      time_to_visit:
        "hot and humid year-round, May-July and November-February experience less rainfall",
      how_to_reach:
        "Flights are available to Kuala Lumpur International Airport",
      guide_text: "Visit our detailed Kuala Lumpur travel guide with tips",
      guide_link: "/malaysia/kuala-lumpur/travel-guide",
    },
  },
  {
    id: 2,
    name: "George Town, Penang",
    description:
      "George Town in Penang is a UNESCO World Heritage Site known for its vibrant street art, colonial buildings, and exceptional street food. A top cultural destination in Malaysia, it offers attractions like Kek Lok Si Temple, Penang Hill, and the Blue Mansion. The city is famous for dishes like char kway teow and Penang laksa. Locals here fiercely preserve their Hokkien, Tamil, and Peranakan traditions. Whether you're exploring museums or wandering Armenian Street, George Town is a must-visit place in Malaysia for history lovers, foodies, and photographers.",
    image: "/images/country/malaysia/places/penang/penang.jpg",
    otherInfo: {
      must_do: `
       Explore the street art while taking stoppage to try local food, Explore Jetties, Hike up to Penang Hills, check out all the <a target="_blank" href="/malaysia/penang/top-things-to-do" class="text-teal-600 underline font-medium">top things to do in Penang</a>

      `,
      time_to_visit:
        "hot and humid year-round, November-February for slightly cooler weather",
      how_to_reach: "Flights from Kuala Lumpur are frequently available",
      guide_text:
      `Visit our detailed <a href="/malaysia/penang/travel-guide" target="_blank" class="text-teal-600 underline">Penang travel guide</a> and things to keep in mind for quick tips`,
    },
  },
  {
    id: 3,
    name: "Langkawi",
    description:
      "Langkawi's charm lies in its emerald waters, lush rainforests, and a laid-back vibe that slows down time. A must-include in any Malaysia travel itinerary, It's one of the most beautiful places offering attractions like the Langkawi Sky Bridge, Pantai Cenang, and Kilim Geoforest Park. Langkawi is also a duty-free island, perfect for shopping and island hopping. The island community is deeply connected to nature, making eco-tourism not just a trend but a way of life. Every sunset feels like your own private paradise.",
    image: "/images/country/malaysia/places/langkawi/langkawi_banner.jpg",
    otherInfo: {
      must_do: `
      Take one of the steepest Cable Car in the world to reach Langkawi Sky Bridge, eat & shop at the Night markets,  check out all the <a target="_blank" href="/malaysia/langkawi/top-things-to-do" class="text-teal-600 underline font-medium">top things to do in langkawi</a>
      `,
      time_to_visit: "November to March",
      how_to_reach: "Flights from Kuala Lumpur, Ferries from Kuala Perlis",
      guide_text: "Visit our detailed Langaki travel guide and things to do",
      guide_link: "/malaysia/langkawi/travel-guide",
    },
  },
  {
    id: 4,
    name: "Sipadan Island",
    description:
      "Sipadan Island is not only Malaysia's but also one of the world's top dive destinations, located off the coast of Sabah in Malaysian Borneo. Known for its crystal-clear waters and exceptional biodiversity, divers encounter turtles, reef sharks, barracudas, and swirling schools of fish. Access is limited daily to preserve its marine ecosystem, making each dive exclusive. Locals and marine authorities proudly protect Sipadan's pristine beauty. For those seeking an untouched, elite underwater experience, Sipadan is Malaysia's ultimate treasure.",
    image:
      "/images/country/malaysia/places/sipadan_islands_places_to_visit.jpg",
    otherInfo: {
      must_do: "Scuba dive with turtles and barracudas",
      time_to_visit: "April–October",
      how_to_reach:
        "Fly to Tawau Airport → Drive to Semporna → Boat to Sipadan, permit required",
    },
  },
  {
    id: 5,
    name: "Melaka (Malacca)",
    description:
      "Melaka is a historic city and UNESCO World Heritage Site, it is a living museum where Portuguese, Dutch, British, and Malay cultures intertwine. Stroll along Jonker Street's buzzing night market, explore centuries-old churches and forts, and dive into local flavors like satay celup. Melaka is ideal for cultural sightseeing, food hunting, and weekend trips from Kuala Lumpur. A must-visit for heritage lovers exploring Malaysia.",
    image: "/images/country/malaysia/places/melaka/melaka_places_to_visit.jpg",
    otherInfo: {
      must_do: "Take a Malacca River Cruise, Shop & eat at Jonker Street",
      time_to_visit: "December-May, slightly cooler",
      how_to_reach: "2 Hours drive from Kuala Lumpur",
      guide_text: "Visit our detailed Malacca guide and things to do",
      guide_link: null,
    },
  },
  {
    id: 6,
    name: "Perhentian Islands",
    description:
      "Located off the east coast in Terengganu, these islands offer crystal-clear waters, white sandy beaches, and laid-back vibes. The island is primarily made up of two main parts: Pulau Besar (the larger island) and Pulau Kecil (the smaller island). Ideal for budget travelers and beginners in snorkeling or scuba diving, it's a top destination for marine life lovers looking to explore coral reefs and chill in beachfront chalets.",
    image: "/images/country/malaysia/places/perhentian/perhentian_banner.jpg",
    otherInfo: {
      must_do: `
      Island Hopping, Explore Underwater world and enjoy the laid-back vibes, check out all the <a target="_blank" href="/malaysia/perhentian-islands/top-things-to-do" class="text-teal-600 underline font-medium">top things to do in Perhentian Islands</a>
      `,
      time_to_visit: "March-November",
      how_to_reach: "Ferries from Kuala Besut or Kuala Terengganu",
      guide_text:
        "Visit our detailed Perhentian Island travel guide and things to do",
      guide_link: "/malaysia/perhentian-islands/travel-guide",
    },
  },
  {
    id: 7,
    name: "Kota Kinabalu",
    description:
      "Kota Kinabalu, the capital of Sabah in Malaysian Borneo, is a gateway to Mount Kinabalu and Tunku Abdul Rahman Marine Park. It's one of the top destinations in East Malaysia for nature, island hopping, and cultural experiences. Wander through local fish markets, where the community's Sabahan pride is evident in every smile and spicy sambal. Whether you're diving, hiking, or relaxing by the beach, Kota Kinabalu offers a diverse and memorable Malaysian travel experience.",
    image: "/images/country/malaysia/places/kota_kinabalu_places_to_visit.jpg",
    otherInfo: {
      must_do:
        "Climb Mount Kinabalu, Try local Sabahan food, ExploreKinabalu Park",
      time_to_visit: "February-August",
      how_to_reach: "Fly directly to Kota Kinabalu International Airport",
      guide_text: "Optional",
      guide_link: null,
    },
  },
  {
    id: 8,
    name: "Kuala Terengganu",
    description:
      "Kuala Terengganu is a coastal city known for its Islamic heritage, crystal mosque, and access to islands like Redang and Perhentian. It's a culturally rich destination in East Coast Malaysia with traditional Malay villages, colorful street art, and local markets. Don't miss Chinatown and the Terengganu State Museum. Ideal as a base to explore Terengganu's beaches and islands. It's Malaysia's east coast at its most authentic and serene.",
    image:
      "/images/country/malaysia/places/kuala_terengganu_places_to_visit.jpg",
    otherInfo: {
      must_do: "Visit Crystal Mosque, Take a walk around Pasar Payang",
      time_to_visit: "February-August",
      how_to_reach: "Fly to Sultan Mahmud Airport, 450km from Kuala Lumpur",
      guide_text: "Used as gateway to Perhentian & Redand Islands",
      guide_link: null,
    },
  },
  {
    id: 9,
    name: "Ipoh",
    description:
      "Ipoh, the capital of Perak, is gaining popularity for its colonial charm, cave temples, and famous food scene. Stroll through Old Town's street art and heritage shophouses, then explore limestone caves like Kek Lok Tong. The city's blend of Cantonese roots and chill pace has won over travelers seeking food, stories, and calm beauty wrapped in history. Great for weekend getaways and cultural exploration.",
    image: "/images/country/malaysia/places/ipoh_places_to_visit.jpg",
    otherInfo: {
      must_do:
        "Visit Kek Lok Tong Cave Temple, Try Ipoh white coffee and bean sprout chicken",
      time_to_visit: "All year round",
      how_to_reach:
        "2.5–3 hour drive from Kuala Lumpur or take the ETS train to Ipoh Railway Station",
    },
  },
  {
    id: 10,
    name: "Cameron Highlands",
    description:
      "Perfect for those looking to escape the heat, Cameron Highlands is Malaysia's breezy hill station, where misty mornings roll over emerald tea plantations. Walk through mossy forests, pick strawberries fresh from local farms, and sip hot tea with a panoramic view. The local Orang Asli communities and generations-old farmers create a lifestyle rooted in nature. It's a refreshing escape into greenery, tradition, and tranquility.",
    image:
      "/images/country/malaysia/places/cameron_islands_places_to_visit.jpg",
    otherInfo: {
      must_do:
        "Visit Boh Tea Plantation, explore Mossy Forest, and go strawberry picking",
      time_to_visit: "February-April and September-November",
      how_to_reach: "4 Hours drive or Take Bus from Kuala Lumpur",
      guide_text: "Optional",
      guide_link: null,
    },
  },
  {
    id: 11,
    name: "Lankayan Island",
    description:
      "Lankayan Island is a secluded coral jewel in the Sulu Sea, perfect for divers and serenity seekers. Known for its turtle hatcheries and macro marine life, it offers a tranquil escape with only one eco-resort on the island. Mornings are for diving, afternoons for relaxing on powdery white sands, and evenings for watching baby turtles return to the sea. The island's tight-knit local staff and conservation efforts reflect its slow, thoughtful rhythm of life.",
    image:
      "/images/country/malaysia/places/lankayan_island_top_places_to_visit.jpg",
    otherInfo: {
      must_do:
        "Dive at shipwrecks, Watch turtle hatchlings, Enjoy beach solitude",
      time_to_visit: "March–October",
      how_to_reach: "Fly to Sandakan → Boat transfer to island (via resort)",
      guide_text: "Optional",
      guide_link: null,
    },
  },
  {
    id: 12,
    name: "Johor Bahru (JB)",
    description:
      "Johor Bahru is a dynamic southern city that blends modern attractions with heritage charm. It's known for being the gateway to Singapore, Legoland Malaysia, lively street food, and royal palaces. Explore local Malay-Chinese eateries, stroll along Jalan Tan Hiok Nee, or catch a glimpse of history at Sultan Abu Bakar Mosque. The city's blend of cultures, shopping, and family-friendly fun makes it one of Malaysia's rising urban destinations.",
    image: "/images/country/malaysia/places/johor_bahru_places_to_visit.jpg",
    otherInfo: {
      must_do:
        "Visit Legoland Malaysia, Explore Johor Bahru Old Chinese Temple",
      time_to_visit: "All year round",
      how_to_reach:
        "Fly to Senai International Airport or drive from Singapore via the Causeway",
      guide_text: "Optional",
      guide_link: null,
    },
  },
  {
    id: 13,
    name: "Tioman Island",
    description:
      "Tioman Island is a tropical paradise off Peninsular Malaysia's east coast, known for lush jungles, coral-rich waters, and laid-back villages. It's popular among backpackers and divers alike. With duty-free status, scenic beaches, and warm local hospitality from small fishing communities, Tioman feels both wild and welcoming. Whether you're snorkeling near Salang or relaxing in Juara, the island moves at a gentler, nature-first pace.",
    image: "/images/country/malaysia/places/tioman_places_to_visit.jpg",
    otherInfo: {
      must_do: "Snorkel in Salang, Trek through the jungle to waterfalls",
      time_to_visit: "March–October",
      how_to_reach:
        "Ferry from Mersing Jetty or fly to Tioman via small charter flights",
      guide_text: "Optional",
      guide_link: null,
    },
  },
  {
    id: 14,
    name: "Genting Highlands",
    description:
      "Genting Highlands is a cool-climate mountain resort just an hour’s drive from Kuala Lumpur, offering a refreshing escape from the city heat. Set atop lush forested hills, it combines natural beauty with high-altitude thrills featuring indoor and outdoor theme parks, a world-class casino, luxury hotels, shopping malls, and lively entertainment. The scenic Genting Skyway cable car ride is an experience in itself, providing sweeping views of the rainforest below.",
    image:
      "/images/country/malaysia/places/kuala_lumpur/blog/genting_highlands.jpg",
    otherInfo: {
      must_do:
        "Ride the Genting Skyway, Visit SkyWorlds Theme Park, Explore Chin Swee Caves Temple",
      time_to_visit: "March–September for cool, dry weather",
      how_to_reach:
        " Drive or take a bus from KL to Awana Station, then ride the Genting Skyway cable car",
      guide_text: "Visit our detailed Genting Highlands guide and things to do",
      guide_link: null,
    },
  },
  {
    id: 15,
    name: "Redang Island",
    description:
      "Redang Island is probably the best place for underwater activities like scuba, snorkeling, sea turtles, and underwater photography in the whole of Western Malaysia. Known for its turquoise waters, luxury resorts, and vibrant coral reefs, it is ideal for intermediate or advanced divers. With its soft white sands and upscale accommodations, Redang attracts both couples and families.",
    image: "/images/country/malaysia/places/perhentian/blog/redang_trip.jpg",
    otherInfo: {
      must_do: "Scuba Diving, Snorkeling and stay at luxury beachfront resorts",
      time_to_visit: "March-November",
      how_to_reach: "Ferries from Kuala Besut or Kuala Terengganu",
      guide_text: "Visit our detailed Perhentian Island guide and things to do",
      guide_link: "/malaysia/perhentian-islands/travel-guide",
    },
  },
];

export const MALAYSIA_SCUBA_BLOG = {
  heading: "Best Places for Scuba Diving in Malaysia",
  image: "/images/country/malaysia/malaysia_scuba_banner.jpg",
  description: "Best Places for Scuba Diving in Malaysia",
  overview:
    "Malaysia is a top-tier scuba diving destination, known for its clear tropical waters, diverse marine life, and well-preserved coral reefs. The country offers a wide range of dive experiences suitable for all levels, from colorful shallow reefs perfect for beginners to deeper sites teeming with pelagic species for advanced divers. Malaysia’s marine environments are rich in biodiversity, featuring everything from sea turtles and reef sharks to rare macro species like nudibranchs and frogfish. Professional dive centers, eco-resorts, and conservation efforts further enhance the experience. Whether you're looking for vibrant coral gardens, underwater photography opportunities, or thrilling wall dives, Malaysia has it all.",
  data: [
    {
      id: 1,
      title: "Sipadan Island",
      description: `
    Sipadan Island is often hailed as not only Malaysia’s but one of the world’s best dive sites, thanks to its dramatic wall dives and extraordinary marine biodiversity. Surrounded by deep waters, it's home to large schools of barracudas, reef sharks, sea turtles, and countless tropical fish. The island's reefs drop steeply into the abyss, making it ideal for drift and deep dives. With strict conservation rules, only 176 divers are allowed per day, ensuring a pristine underwater environment.
    <br />
    <br />
    <b >Best Time to Dive</b>: April to December, Peak diving conditions occur between July and August when visibility is at its highest.
    <br />
    <br />
    <b >Experience Level</b>: Intermediate to Advanced
    `,
      image: "/images/country/malaysia/scuba/sipadan_island_scuba.jpg",
      tips: [
        `Need to book Diving packages which often include accommodation, meals, equipment rental, and boat transfers`,
        `Strong currents, deep walls, and pelagic sightings make it ideal for certified and confident divers`,
        `Book in advance as diving is regulated with limited daily permits, making it both exclusive and relatively expensive`,
      ],
    },
    {
      id: 2,
      title: "Lankayan Island",
      description: `
    Lankayan is a tranquil dive destination known for its soft corals, macro life, and occasional whale shark sightings. Located within a protected marine reserve, the underwater environment remains unspoiled. Its calm, shallow waters also make it beginner-friendly.
    <br />
    <br />
    <b>Best Time to Dive</b>: March to October
    <br />
    <br />
    <b>Experience Level</b>: Beginner to Intermediate
    `,
      image: "/images/country/malaysia/places/lankayan_island_scuba.jpg",
      tips: [
        `For the chance to spot whale sharks, visit between March and May`,
      ],
    },
    {
      id: 3,
      title: "Layang Layang",
      description: `
    Layang Layang is a remote atoll famous for its deep-sea diving and pelagic sightings, especially hammerhead sharks during the migration season. Its steep underwater walls plunge to incredible depths, offering thrilling dives and excellent visibility. With minimal human impact, the coral reefs remain vibrant and full of life
    <br />
    <br />
    <b>Best Time to Dive</b>: March to May
    <br />
    <br />
    <b>Experience Level</b>: Advanced
    `,
      image: "/images/country/malaysia/places/lankayan_island_scuba.jpg",
      tips: [
        `Deep drop-offs and the potential for strong currents require solid diving skills and experience`,
        `This period coincides with the hammerhead shark migration, offering the most thrilling dive encounters`,
      ],
    },
    {
      id: 4,
      title: "Perhentian Islands",
      description: `
   The Perhentian Islands are perfect for beginner divers, with shallow reefs, calm waters, and affordable dive packages. Popular dive sites feature coral gardens, artificial reefs, and wrecks teeming with marine life. Dive schools here are known for quality instruction and budget-friendly options.
    <br />
    <br />
    <b>Best Time to Dive</b>: March to October
    <br />
    <br />
    <b>Experience Level</b>: Beginner to Intermediate
    `,
      image: "/images/country/malaysia/places/lankayan_island_scuba.jpg",
      tips: [
        `Read our detailed Perhentian guide`,
        `Great for learning to dive, with calm waters and many dive schools offering certification`,
      ],
    },
    {
      id: 5,
      title: "Islands of Mabul & Kapalai",
      description: `
   Mabul and Kapalai are world-famous for muck diving and macro photography. These islands boast sandy-bottom dive sites filled with rare critters such as frogfish, pipefish, and nudibranchs. Overwater bungalows and easy access to Sipadan make them a popular base for dive trips.
    <br />
    <br />
    <b>Best Time to Dive</b>: March to October, can enjoy diving year-round
    <br />
    <br />
    <b>Experience Level</b>: Beginner to Intermediate

    `,
      image: "/images/country/malaysia/places/lankayan_island_scuba.jpg",
    },
    {
      id: 6,
      title: "Mataking Island",
      description: `
    Mataking is a paradise for luxury dive getaways. Known for its coral diversity and macro life, it offers vibrant reef dives and the chance to explore Malaysia’s first underwater post office. The island connects to a smaller islet via a sandbar, adding to its charm both above and below water
    <br />
    <br />
    <b>Best Time to Dive</b>: March to October
    <br />
    <br />
    <b>Experience Level</b>: Beginner to Intermediate

    `,
      image: "/images/country/malaysia/places/lankayan_island_scuba.jpg",
      tips: [
        `Excellent for honeymooners and underwater photography enthusiasts`,
      ],
    },
    {
      id: 7,
      title: "Redang Island",
      description: `
      Redang is a marine park island featuring crystal-clear water, vibrant coral reefs, and abundant marine life. Dive sites include reef slopes and coral gardens perfect for all skill levels. The island is also ideal for snorkeling and offers great visibility during the dry season
    <br />
    <br />
    <b>Best Time to Dive</b>: March to October
    <br />
    <br />
    <b>Experience Level</b>: Beginner to Intermediate

    `,
      image: "/images/country/malaysia/places/lankayan_island_scuba.jpg",
    },
    {
      id: 8,
      title: "Tenggol Island",
      description: `
      Tenggol Island is a favorite among experienced divers for its challenging conditions and rich marine ecosystems. Its deeper sites, occasional strong currents, and sightings of large pelagic species like whale sharks make it a thrilling spot. The island's compact size means uncrowded dive experiences.
    <br />
    <br />
    <b>Best Time to Dive</b>: April to October
    <br />
    <br />
    <b>Experience Level</b>: Intermediate to Advanced

    `,
      image: "/images/country/malaysia/places/lankayan_island_scuba.jpg",
    },
    {
      id: 9,
      title: "Tioman Island",
      description: `
      Tioman Island features a mix of reef and wreck dives suitable for all levels. Its dive sites include coral gardens, rock formations, and artificial reefs that attract a wide range of marine species. With numerous dive centers, it’s an ideal spot for certifications and relaxed diving holidays
    <br />
    <br />
    <b>Best Time to Dive</b>: March to October
    <br />
    <br />
    <b>Experience Level</b>: Beginner to Intermediate

    `,
      image: "/images/country/malaysia/places/lankayan_island_scuba.jpg",
      tips: [
        `Accessible dive sites and plenty of training centers make it ideal for learning and fun dives`,
      ],
    },
    {
      id: 10,
      title: "Tunku Abdul Rahman Marine Park",
      description: `
      Just off the coast of a major city, this marine park offers easy access to dive sites ideal for beginners and casual divers. Expect shallow reefs, vibrant corals, and plenty of marine life close to shore. It’s perfect for short day trips and quick diving certifications
    <br />
    <br />
    <b>Best Time to Dive</b>: March to October
    <br />
    <br />
    <b>Experience Level</b>: Beginner

    `,
      image: "/images/country/malaysia/places/lankayan_island_scuba.jpg",
    },
    {
      id: 11,
      title: "Lang Tengah",
      description: `
      Lang Tengah offers a peaceful diving experience with fewer crowds and healthy coral reefs. Expect sightings of reef fish, turtles, and occasional blacktip sharks. Several dive sites are just minutes from the shore, making access easy
    <br />
    <br />
    <b>Best Time to Dive</b>: March to October
    <br />
    <br />
    <b>Experience Level</b>: Beginner

    `,
      image: "/images/country/malaysia/places/lankayan_island_scuba.jpg",
    },
  ],
};

export const MALAYSIA_DATA = {
  blogPost: [
    {
      slug: "top-things-to-do",
      title: "Top Things to do in Malaysia",
      image: "/images/country/malaysia/places/langkawi/blog/cenang_beach.jpg",
      description: `Top Things to do in Malaysia`,
      category: "Activities",
    },
    {
      slug: "kuala-lumpur/top-things-to-do",
      title: "Top Things to Do in Kuala Lumpur",
      image: "/images/country/malaysia/places/kuala_lumpur/kuala_lumpur.png",
      description: `Kuala Lumpur, Malaysia's dynamic capital city, offers an unforgettable blend of cultures, cuisines, and contrasts. As a global hub in Southeast Asia, it effortlessly fuses cutting-edge modernity with deep-rooted tradition. Towering over the skyline are the world-famous Petronas Twin Towers, a symbol of Malaysia's rapid development, while just a short distance away, colonial-era buildings like the Sultan Abdul Samad Building reflect the city's British heritage.
Kuala Lumpur is a melting pot of Malay, Chinese, and Indian cultures, which is vividly expressed through its architecture, festivals, and especially its cuisine. Food is a major attraction—visitors can enjoy everything from spicy street fare in Jalan Alor and traditional dishes at Kampung Baru, to high-end dining in the city's many rooftop restaurants.
`,
      category: "Activities",
    },
    {
      slug: "penang/top-things-to-do",
      title: "Top Things to Do in Penang",
      image: "/images/country/malaysia/places/penang/penang.jpg",
      description: `Penang, a state on Malaysia's northwest coast, is known for its stunning beaches, historic Georgetown, and the UNESCO World Heritage–listed Penang Hill.`,
      category: "Activities",
    },
    {
      slug: "langkawi/top-things-to-do",
      title: "Top Things to Do in Langkawi",
      image: "/images/country/malaysia/places/langkawi/langkawi_banner.jpg",
      description: `Langkawi, Malaysia's largest island, is known for its lush rainforests, crystal-clear waters, and laid-back vibe. The island is home to the Langkawi Sky Bridge, a must-visit attraction for its breathtaking views. Langkawi is also known for its duty-free shopping and delicious local cuisine.`,
      category: "Activities",
    },
    {
      slug: "perhentian-islands/top-things-to-do",
      title: "Top Things to Do in Perhentian Islands",
      image: "/images/country/malaysia/places/perhentian/perhentian_banner.jpg",
      description: `Perhentian Islands, located off the east coast of Malaysia, is known for its crystal-clear waters, white sandy beaches, and laid-back vibes. The island is primarily made up of two main parts: Pulau Besar (the larger island) and Pulau Kecil (the smaller island). Ideal for budget travelers and beginners in snorkeling or scuba diving, it's a top destination for marine life lovers looking to explore coral reefs and chill in beachfront chalets.`,
      category: "Activities",
    },
  ],

  cities: [
    {
      placeName: "Kuala Lumpur",
      slug: "kuala-lumpur",
      name: "Things to Do in Kuala Lumpur",
      overview: `Kuala Lumpur offers a dynamic mix of experiences perfect for travelers seeking culture, shopping, and urban adventure. Visitors can admire stunning city views from towering observation decks, explore vibrant neighborhoods rich in heritage, and discover impressive architecture blending tradition and modernity. The city’s bustling streets are filled with flavorful street food, colorful markets, and trendy cafes. Cultural attractions like historic temples, mosques, and museums provide a deeper understanding of Malaysia’s diverse roots. For shopping enthusiasts, world-class malls and local bazaars offer everything from luxury brands to handcrafted souvenirs. Whether you're into nightlife, history, or food, this energetic capital has something for everyone and is a must-visit destination in Southeast Asia.`,
      image: "/images/country/malaysia/places/kuala_lumpur/kuala_lumpur.png",
      description: `Kuala Lumpur, Malaysia's dynamic capital city, offers an unforgettable blend of cultures, cuisines, and contrasts. As a global hub in Southeast Asia, it effortlessly fuses cutting-edge modernity with deep-rooted tradition. Towering over the skyline are the world-famous Petronas Twin Towers, a symbol of Malaysia's rapid development, while just a short distance away, colonial-era buildings like the Sultan Abdul Samad Building reflect the city's British heritage.
Kuala Lumpur is a melting pot of Malay, Chinese, and Indian cultures, which is vividly expressed through its architecture, festivals, and especially its cuisine. Food is a major attraction—visitors can enjoy everything from spicy street fare in Jalan Alor and traditional dishes at Kampung Baru, to high-end dining in the city's many rooftop restaurants.
`,
      featured: false,
      blogs: KAULA_LUMPUR_BLOG_POST,
      related_articles: KUALA_LUMPUR_RELATED_ARTICLES,
      travel_guide: KAULA_LUMPUR_TRAVEL_GUIDE,
    },
    {
      placeName: "Penang",
      slug: "penang",
      name: "Things to Do in Penang",
      overview: `Penang, often dubbed the "Pearl of the Orient," is one of Malaysia’s most exciting travel destinations, offering a unique blend of culture, heritage, nature, and food. The island is best known for its UNESCO-listed capital, Georgetown, where colonial architecture, vibrant street art, and multicultural influences come alive. Travelers are drawn to Penang for its rich history, diverse culinary scene(often considered Malaysia’s best) and stunning coastal landscapes. Penang is a must-visit destination in Southeast Asia for culture seekers, foodies, and beach lovers alike.`,
      image: "/images/country/malaysia/places/penang/penang.jpg",
      description: `Penang, often dubbed the "Pearl of the Orient," is one of Malaysia's most exciting travel destinations, offering a unique blend of culture, heritage, nature, and food. The island is best known for its UNESCO-listed capital, Georgetown, where colonial architecture, vibrant street art, and multicultural influences come alive. Travelers are drawn to Penang for its rich history, diverse culinary scene(often considered Malaysia's best) and stunning coastal landscapes. Penang is a must-visit destination in Southeast Asia for culture seekers, foodies, and beach lovers alike.`,
      blogs: PENANG_BLOG_POST,
      travel_guide: PENANG_TRAVEL_GUIDE,
      related_articles: PENANG_RELATED_ARTICLES,
    },
    {
      placeName: "Langkawi",
      slug: "langkawi",
      overview: `Langkawi offers a variety of exciting activities that cater to all types of travelers. Adventure seekers can enjoy breathtaking panoramic views from thrilling cable car rides and sky bridges that provide unmatched photo opportunities. Nature enthusiasts will love exploring unique geological formations, mangrove forests, and diverse wildlife through guided boat tours. For those looking to unwind, pristine beaches with soft white sand and crystal-clear waters offer perfect spots for sunbathing, swimming, and water sports. Visitors can also immerse themselves in vibrant local markets, sample delicious street food, and experience cultural performances that showcase the island’s rich heritage. With a blend of adventure, relaxation, and cultural experiences, this tropical paradise delivers unforgettable memories and is a top travel destination in Malaysia.
`,
      name: "Things to Do in Langkawi",
      image: "/images/country/malaysia/places/langkawi/langkawi_banner.jpg",
      related_articles: [],
      blogs: LANGKAWI_BLOG_POST,
      travel_guide: LANGKAWI_TRAVEL_GUIDE,
    },
    {
      placeName: "Perhentian Islands",
      slug: "perhentian-islands",
      overview: `
The Perhentian Islands are a tropical haven known for their crystal-clear waters, soft sandy beaches, and laid-back atmosphere. Perfect for snorkeling and diving, the vibrant coral reefs surrounding the islands are home to colorful marine life, including turtles and reef sharks. Nature lovers can enjoy jungle trekking through lush forests or kayaking along the coast for serene views and hidden coves. The islands also offer the ideal setting for beachside relaxation, with stunning sunsets and peaceful vibes. Whether you’re seeking an underwater adventure or simply want to unwind by the sea, this island escape is one of Malaysia’s top travel experiences.`,
      image: "/images/country/malaysia/places/perhentian/perhentian_banner.jpg",
      name: "Things to Do in Perhentian Islands",
      travel_guide: PERHENTIAN_ISLANDS_TRAVEL_GUIDE,
      blogs: PERHENTIAN_ISLANDS_BLOG_POST,
      related_articles: [],
    },
  ],

  related_articles: [
    {
      slug: "kuala-lumpur/top-things-to-do",
      title: "Top Things to Do in Kuala Lumpur",
      image: "/images/country/malaysia/places/kuala_lumpur/kuala_lumpur.png",
      category: "Activities",
    },
  ],

  travel_guide_blogs: {
    heading: "Things to Know Before Going to Malaysia",
    image: "/images/country/malaysia/travel_guide.jpg",
    description:
      "Essential travel tips, information, and advice for your trip to Malaysia",
    overview:
      "Essential travel tips, information, and advice for your trip to Malaysia",
    data: [
      {
        slug: "/malaysia/things-to-know-before-going",
        title: "Things to Know Before Going to Malaysia",
        image:
          "/images/country/malaysia/things_to_know_before_going_to_malaysia.jpg",
        description: "Travel Guide about Malaysia",
        category: "Travel Guide",
      },
      {
        slug: "/malaysia/kuala-lumpur/travel-guide",
        title: "Things to Know Before Going to Kuala Lumpur",
        image:
          "/images/country/malaysia/places/kuala_lumpur/things_to_know_before_going_to_kuala_lumpur.jpg",
        description: "Travel Guide about Kuala Lumpur",
        category: "Activities",
      },
      {
        slug: "/malaysia/langkawi/travel-guide",
        title: "Things to Know Before Going to Langkawi",
        image:
          "/images/country/malaysia/places/langkawi/travel_guide_banner.jpg",
        description: "Travel Guide about Langkawi",
        category: "Travel Guide",
      },
      {
        slug: "/malaysia/perhentian-islands/travel-guide",
        title: "Things to Know Before Going to Perhentian Islands",
        image:
          "/images/country/malaysia/places/perhentian/things_to_know_perhentian.jpg",
        description: "Travel Guide about Perhentian Islands",
        category: "Travel Guide",
      },
      {
        slug: "/malaysia/penang/travel-guide",
        title: "Things to Know Before Going to Penang",
        image:
          "/images/country/malaysia/places/penang/things_to_know_penang.jpg",
        description: "Travel Guide about Penang",
        category: "Travel Guide",
      },
    ],
  },

  what_to_eat: {
    heading: "What to Eat in Malaysia",
    image: "/images/country/malaysia/what_to_eat.jpg",
    description:
      "Malaysia's cuisine is a vibrant tapestry of flavors, influenced by its rich cultural heritage and abundant local ingredients. From street food stalls to high-end restaurants, the food scene offers something for every palate and budget. Here are some must-try dishes during your visit.",
    overview:
      "Malaysia's cuisine is a vibrant tapestry of flavors, influenced by its rich cultural heritage and abundant local ingredients. From street food stalls to high-end restaurants, the food scene offers something for every palate and budget. Here are some must-try dishes during your visit.",
    data: MALAYSISA_FOOD_DATA,
    related_articles: [
      {
        slug: "kuala-lumpur/top-things-to-do",
        title: "Top Things to Do in Kuala Lumpur",
        image: "/images/country/malaysia/places/kuala_lumpur/kuala_lumpur.png",
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
    {
      slug: "/malaysia/complete-food-guide",
      title: "A Complete Food Guide",
      description: "A Complete Food Guide of what to eat in Malaysia",
      image: "/images/country/malaysia/food_guide.jpg",
      category: "Food Guide",
    },
  ],

  latestBlogs: [
    {
      slug: "/malaysia/top-things-to-do",
      title: "Top Things to do in Malaysia",
      image: "/images/country/malaysia/top_things_do_malaysia.jpg",
      description: `Top Things to do in Malaysia`,
      category: "Activities",
    },
    {
      slug: "/malaysia/best-places-for-scuba",
      title: "Best Places for Scuba Diving in Malaysia",
      image: "/images/country/malaysia/malaysia_scuba_banner.jpg",
      description: "Best Places for Scuba Diving in Malaysia",
      category: "Activities",
    },
    {
      slug: "/malaysia/places-to-visit",
      title: "Top places to visit in Malaysia",
      image: "/images/country/malaysia/places_to_visit.jpg",
      description: `Best places to vist in Malaysia`,
      category: "Activities",
    },
    {
      slug: "/malaysia/what-to-eat",
      title: "What to Eat in Malaysia",
      image: "/images/country/malaysia/what_to_eat.jpg",
      description: `Penang, a state on Malaysia's northwest coast, is known for its stunning beaches, historic Georgetown, and the UNESCO World Heritage–listed Penang Hill.`,
      category: "Food Guide",
    },
    {
      slug: "/malaysia/complete-food-guide",
      title: "A Complete Food Guide",
      description: "A Complete Food Guide of what to eat in Malaysia",
      image: "/images/country/malaysia/food_guide.jpg",
      category: "Food Guide",
    },
    {
      slug: "/malaysia/16-days-itinerary",
      title: "16 Days Itinerary in Malaysia",
      image: "/images/country/malaysia/malaysia_16_days_banner.jpg",
      description: "16 Days Itinerary in Malaysia",
      category: "Itinerary",
    },
    {
      slug: "/malaysia/9-days-itinerary",
      title: "9 Days Itinerary in Malaysia",
      image: "/images/country/malaysia/malaysia_9_days_banner.jpg",
      description: "9 Days Itinerary in Malaysia",
      category: "Itinerary",
    },
    {
      slug: "/malaysia/kuala-lumpur/top-things-to-do",
      title: "Top Things to Do in Kuala Lumpur",
      image: "/images/country/malaysia/places/kuala_lumpur/kuala_lumpur.png",
      description: `Kuala Lumpur, Malaysia's dynamic capital city, offers an unforgettable blend of cultures, cuisines, and contrasts. As a global hub in Southeast Asia, it effortlessly fuses cutting-edge modernity with deep-rooted tradition. Towering over the skyline are the world-famous Petronas Twin Towers, a symbol of Malaysia's rapid development, while just a short distance away, colonial-era buildings like the Sultan Abdul Samad Building reflect the city's British heritage.
Kuala Lumpur is a melting pot of Malay, Chinese, and Indian cultures, which is vividly expressed through its architecture, festivals, and especially its cuisine. Food is a major attraction—visitors can enjoy everything from spicy street fare in Jalan Alor and traditional dishes at Kampung Baru, to high-end dining in the city's many rooftop restaurants.
`,
      category: "Activities",
    },
    {
      slug: "/malaysia/penang/top-things-to-do",
      title: "Top Things to Do in Penang",
      image: "/images/country/malaysia/places/penang/penang.jpg",
      description: `Penang, a state on Malaysia's northwest coast, is known for its stunning beaches, historic Georgetown, and the UNESCO World Heritage–listed Penang Hill.`,
      category: "Activities",
    },
    {
      slug: "/malaysia/langkawi/top-things-to-do",
      title: "Top Things to Do in Langkawi",
      image: "/images/country/malaysia/places/langkawi/langkawi_banner.jpg",
      description: `Langkawi, Malaysia's largest island, is known for its lush rainforests, crystal-clear waters, and laid-back vibe. The island is home to the Langkawi Sky Bridge, a must-visit attraction for its breathtaking views. Langkawi is also known for its duty-free shopping and delicious local cuisine.`,
      category: "Activities",
    },
    {
      slug: "/malaysia/perhentian-islands/top-things-to-do",
      title: "Top Things to Do in Perhentian Islands",
      image: "/images/country/malaysia/places/perhentian/perhentian_banner.jpg",
      description: `Perhentian Islands, located off the east coast of Malaysia, is known for its crystal-clear waters, white sandy beaches, and laid-back vibes. The island is primarily made up of two main parts: Pulau Besar (the larger island) and Pulau Kecil (the smaller island). Ideal for budget travelers and beginners in snorkeling or scuba diving, it's a top destination for marine life lovers looking to explore coral reefs and chill in beachfront chalets.`,
      category: "Activities",
    },
    {
      slug: "/malaysia/things-to-know-before-going",
      title: "Things to Know Before Going to Malaysia",
      image:
        "/images/country/malaysia/things_to_know_before_going_to_malaysia.jpg",
      description: "Travel Guide about Malaysia",
      category: "Travel Guide",
    },
    {
      slug: "/malaysia/kuala-lumpur/travel-guide",
      title: "Things to Know Before Going to Kuala Lumpur",
      image:
        "/images/country/malaysia/places/kuala_lumpur/things_to_know_before_going_to_kuala_lumpur.jpg",
      description: "Travel Guide about Kuala Lumpur",
      category: "Activities",
    },
    {
      slug: "/malaysia/langkawi/travel-guide",
      title: "Things to Know Before Going to Langkawi",
      image: "/images/country/malaysia/places/langkawi/travel_guide_banner.jpg",
      description: "Travel Guide about Langkawi",
      category: "Travel Guide",
    },
    {
      slug: "/malaysia/perhentian-islands/travel-guide",
      title: "Things to Know Before Going to Perhentian Islands",
      image:
        "/images/country/malaysia/places/perhentian/things_to_know_perhentian.jpg",
      description: "Travel Guide about Perhentian Islands",
      category: "Travel Guide",
    },
    {
      slug: "/malaysia/penang/travel-guide",
      title: "Things to Know Before Going to Penang",
      image: "/images/country/malaysia/places/penang/things_to_know_penang.jpg",
      description: "Travel Guide about Penang",
      category: "Travel Guide",
    },
  ],

  complete_food_guide: {
    heading: "A Complete Food Guide",
    image: "/images/country/malaysia/food_guide.jpg",
    description: "",
    overview:
      "Malaysia's cuisine is a vibrant tapestry of flavors, influenced by its rich cultural heritage and abundant local ingredients. From street food stalls to high-end restaurants, the food scene offers something for every palate and budget. Here are some must-try dishes during your visit.",
    data: MALAYSIA_COMPLETE_FOOD_GUIDE,
    best_places: {
      penang: {
        title: "Penang – Best Places to Eat",
        description:
          "Penang is often called Malaysia's food capital, and for good reason. George Town's street food is legendary—try Char Kway Teow at Siam Road or Penang Assam Laksa at Air Itam Market. Visit Gurney Drive Hawker Centre for an all-in-one foodie experience.",
        image: "/placeholder.svg",
        highlights: [
          "Char Kway Teow at Siam Road",
          "Penang Assam Laksa at Air Itam Market",
          "Gurney Drive Hawker Centre",
          "Penang Road Famous Teochew Cendol",
          "Kebaya Dining Room",
          "Indigo at Blue Mansion",
        ],
      },
      kuala_lumpur: {
        title: "Kuala Lumpur",
        description:
          "Kuala Lumpur is a food lover's paradise, offering everything from upscale dining to street food gems. Visit Jalan Alor for buzzing night market vibes and local favorites like satay and grilled seafood.",
        image: "/placeholder.svg",
        highlights: [
          "Jalan Alor Night Market",
          "Bijan Bar & Restaurant",
          "Lot 10 Hutong",
          "Brickfields",
          "Village Park",
        ],
      },
      langkawi: {
        title: "Langkawi – Best Places to Eat",
        description:
          "Langkawi's food scene blends beachside charm with local flavors. Cenang Beach is packed with seafood restaurants like Orkid Ria and The Cliff, offering fresh catches with ocean views.",
        image: "/placeholder.svg",
        highlights: [
          "Cenang Beach seafood restaurants",
          "Nasi Dagang Pak Malau",
          "Night Markets",
          "Yellow Café",
          "Smiling Buffalo",
        ],
      },
    },
    quick_tips: [
      "Carry cash – many smaller eateries and roadside stalls don't accept cards",
      "Try everything once – from street stalls to high-end dining",
      "Hawker centers are goldmines – head to night markets or food courts",
      "Ask locals for recommendations – they often know the hidden gems",
      "Spice levels vary – always ask if the dish is spicy",
      "Don't skip breakfast specials – dishes like nasi lemak and roti canai are best enjoyed in the morning",
      "Use your hands – in many places, especially banana leaf restaurants, it's perfectly acceptable",
      "Respect halal signs – avoid bringing non-halal food or alcohol into halal-certified restaurants",
    ],
    alcohol_info:
      "Alcohol is available in Malaysia but its consumption is influenced by cultural and religious norms. As a predominantly Muslim country, alcohol is not widely consumed by the Malay Muslim population and is subject to restrictions in some states, especially in Kelantan and Terengganu. However, non-Muslims and tourists can freely purchase and consume alcohol in most urban areas. You'll find a wide selection of beers, wines, and spirits in bars, pubs, restaurants, and hotels—particularly in cities like Kuala Lumpur, Penang, and Langkawi (a duty-free island where alcohol is cheaper). Always drink responsibly and be aware of local customs, especially during religious festivals like Ramadan.",
  },

  places_to_visit: {
    heading: "Places to visit in Malaysia",
    image: "/images/country/malaysia/places_to_visit.jpg",
    description: "",
    overview:
      "Malaysia is a diverse Southeast Asian country offering tropical islands, cultural cities, highland retreats, and rich heritage. From modern skyscrapers in Kuala Lumpur to UNESCO-listed towns like George Town and Melaka, Malaysia is perfect for all types of travelers. Nature lovers will enjoy Langkawi’s beaches, Cameron Highlands’ tea plantations, and Borneo’s rainforests. Scuba diving in Sipadan or relaxing in Redang Island are top-rated experiences. Whether you're seeking cultural tours, island hopping, or food adventures, these must-visit destinations in Malaysia offer unforgettable memories. Ideal for solo travelers, couples, and families exploring Malaysia’s best tourist attractions.",
    data: MALAYSIA_PLACES_TO_VISIT,
  },

  nine_days_itinerary: {
    heading: "9 Days Itinerary in Malaysia",
    image: "/images/country/malaysia/malaysia_9_days_banner.jpg",
    description: "9 Days Itinerary in Malaysia",
    overview: "9 Days Itinerary in Malaysia",
    data: MALAYSIA_NINE_DAYS_ITINERARY,
  },
  sixteen_days_itinerary: {
    heading: "16 Days Itinerary in Malaysia",
    image: "/images/country/malaysia/malaysia_16_days_banner.jpg",
    description: "16 Days Itinerary in Malaysia",
    overview: "16 Days Itinerary in Malaysia",
    data: MALAYSIA_SIXTEEN_DAYS_ITINERARY,
  },
  other_blogs: [
    {
      slug: "/malaysia/9-days-itinerary",
      title: "9 Days Itinerary in Malaysia",
      image: "/images/country/malaysia/malaysia_9_days_banner.jpg",
      description: "9 Days Itinerary in Malaysia",
      category: "Itinerary",
    },
    {
      slug: "/malaysia/16-days-itinerary",
      title: "16 Days Itinerary in Malaysia",
      image: "/images/country/malaysia/malaysia_16_days_banner.jpg",
      description: "16 Days Itinerary in Malaysia",
      category: "Itinerary",
    },
    {
      slug: "/malaysia/best-places-for-scuba",
      title: "Best Places for Scuba Diving in Malaysia",
      image: "/images/country/malaysia/malaysia_scuba_banner.jpg",
      description: "Best Places for Scuba Diving in Malaysia",
      category: "Activities",
    },
  ],
  top_things_to_do: MALAYSIA_TOP_THINGS_TO_DO,
  scuba_blog: MALAYSIA_SCUBA_BLOG,
};
