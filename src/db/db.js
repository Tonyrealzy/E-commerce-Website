import Image1 from "../assets/Freezer111.jpg";
import Image2 from "../assets/Freezer222.jpg";
import Image3 from "../assets/Freezer333.jpg";
import Image4 from "../assets/Freezer444.jpg";
import Image5 from "../assets/Freezer555.jpg";
import Image6 from "../assets/TV111.jpg";
import Image7 from "../assets/TV222.jpg";
import Image8 from "../assets/TV333.jpg";
import Image9 from "../assets/TV444.jpg";
import Image10 from "../assets/TV555.jpg";
import Image11 from "../assets/kettle111.jpg";
import Image12 from "../assets/kettle222.jpg";
import Image13 from "../assets/kettle333.jpg";
import Image14 from "../assets/HPlaptop111.jpg";
import Image15 from "../assets/MacBookPro.jpg";
import Image16 from "../assets/DELLlaptop333.jpg";
import Image17 from "../assets/HPlaptop222.jpg";


export const categoriesCalled = [
    { "id": 1, "title": "Fridges" },
    { "id": 2, "title": "Kettles" },
    { "id": 3, "title": "Televisions" },
    { "id": 4, "title": "Laptops"}

];
   export const productsCalled = [
      {
        "id": 1,
        "catId": 1,
        "title": "Beko Integrated Tall Freezer White",
        "productCode": "BFFD3577",
        "image": Image1,
        "price": 579,
        "sku": "577318",
        "description": "The Beko BFFD3577 Integrated Tall Freezer has a 220-litre capacity that's ideal for larger households.\nIt also features six clear storage drawers that make it easy to organise your shopping. The two storage shelves give you even more space to store your family favourites.Fast FreezeNeed to quickly freeze your groceries? Select the fast freeze setting. It quickly freezes fresh food, preserving its taste and nutrients. Perfect for when you've just got back from the supermarket.\nFrost Free\nNo need to manually defrost the freezer thanks to the BFFD3577's Frost Free technology. This handy feature prevents ice build-up, saving you time and effort while freeing-up more storage space.",
        "specs": {"dimensions": "177.5 x 54 x 54.5cm (H x W x D)", "capacity": "220 litres"},
        "features": ["No need to defrost with frost free technology", "Suitable for outbuildings", "Sliding hinge", "Fast freeze"],
        "stock": 20
      },
      {
        "id": 2,
        "catId": 1,
        "title": "Essentials Undercounter Fridge Silver",
        "productCode": "CUL55S20",
        "image": Image2,
        "price": 169,
        "sku": "287494",
        "description": "Keep your fresh food tasting great in the Essentials CUL55S20 Undercounter Fridge. Store your dairy, meat, fish, and vegetables with ease. It delivers an efficient performance, which is great for your pocket, and the planet too!\n\nAdjustable shelves let you store even awkward shaped food products and make it easier to store everything. Not enough room? Make space by moving the shelves around. Simple.\n\nPop your vegetables in the salad compartment to keep them at their freshest and make the most of their shelf life. With transparent drawer fronts, you won't have to rummage around to see what you've got left.\n\nThe CUL55S20 has a reversible door, so no need to worry if you want to change the layout of your kitchen.",
        "specs": {"dimensions": "84.5 x 55.3 x 58.4 cm (H x W x D)", "capacity": "131 litres"},
        "stock": 10
      },
      {
          "id": 3,
          "catId": 1,
          "title": "Kenwood KTLD60X20 Tall Fridge",
          "productCode": "KTLD60X20",
          "image": Image3,
          "price": 449,
          "sku": "287103",
          "description": "Attractive design\n\nThe Kenwood KTLD60X20 Tall Fridge is spacious and practical with a sleek and modern design. It has a glossy stainless steel finish and an LED display, allowing you to adjust the temperature and change the settings to suit your needs.\n\n  All the space you need\n\nThis 185 cm Tall Fridge has a storage capacity of 370 litres, giving you enough space to store groceries for the whole family. It also features 4 shelves, 4 door compartments and 2 salad crispers that will keep your fruit and vegetables fresh for longer.\n\nPlus, it comes with a water dispenser to keep you hydrated.\n\nEfficient and easy-to-use\n\nThis fridge comes packed with smart features, including the Super Cool function, which cools down your food quickly and efficiently. The temperature of the fridge will also stay constant thanks to the Multi-Airflow cooling feature. And you won't even have to defrost it yourself thanks to automatic defrosting.\n\nThe audible door alarm will help you save energy and keep your food in good condition for longer.",
          "specs": {"dimensions": "185.5 x 59.5 x 71.2 cm (H x W x D)", "capacity": "370 litres"},
          "features": ["Water dispenser (no plumbing required)", "Food freshness feature to keep your fruit and veg fresh", "Fast chill rapidly lowers the temperature inside the fridge"],
          "stock": 10
      },
      {
          "id": 4,
          "catId": 1,
          "title": "BEKO BLSD3577 Integrated Tall Fridge",
          "productCode": "BLSD3577",
          "image": Image4,
          "price": 449,
          "sku": "784324",
          "description": "Chiller compartment\n\nGet more room for your weekly shop with the Beko BLSD3577 Integrated Tall Fridge. It offers 309 litres of storage space across 6 shelves, 5 door balconies and a large salad crisper.\n\nThe integrated chiller compartment stores your meat, fish and dairy products at a temperature of around 0 °C - ideal for keeping them fresh for longer.\n\nChrome wine rack\n\nWant extra shelf space? You can easily store soft drinks or bottles of wine on the wire rack.\n\nReversible doors\n\nFor those with smaller kitchens, reversible doors give you the flexibility to choose where you position the fridge.\n\nEasy to monitor\n\nAdjust the temperature easily with the touch controls. Try Quick Cool to rapidly lower the temperature or Holiday Mode if you're going away for a while.\n\nThe fridge will alert you when the door is left open, so you can rest assured that your groceries will stay fresh and chilled.",
          "specs": {"dimensions": "177.5 x 54 x 54.5 cm (H x W x D)", "capacity": "309 litres"},
          "features": ["Fast chill rapidly lowers the temperature inside the fridge", "Open door alarm warns you if the door is left open", "Auto defrost"],
          "stock": 5
      },
      {
          "id": 5,
          "catId": 1,
          "title": "ZANUSSI MultiFlow ZRME38FW2 Tall Fridge White",
          "productCode": "ZRME38FW2",
          "image": Image5,
          "price": 554,
          "sku": "670811",
          "description": "MultiFlow technology\n\nThe Zanussi MultiFlow ZRME38FW2 Tall Fridge uses MultiFlow technology to keep your food at its very best. It keeps the temperature stable, with cool air reaching every part of the fridge.\n\nThat means your food will last longer, and stay fresh and tasty.\n\nPremium flat door\n\nThe flat fridge door looks great - there's no protruding parts, and there's a seamless look from top to bottom",
          "specs": {"dimensions": "186 x 59.5 x 64.5 cm (H x W x D)", "capacity": "380 litres"},
          "features": ["Food freshness feature to keep your fruit and veg fresh", "Fast chill rapidly lowers the temperature inside the fridge", "Auto defrost"],
          "stock": 5
      },
      {
          "id": 6,
          "catId": 3,
          "title": "SAMSUNG UE50TU7020KXXU 50\" Smart 4K Ultra HD HDR LED TV",
          "productCode": "UE50TU7020KXXU",
          "image": Image6,
          "price": 389,
          "sku": "670811",
          "description": "Glorious colour\n\nDon\\'t settle for anything less than crystal clear colour. The Samsung UE50TU7020KXXU 50\" Smart 4K Ultra HD HDR LED TV delivers <b>pure colours, sharp contrast, and brilliant brightness</b>. HDR displays the <b>brightest and darkest colours</b> in each frame, so everything from dimly lit dialogue scenes to nature documentaries look vivid and realistic.\n\nA smarter TV\n\nYou\\'ve got one of the largest collections of 4K content and catch-up apps at your fingertips, including Apple TV, Netflix, and Disney+, so you\\'ll never be stuck for something to watch.\n\nImmersive sound\n\nAdaptive Sound automatically adjusts to what you're watching, so your entertainment feels more immersive than before.\n\nGame enhancer\n\nEnjoy your favourite console games with picture and sound that adapts as fast as your game. You won't miss a moment thanks to incredibly low lag rates.\n\nPremium One Remote\n\nNo more need to juggle TV, Blu-ray and sound bar remotes. The Premium One Remote Control connects to all your compatible devices. Crank up the volume on your sound bar, play the latest movies on your Blu-ray player, or even browse the internet on your TV, all from one handy remote.",
          "specs": {"dimensions": " TV with stand: 718.6 x 1115.8 x 250.2 mm (H x W x D) - TV: 643.7 x 1115.8 x 59.5 mm (H x W x D) - Boxed: 780 x 1264 x 150 mm (H x W x D)"},
          "features": ["Crystal display for long-lasting colour & sharp contrast", "Crystal Processor 4K for the best 4K picture & targeted sound", "Picture quality : 2000 PQI", "HDR : HDR10+ / Hybrid Log-Gamma (HLG)", "Catch-up TV & 4K streaming", "TV PLUS", "HDMI 2.0a x 2"],
          "stock": 5
      },
      {
          "id": 7,
          "catId": 3,
          "title": "LG 32LM6370PLA 32\" Smart Full HD HDR LED TV",
          "productCode": "32LM6370PLA",
          "image": Image7,
          "price": 249,
          "sku": "657462",
          "description": "Give your favourite movies and box sets a new lease of life with the LG 32LM6370PLA 32\" Smart Full HD HDR LED TV.\n\nIts Active HDR technology delivers pinpoint detail by remastering each scene as you watch. That means you'll see the brightest and darkest shades in the same image, and still notice the subtlest differences in colour.\n\nPowerful processor\n\nThe Quad Core processor reduces noise and creates more dynamic colour and contrast. So whether you're catching up with soaps or following your team in the league, everything you watch appears smooth, vibrant and sharp.\n\nEndless entertainment\n\nNever run out of shows and movies to watch. With webOS, there\\'s something to keep the whole family entertained. Binge through the shows everyone\\'s talking about on Netflix and Amazon Prime, discover new music with Spotify or even download games.\n\nAnd with Freeview Play, you get instant access to the past 7 days of TV shows on BBC, ITV, Channel 4 and loads more.\n\nVirtual Surround Sound\n\nWhen you\\'re watching the latest blockbuster or the big game, you want big sound to match the great picture. The LG 32LM6370PLA features Virtual Surround Sound technology, which creates virtual audio channels to give you a more immersive viewing experience.",
          "specs": {"dimensions": "TV with stand: 464 x 736 x 180 mm (H x W x D) - TV: 437 x 736 x 82.9 mm (H x W x D) - Boxed: 510 x 812 x 142 mm (H x W x D)"},
          "features": ["Full-HD resolution - For Sharp Images", "Dynamic Colour Enhancer - More natural colours", "Dolby Audio™ - A movie-like sound experience", "USB Connection - Enjoy more content on your TV", "Simple Yet Sophisticated Design"],
          "stock": 5
      },
      {
          "id": 8,
          "catId": 3,
          "title": "PANASONIC TX40JX800B 40\" Smart 4K Ultra HD HDR LED TV",
          "productCode": "TX40JX800B",
          "image": Image8,
          "price": 399,
          "sku": "704803",
          "description": "The Panasonic TX-40JX800B 40\" Smart 4K Ultra HD HDR LED TV has plenty of HDR technology to bring you the very best viewing. It brings detail to dark areas of the scene and brings bright vibrant colour, perfect for sports or movies. This TV supports a variety of formats, so you can enjoy HDR content from a broad range of sources.\n\nBright Panel Plus provides bright LED backlighting for sharp and crisp images and the certified Dolby Vision technology renders every scene picture-perfect.\n\nAndroid TV\n\nThis TV comes with Android TV OS, meaning everything you enjoy watching is neatly organised and just a button away. You can also organise your home screen for even simpler access.\n\nOptimised for Netflix streaming, the TX-40JX800B has a dedicated Netflix button that takes you straight to your shows. There are also plenty of streaming options to keep you and your family entertained - including Disney+, Prime Video and many more.\n\nSmart assistant\n\nUse Google Assistant to change channels, control the volume or turn your TV on. You can use it to help you to search the Freeview guide, making it even easier to find the shows you love.\n\nFilmmaker Mode with intelligent sensing\n\nElectronics brands and leading movie directors created Filmmaker Mode. A single button sets the film's colour-palette, contrast, aspect ratio and frame rate as the director intended. The picture automatically adjusts even if light levels change.\n\nSurround Sound\n\nOpen up the soundstage to make the soundtrack feel as involving as the big-screen action. Surround Sound helps draw you into what you're watching to feel more involved with the story.\n\nChromecast built-in\n\nEasily cast your favourite movies, music, and more to your TV with Chromecast built-in. Select the content and send it to the TV with a flick of your finger. You'll be able to see the pictures clearly in all their glory",
          "specs": {"dimensions": "TV with stand: 548 x 904 x 174 mm (H x W x D) - TV: 524 x 904 x 65 mm (H x W x D) - Boxed: 619 x 1011 x 131 mm (H x W x D)"},
          "features": ["HCX Picture Processor for accurate contrast & clarity", "Picture quality : 1400 Hz BMR", "HDR : Dolby Vision / HDR10+ / Hybrid Log-Gamma (HLG)", "Catch-up TV & 4K streaming", "Freeview HD with Freeview Play", "HDMI 2.0 x 3"],
          "stock": 8
      },
      {
          "id": 9,
          "catId": 3,
          "title": "PANASONIC TX48JZ1000B 48\" Smart 4K Ultra HD HDR OLED TV",
          "productCode": "TX48JZ1000B",
          "image": Image9,
          "price": 399,
          "sku": "1199",
          "description": "Cinematic OLED Panel\n\nYour favourite sports, games and movies look better than ever on the Panasonic TX-48JZ1000B 48\"Smart 4K Ultra HD HDR OLED TV. The OLED screen creates natural colour and high contrast so you can see real black where it should be.\n\nAuto AI & Dolby Vision IQ\n\nThe HCX Pro AI processor instantly adjusts the colour and contrast to match what you\\'re watching, so you'll automatically get the best possible picture. And Dolby Vision IQ reacts to light levels in your room, giving you picture-perfect images, even on sunny days.\n\nGame Mode Extreme\n\nEnjoy your favourite games without screen tearing or stuttering thanks to OLED display and AMD FreeSync Premium. Featuring HDMI 2.1 with support for high frame rates, VRR and ALLM, the TV delivers super-smooth action with low input lag.\n\nDolby Atmos audio\n\nHear the gentle trickle of rainfall or the roar of planes overhead with Dolby Atmos virtual surround sound. It puts you right at the heart of the action, so you'll get multi-dimensional audio that seems to flow all around you.\n\nSmart TV\n\nWith Google Assistant and Amazon Alexa voice control built in, it\\'s never been easier to find what you want to watch, control your smart home, and get updates personal to you.\n\nImmerse yourself in all your favourite films and shows with apps like Netflix, Prime Video, Disney+ and more. And you can catch up on shows you've missed straight from the TV guide with Freeview Play.",
          "specs": {"dimensions": "TV with stand: 682 x 1069 x 300 mm (H x W x D) - TV: 622 x 1069 x 300 mm (H x W x D) - Boxed: 220 x 1408 x 745 mm (H x W x D)"},
          "features": ["HCX Pro AI Processor for cinematic contrast & clarity", "Cinematic sound with Dolby Atmos", "Picture quality : 120 Hz", "Dolby Vision IQ / HDR10+ / HDR10 / Hybrid Log-Gamma (HLG)", "Catch-up TV & 4K streaming", "Freeview HD with Freeview Play", "HDMI 2.1 x 2 / HDMI 2.0 x 2"],
          "stock": 8
      },
      {
          "id": 10,
          "catId": 3,
          "title": "SAMSUNG UE75TU7020KXXU 75\" Smart 4K Ultra HD HDR LED TV",
          "productCode": "UE75TU7020KXXU",
          "image": Image10,
          "price": 779,
          "sku": "M10213562_008,jpg",
          "description": "Glorious colour\n\nDon\\'t settle for anything less than crystal clear colour. The Samsung UE75TU7020KXXU 75\" Smart 4K Ultra HD HDR LED TV delivers pure colours, sharp contrast, and brilliant brightness. HDR displays the brightest and darkest colours in each frame, so everything from dimly lit dialogue scenes to nature documentaries look vivid and realistic.\n\nA smarter TV\n\nYou\\'ve got one of the largest collections of 4K content and catch-up apps at your fingertips, including Apple TV, Netflix, and Disney+, so you\\'ll never be stuck for something to watch.\n\nImmersive sound\n\nAdaptive Sound automatically adjusts to what you're watching, so your entertainment feels more immersive than before.\n\nGame enhancer\n\nEnjoy your favourite console games with picture and sound that adapts as fast as your game. You won't miss a moment thanks to incredibly low lag rates.\n\nPremium One Remote\n\nNo more need to juggle TV, Blu-ray and sound bar remotes. The Premium One Remote Control connects to all your compatible devices. Crank up the volume on your sound bar, play the latest movies on your Blu-ray player, or even browse the internet on your TV, all from one handy remote.",
          "specs": {"dimensions": "TV with stand: 682 x 1069 x 300 mm (H x W x D) - TV: 622 x 1069 x 300 mm (H x W x D) - Boxed: 220 x 1408 x 745 mm (H x W x D)"},
          "features": ["Crystal display for long-lasting colour & sharp contrast", "Crystal Processor 4K for the best 4K picture & targeted sound", "Picture quality : 2000 PQI", "HDR : HDR10+ / Hybrid Log-Gamma (HLG)", "Catch-up TV & 4K streaming", "TV PLUS", "HDMI 2.1 x 2 / HDMI 2.0 x 2"],
          "stock": 16
      },
      {
          "id": 11,
          "catId": 2,
          "title": "Breville VKJ732 Multifunction Kettle",
          "productCode": "Breville-VKJ732",
          "image": Image11,
          "price": 79,
          "sku": "345123",
          "description": "The Breville VKJ732 Multifunction Kettle is a versatile appliance that can boil water, heat up milk, and even make tea. It features a variable temperature control so you can heat water to the perfect temperature for your needs. The kettle also has a keep-warm function that will keep your water hot for up to 30 minutes.",
          "specs": {
            "capacity": "1.7 litres",
            "power": "2200 watts"
          },
          "features": ["Variable temperature control", "Keep-warm function", "Easy to clean", "Stainless steel body"],
          "stock": 15
        },
        {
          "id": 12,
          "catId": 2,
          "title": "Dualit Classic Jug Kettle",
          "productCode": "Dualit-Classic-Jug",
          "image": Image12,
          "price": 129,
          "sku": "678901",
          "description": "The Dualit Classic Jug Kettle is a stylish and iconic kettle that's perfect for design lovers. It features a hand-assembled brass body and a polished steel spout. The kettle also has a boil-dry protection feature that will automatically shut the kettle off if it detects that there is no water in the base.",
          "specs": {
            "capacity": "1.5 litres",
            "power": "2400 watts"
          },
          "features": ["Hand-assembled brass body", "Polished steel spout", "Boil-dry protection", "Fast boil"],
          "stock": 8
        },
        {
          "id": 13,
          "catId": 2,
          "title": "Smeg KLF04KPGEU Aesthetic Kettle",
          "productCode": "Smeg-KLF04KPGEU",
          "image": Image13,
          "price": 199,
          "sku": "987456",
          "description": "The Smeg KLF04KPGEU Aesthetic Kettle is a statement piece for your kitchen. It features a retro design with a pastel blue colour and chrome accents. The kettle also has a temperature gauge and a soft-touch handle for added convenience.",
          "specs": {
            "capacity": "1.7 litres",
            "power": "2000 watts"
          },
          "features": ["Retro design", "Pastel blue colour", "Temperature gauge", "Soft-touch handle"],
          "stock": 5
        },
        {
          "id": 14,
          "catId": 4,
          "title": "HP Pavilion 15",
          "productCode": "HP-Pavilion-15-1234",
          "image": Image14,
          "price": 799,
          "sku": "987654",
          "description": "The HP Pavilion 15 is a powerful and versatile laptop that's perfect for everyday use. It features a 15.6-inch Full HD display, an 11th Gen Intel Core i5 processor, 8GB of RAM, and 512GB of SSD storage. Whether you're working on documents, browsing the web, or streaming videos, the Pavilion 15 has the power to handle it all. Plus, its long battery life lets you stay productive on the go.",
          "specs": {
            "screenSize": "15.6 inches",
            "processor": "11th Gen Intel Core i5",
            "ram": "8GB",
            "storage": "512GB SSD",
            "operatingSystem": "Windows 11 Home"
          },
          "features": ["15.6-inch Full HD display", "11th Gen Intel Core i5 processor", "8GB of RAM", "512GB SSD storage", "Long battery life"],
          "stock": 10
        },
        {
          "id": 15,
          "catId": 4,
          "title": "Apple MacBook Air",
          "productCode": "Apple-MBA-M2",
          "image": Image15,
          "price": 1249,
          "sku": "123456",
          "description": "The Apple MacBook Air is a thin, light, and powerful laptop that's perfect for students and professionals alike. It features a 13.3-inch Retina display, the new Apple M2 chip, 8GB of RAM, and 256GB of SSD storage. With its sleek design and long battery life, the MacBook Air is a great choice for anyone who needs a portable and versatile laptop.",
          "specs": {
            "screenSize": "13.3 inches",
            "processor": "Apple M2",
            "ram": "8GB",
            "storage": "256GB SSD",
            "operatingSystem": "macOS Monterey"
          },
          "features": ["13.3-inch Retina display", "Apple M2 chip", "8GB of RAM", "256GB SSD storage", "Long battery life", "Sleek and lightweight design"],
          "stock": 5
        },
        {
          "id": 16,
          "catId": 4,
          "title": "DELL ROG Strix G15",
          "productCode": "DELL-ROG-G15",
          "image": Image16,
          "price": 1599,
          "sku": "789012",
          "description": "The DELL ROG Strix G15 is a powerful gaming laptop that's perfect for gamers who demand the best performance. It features a 15.6-inch QHD display with a 165Hz refresh rate, an AMD Ryzen 7 processor, 16GB of RAM, and a 1TB NVMe SSD. With its high-performance components and advanced cooling system, the ROG Strix G15 can handle even the most demanding games.",
          "specs": {
            "screenSize": "15.6 inches",
            "processor": "AMD Ryzen 7",
            "ram": "16GB",
            "storage": "1TB NVMe SSD",
            "operatingSystem": "Windows 11 Home",
            "graphicsCard": "NVIDIA RTX 3070"
          },
          "features": ["15.6-inch QHD display (165Hz)", "AMD Ryzen 7 processor", "16GB of RAM", "1TB NVMe SSD", "NVIDIA RTX 3070 graphics card", "Advanced cooling system"],
          "stock": 3
        },
        {
          "id": 17,
          "catId": 4, 
          "title": "HP Omen 16",
          "productCode": "HP-OMEN-16",
          "image": Image17, 
          "price": 1799,
          "sku": "987654",
          "description": "The HP Omen 16 is a powerful gaming laptop designed for exceptional performance and immersive visuals. It boasts a 16-inch QHD display with a high refresh rate, a powerful AMD Ryzen or Intel Core i7 processor, up to 32GB of RAM, and a spacious NVMe SSD for storage. Combined with a top-of-the-line NVIDIA RTX graphics card and an advanced cooling system, the HP Omen 16 tackles demanding games with ease.",
          "specs": {
            "screenSize": "16 inches",
            "processor": "AMD Ryzen 7 / Intel Core i7 (configurable)", 
            "ram": "Up to 32GB",  
            "storage": "Spacious NVMe SSD (capacity to be confirmed)", 
            "operatingSystem": "Windows 11 Home",
            "graphicsCard": "NVIDIA RTX 3070 Ti" 
          },
          "features": [
            "16-inch QHD display (high refresh rate)",
            "Powerful AMD Ryzen 7 or Intel Core i7 processor",
            "Up to 32GB of DDR4 RAM for smooth multitasking",
            "Spacious NVMe SSD for fast loading times",
            "NVIDIA RTX 3070 Ti graphics card for stunning visuals",
            "Advanced cooling system for optimal performance",
        ],
        "stock": 5
        }
    ]