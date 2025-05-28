/**
 * VibeZone E-commerce - Products Management
 * This file contains all product data and core product functions
 */
/*i want to add of the products to the index.html file in the featured products section and 
have the function to switch between the products in the featured section and the other sections*/ 
// Product Database
const products = [
  // Cars Category
  {
    id: "car-001",
    name: "Silicon phone cover",
    category: "accessories",
    brand: "phone cover",
    price: 40,
    oldPrice: 45,
    discount: 7,
    stock: 5,
    sku: " ACC-APL-001",
    rating: 4.9,
    reviewCount: 124,
    isNew: true,
    isSale: true,
    isFeatured: true,
    tags: ["phone cover", "accessories", "silicon"],
    colors: ["red", "white", "black", "blue", "yellow"],
    images: [
      "accessories/PhoneCover Mockup.jpg",
      "accessories/PhoneCovers-3.jpg",
      "accessories/PhoneCovers-5.jpg",
      "accessories/phoneCovers2.jpg",
    ],
    shortDescription: "Very durable silicon phone cover.",
    description:
      "This silicon phone cover is designed to provide maximum protection for your device while maintaining a sleek and stylish look. Made from high-quality, durable silicon, it offers excellent shock absorption and scratch resistance. The cover is lightweight and easy to grip, ensuring that your phone stays secure in your hand. Available in multiple colors, it allows you to personalize your device while keeping it safe from everyday wear and tear.",
    specifications: [
      { name: "Material", value: "Silicon" },
      { name: "Color", value: "Red, White, Black, Blue, Yellow" },
      { name: "Compatibility", value: "iPhone 13 Pro Max" },
      { name: "Thickness", value: "0.5 mm" },
      { name: "Weight", value: "30 grams" },
      { name: "Features", value: "Shock absorption, scratch resistance, easy grip" },
      { name: "Warranty", value: "1 year" },
    ],
    reviews: [
     
      {
        id: "rev-accessories-001-2",
        author: "Emmanuel Johnson",
        email: "Emmanuel@gmail.com",
        rating: 4,
        title: "Great protection, but a bit bulky",
        content:
          "The silicon cover provides excellent protection for my phone, but it does add a bit of bulk. Overall, I'm satisfied with the quality and durability.",
      },
    ],
    dateAdded: "2023-01-10",
  },
  {
    id: "car-002",
    name: "Earpods",
    category: "accessories",
    brand: "Apple",
    price: 400,
    
    discount: 5,
    stock: 3,
    sku: "ACC-APL-002",
    rating: 3.8,
    reviewCount: 86,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["compact", "hatchback", "city"],
    colors: ["white"],
    images: ["accessories/earpods-1.jpg", "accessories/earpods-2.jpg", "accessories/earpods-3.jpg"],
    shortDescription: "The first all-electric BMW 7 Series, combining luxury and sustainability.",
    description:
      "The Earpods are designed to deliver high-quality sound in a compact and stylish package. With their sleek design and comfortable fit, they provide an immersive audio experience for music lovers and casual listeners alike. The earpods feature advanced noise cancellation technology, ensuring that you can enjoy your favorite tunes without distractions. They are compatible with a wide range of devices and come with a convenient charging case for on-the-go use.",
    specifications: [
      { name: "Material", value: "Plastic" },
      { name: "Color", value: "White" },
      { name: "Compatibility", value: "iPhone, iPad, Android devices" },
      { name: "Battery Life", value: "Up to 5 hours" },
      { name: "Charging Case", value: "Included" },
      { name: "Weight", value: "50 grams" },
      { name: "Features", value: "Noise cancellation, touch controls, voice assistant support" },
      { name: "Warranty", value: "1 year" },
    ],
    reviews: [
      {
        id: "rev-accessories-002-1",
        author: "Robert Chen",
        email: "Ashley@gmail.com",
        rating: 5,
        title: "Amazing sound quality and comfort",
        
        content:
          "The Earpods have exceeded my expectations. The sound quality is fantastic, and they fit comfortably in my ears for long listening sessions. The noise cancellation feature works great, making them perfect for commuting.",
        date: "2023-06-02",
      },
    ],
    dateAdded: "2023-02-15",
  },
  {
    id: "car-003",
    name: "USB C charger",
    category: "accessories",
    brand: "Apple",
    price: 80,
    
    discount: 6,
    stock: 2,
    sku: "ACC-APL-003",
    rating: 4.1,
    reviewCount: 92,
    isNew: false,
    isSale: true,
    isFeatured: true,
    tags: ["charger", "accessories", "USB-C"],
    colors: ["white"],
    images: [
      "accessories/USB C charger-1.jpg",
      "accessories/USB C charger-2.jpg",
      "accessories/USB C charger-3.jpg",
    ],
    shortDescription: "The first all-electric BMW 7 Series, combining luxury and sustainability.",
    description:
      "The USB C charger is designed to provide fast and efficient charging for your devices. With its compact design and powerful output, it is perfect for home, office, or travel use. The charger is compatible with a wide range of devices, including smartphones, tablets, and laptops. It features over-current and over-voltage protection to ensure the safety of your devices while charging. The sleek design makes it easy to carry and store.",
    specifications: [
      { name: "Material", value: "Plastic" },
      { name: "Color", value: "White" },
      { name: "Compatibility", value: "USB-C devices" },
      { name: "Output", value: "20W" },
      { name: "Charging Time", value: "Up to 2 hours" },
      { name: "Weight", value: "100 grams" },
      { name: "Features", value: "Fast charging, compact design, safety protection" },
      { name: "Warranty", value: "1 year" },
    ],
    reviews: [
      {
        id: "rev-accessories-003-1",
        author: "James Wilson",
        email: "james342@gmail.com",
        rating: 5,
        title: "Fast and reliable charging",
        content:
          "The USB C charger is fantastic. It charges my devices quickly and efficiently. The compact design makes it easy to carry around, and I love that it has built-in safety features to protect my devices.",
        date: "2023-03-18",
      },
    ],
    dateAdded: "2022-11-05",
  },
  {
    id: "car-004",
    name: "Airpod pro",
    category: "accessories",
    brand: "Apple",
    price: 700,
    stock: 4,
    sku: "ACC-APL-004",
    rating: 3.6,
    reviewCount: 78,
    isNew: false,
    isSale: false,
    isFeatured: false,
    tags: [ "accessories", "earbuds", "wireless"],
    colors: ["gray",  "white"],
    images: [
      "accessories/Apple airpod pro-1.jpg",
      "accessories/Apple airpod pro-2.jpg",
      "accessories/Apple airpod pro-3.jpg",
      
    ],
    shortDescription: "Premium wireless earbuds with active noise cancellation and transparency mode.",
    description:
      "The Airpod Pro are premium wireless earbuds designed for an exceptional audio experience. They feature active noise cancellation technology that blocks out external sounds, allowing you to immerse yourself in your music or podcasts. The transparency mode lets you hear the environment around you when needed, making them versatile for various situations. With a comfortable and secure fit, they are perfect for long listening sessions. The Airpod Pro also come with a compact charging case for on-the-go convenience.",
    specifications: [
      { name: "Material", value: "Plastic" },
      { name: "Color", value: "Gray, White" },
      { name: "Compatibility", value: "iOS and Android devices" },
      { name: "Battery Life", value: "Up to 4.5 hours with ANC" },
      { name: "Charging Case", value: "Included" },
      { name: "Weight", value: "50 grams" },
      { name: "Features", value: "Active noise cancellation, transparency mode, touch controls" },
      { name: "Warranty", value: "1 year" },
    ],
    reviews: [
      {
        id: "rev-accessories-004-1",
        author: "Emily Rodriguez",
        email: "emily@gmail.com",
        rating: 4,
        title: "Great sound quality and comfort",
        content:
          "The Airpod Pro have amazing sound quality, and the noise cancellation feature works really well. They fit comfortably in my ears, and I love the transparency mode for when I need to be aware of my surroundings. The battery life is decent, but I wish it lasted a bit longer.",
        date: "2023-01-30",
      },
    ],
    dateAdded: "2022-12-20",
  },
  {
    id: "car-005",
    name: "Iphone 14",
    category: "phones",
    brand: "iphone 14",
    price: 8500,
    stock: 5,
    sku: "CAR-TOY-004",
    rating: 4.2,
    reviewCount: 78,
    isNew: false,
    isSale: false,
    isFeatured: false,
    tags: ["compact", "hatchback", "city"],
    colors: ["gray", "black", "blue", "white"],
    images: [
      "phones/iphone 14-2.jpg",
      "phones/iphone 14.jpg",
      
      
    ],
    shortDescription: "The latest iPhone model with advanced features and sleek design.",
    description:
      " The latest iPhone model with advanced features and sleek design.",
    specifications: [
      { name: "Display", value: "6.1-inch Super Retina XDR display" },
      { name: "Processor", value: "A16 Bionic chip" },
      { name: "Camera", value: "48MP main camera, 12MP ultra wide camera" },
      { name: "Storage", value: "128GB, 256GB, 512GB" },
      { name: "Battery", value: "3000mAh" },
      { name: "Operating System", value: "iOS 18" },
      { name: "Water and Dust Resistance", value: "IP68" },
      { name: "Dimensions", value: "150.9 x 75.7 x 8.3 mm" },
      { name: "Weight", value: "194 g" },

    ],
    reviews: [
      {
        id: "rev-car-004-1",
        author: "Emily Rodriguez",
        email: "emily@gmail.com",
        rating: 4,
        title: "Beautiful design, impressive performance",
        content:
          "The RS e-tron GT is a head-turner. The design is gorgeous, and the performance is impressive. Range could be better, but charging is quick with the right infrastructure.",
        date: "2023-01-30",
      },
    ],
    dateAdded: "2022-12-20",
  },


  // MacBooks Category
  {
    id: "house-001",
    name: "macbook air M1",
    category: "macbooks",
    brand: "Apple",
    price: 9700,
    stock: 1,
    sku: "MAC-APL-001",
    rating: 4.7,
    reviewCount: 122,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["laptop", "macbook", "apple"],
    colors: ["silver", "space gray", "gold"],
    images: [
      "macBook/macbook air M1-1.jpg",
      "macBook/macbook air M1-2.jpg",
      "macBook/macbook air M1-3.jpg",
      
    ],
    shortDescription: "Apple's thinnest and lightest laptop with M1 chip.",
    description:
      " The MacBook Air with M1 chip is Apple's thinnest and lightest laptop, delivering exceptional performance and efficiency. With its 13.3-inch Retina display, the MacBook Air offers vibrant colors and sharp text for an immersive viewing experience. The M1 chip provides up to 3.5x faster CPU performance and up to 5x faster graphics, making it perfect for everyday tasks and creative work. The laptop features a fanless design for silent operation, up to 18 hours of battery life, and advanced security with Touch ID.",
    specifications: [
      { name: "Display", value: '13.3" Retina' },
      { name: "Processor", value: "Apple M1 chip" },
      { name: "Storage", value: "256GB" },
      { name: "RAM", value: "8GB" },
      { name: "Battery", value: "Up to 18 hours" },
      { name: "Weight", value: "2.8 lbs" },
      { name: "Ports", value: "2 x Thunderbolt 3 (USB-C)" },
      { name: "Operating System", value: "macOS" },
    ],
    reviews: [
      {
        id: "rev-macbook-001-1",
        author: "John Doe",
        email: "johndoe@gmail.com",
        rating: 5,
        title: "Excellent performance and battery life",
        content:
          "The MacBook Air with M1 chip is a game-changer. The performance is outstanding, and the battery life is incredible. I can easily get through a full day of work without needing to charge it. The Retina display is also stunning.",
        date: "2023-05-10",
      },
    ],
    dateAdded: "2023-03-15",
  },
  {
    id: "house-002",
    name: "Macbook air 2017",
    category: "macbooks",
    brand: "Apple",
    price: 4200,
    discount: 8,
    stock: 1,
    sku: "MAC-APL-002",
    rating: 3.7,
    reviewCount: 36,
    isNew: false,
    isSale: true,
    isFeatured: true,
    tags: ["laptop", "macbook", "apple"],
    colors: ["silver", "space gray", "gold"],
    images: [
      "macBook/macbook air 2017-1.jpg",
      "macBook/macbook air 2017-2.jpg",
      "macBook/macbook air 2017-3.jpg",

    ],
    
    shortDescription: "Apple's classic MacBook Air with Intel Core i5 processor.",
    description:
      "The MacBook Air 2017 is a classic laptop from Apple, featuring an Intel Core i5 processor for reliable performance. With its 13.3-inch display, the MacBook Air offers a balance of portability and usability, making it ideal for students and professionals on the go. The laptop includes 8GB of RAM and a 128GB SSD for fast data access and storage. It also features a backlit keyboard, FaceTime HD camera, and up to 12 hours of battery life, ensuring you can work or play throughout the day.",
    specifications: [
      { name: "Display", value: '13.3" LED-backlit' },  
      { name: "Processor", value: "Intel Core i5" },
      { name: "Storage", value: "128GB SSD" },
      { name: "RAM", value: "8GB" },
      { name: "Battery", value: "Up to 12 hours" },
      { name: "Weight", value: "2.96 lbs" },
      { name: "Ports", value: "2 x USB 3.0, Thunderbolt 2, MagSafe 2" },
      { name: "Operating System", value: "macOS" },
    ],
    reviews: [
      {
        id: "rev-macbook-002-1",
        author: "KamKam Daniel",
        email: "kamkam@gmail.com",
        rating: 5,
        title: "Perfect for everyday use",
        content:
          "The MacBook Air 2017 is perfect for my everyday tasks. It's lightweight, has a great battery life, and the performance is more than enough for browsing, document editing, and media consumption. The build quality is excellent as always with Apple products.",
        date: "2023-02-28",
      },
    ],
    dateAdded: "2022-12-10",
  },
  {
    id: "house-003",
    name: "Macbook Pro M1",
    category: "macbooks",
    brand: "Apple",
    price: 13000,
    stock: 2,
    sku: "MAC-APL-003",
    rating: 4.8,
    reviewCount: 29,
    isNew: true,
    isSale: false,
    isFeatured: false,
    tags: ["laptop", "macbook", "apple", "pro"],
    colors: ["silver", "space gray"],
    images: [
      "macBook/Macbook Pro M1-1.jpg",
      "macBook/Macbook Pro M1-2.jpg",
      "macBook/Macbook Pro M1-2.jpg",
    ],
    shortDescription: "Apple's powerful MacBook Pro with M1 chip for professionals.",
    description:
      "The MacBook Pro with M1 chip is designed for professionals who demand high performance and efficiency. Featuring a 13.3-inch Retina display, the MacBook Pro delivers stunning visuals with vibrant colors and sharp text. The M1 chip provides up to 2.8x faster CPU performance and up to 5x faster graphics, making it ideal for demanding tasks like video editing and software development. The laptop includes a fan for active cooling, ensuring sustained performance during intensive workloads. With up to 20 hours of battery life, you can work all day without needing to recharge.",
    specifications: [
      { name: "Display", value: "13.3-inch Retina display" },
      { name: "Processor", value: "Apple M1 chip" },
      { name: "Storage", value: "256GB SSD" },
      { name: "RAM", value: "8GB" },
      { name: "Battery", value: "Up to 20 hours" },
      { name: "Weight", value: "3.0 lbs" },
      { name: "Ports", value: "2 x Thunderbolt 3 (USB-C), headphone jack" },
      { name: "Operating System", value: "macOS" },
    ],
    reviews: [
      {
        id: "rev-macbook-003-1",
        author: "Daniel Morgan",
        email: "daniel@gmail.com",
        rating: 5,
        title: "Incredible performance and battery life",
        content:
          "The MacBook Pro with M1 chip is a powerhouse. The performance is incredible, and the battery life is outstanding. I can easily get through a full day of video editing and programming without needing to charge it. The Retina display is also gorgeous, making it a pleasure to work on.",
        date: "2023-04-15",
      },
    ],
    dateAdded: "2023-01-20",
  },
  {
    id: "house-004",
    name: "M2 MacBook Pro",
    category: "macbooks",
    brand: "Apple",
    price: 15000,
    discount: 8,
    stock: 3,
    sku: "MAC-APL-004",
    rating: 4.6,
    reviewCount: 24,
    isNew: false,
    isSale: true,
    isFeatured: true,
    tags: ["laptop", "macbook", "apple", "pro"],
    colors: ["silver", "space gray"],
    images: [
      "macBook/M2 MacBook Pro-1.jpg",
      "macBook/M2 MacBook Pro-2.jpg",
      "macBook/M2 MacBook Pro-3.jpg",
    ],
    shortDescription: "Elegant contemporary manor set in idyllic countryside.",
    description:
      "This elegant contemporary manor offers 4,800 sq ft of sophisticated living on 5 acres of meticulously landscaped grounds. The residence features 5 bedrooms, 4.5 bathrooms, and thoughtfully designed living spaces that blend traditional architecture with modern amenities. Highlights include a chef's kitchen with butler's pantry, formal dining room, library, home office, and primary suite with luxury bathroom. The grounds feature manicured gardens, a swimming pool, tennis court, guest cottage, and a 3-car garage.",
    specifications: [
      { name: "Size", value: "4,800 sq ft" },
      { name: "Bedrooms", value: "5" },
      { name: "Bathrooms", value: "4.5" },
      { name: "Lot Size", value: "5 acres" },
      { name: "Year Built", value: "2019" },
      { name: "Garage", value: "3 cars" },
      { name: "Guest House", value: "800 sq ft" },
      { name: "Pool", value: "Heated" },
    ],
    reviews: [
      {
        id: "rev-house-004-1",
        author: "Victoria Adams",
        email: "victoria@example.com",
        rating: 4,
        title: "Classic elegance with modern comfort",
        content:
          "This manor strikes the perfect balance between classic elegance and modern comfort. The grounds are stunning, and the interior spaces are beautifully proportioned.",
        date: "2023-03-05",
      },
    ],
    dateAdded: "2022-11-15",
  },

  // Phones Category
  {
    id: "phone-001",
    name: "iphone 11",
    category: "phones",
    brand: "iphone 11",
    price: 2,
    stock: 25,
    sku: "PHONE-APL-001",
    rating: 4.8,
    reviewCount: 352,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["green"],
    images: [
      "phones/iphone 11-green-4.jpg",
      "phones/iphone 11-green-1.jpg",
      "phones/iphone 11-green-3.jpg",
      "phones/iphone 11-green-2.jpg",
    ],
    shortDescription: "Apple's most advanced iPhone with Dynamic Island and A16 Bionic chip.",
    description:
      "The iphone 11 features a 6.7-inch Super Retina XDR display with ProMotion technology for smooth scrolling and responsiveness. Powered by the A16 Bionic chip, it delivers exceptional performance for gaming, photography, and multitasking. The advanced camera system includes a 48MP main sensor, 12MP ultra wide, and 12MP telephoto lenses with improved low-light performance. Additional features include Face ID, MagSafe compatibility, and up to 29 hours of video playback.",
    specifications: [
      { name: "Display", value: '6.7" Super Retina XDR' },
      { name: "Processor", value: "A16 Bionic" },
      { name: "Storage", value: "128GB" },
      { name: "Main Camera", value: "48MP (main), 12MP (ultra wide), 12MP (telephoto)" },
      { name: "Front Camera", value: "12MP" },
      { name: "Battery", value: "3,279mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "160.7 x 77.6 x 7.85 mm" },
    ],
    reviews: [
      
      {
        id: "rev-phone-001-2",
        author: "Augustina Opong",
        email: "augustina@example.com",
        rating: 4,
        title: "Great phone with minor issues",
        content:
          "The camera and display are outstanding. The only downsides are the weight and the fact that it still uses Lightning instead of USB-C.",
        date: "2023-04-12",
      },
    ],
    dateAdded: "2022-09-16",
  },
  {
    id: "phone-002",
    name: "Iphone 11 Purple",
    category: "phones",
    brand: "iphone 11",
    price: 3450,
    oldPrice: 4299,
    discount: 8,
    stock: 18,
    sku: "PHONE-APL-002",
    rating: 4.7,
    reviewCount: 286,
    isNew: true,
    isSale: true,
    isFeatured: true,
    tags: [],
    colors: ["purple"],
    images: [
      "phones/iphone 11 Purple-1.jpg",
      "phones/iphone 11 Purple-4.jpg",
      "phones/iphone 11 Purple-3.jpg",
    ],
    shortDescription: "Iphone 11 with advanced camera system and A13 Bionic chip.",
    description:
      "The Iphone 11 features a 6.1-inch Liquid Retina HD display with True Tone technology for natural viewing. Powered by the A13 Bionic chip, it delivers fast performance and efficient battery life. The dual-camera system includes a 12MP main sensor and a 12MP ultra wide lens, enabling stunning photos and videos in various lighting conditions. Additional features include Night mode, Smart HDR, and improved water resistance.",
    specifications: [
      { name: "Display", value: '6.1" Liquid Retina HD' },
      { name: "Processor", value: "A13 Bionic" },
      { name: "Storage", value: "64GB, 128GB, 256GB" },
      { name: "Main Camera", value: "12MP (main), 12MP (ultra wide)" },
      { name: "Front Camera", value: "12MP" },
      { name: "Battery", value: "3,110mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "150.9 x 75.7 x 8.3 mm" },

    ],
    reviews: [
      {
        id: "rev-phone-002-1",
        author: "Joyce Asante",
        email: "joyce132@example.com",
        rating: 5,
        title: "The ultimate Android phone",
        content:
          "The iphone 11 is a fantastic phone. The camera quality is exceptional, and the performance is smooth. The battery life is also impressive, lasting all day with regular use.",
        date: "2023-03-15",
      },
    ],
    dateAdded: "2023-02-01",
  },
  {
    id: "phone-003",
    name: "iphone 11",
    category: "phones",
    brand: "Apple",
    price: 3100,
    oldPrice: 3300,
    discount: 10,
    stock: 12,
    sku: "PHONE-APL-003",
    rating: 4.6,
    reviewCount: 218,
    isNew: false,
    isSale: true,
    isFeatured: false,
    tags: ["smartphone", "ios", "premium"],
    colors: ["purple", "black", "white", "red"],
    images: [
      "phones/iphone 11-black.jpg",
      "phones/iphone 11-mutli-coloured.jpg",
      "phones/iphone 11-white.jpg",
    ],
    shortDescription: "Apple's flagship smartphone with advanced camera and A15 Bionic chip.",
    description:
      "The Google Pixel 7 Pro features a 6.7-inch LTPO OLED display with 120Hz refresh rate and the Google Tensor G2 chip for advanced AI capabilities. The pro-level camera system includes a 50MP main sensor, 12MP ultrawide, and 48MP telephoto with 5x optical zoom. Exclusive features include Photo Unblur, Magic Eraser, and Real Tone for authentic skin tones. The phone runs pure Android with 5 years of security updates and includes features like Live Translate and the best of Google Assistant.",
    specifications: [
      { name: "Display", value: '6.7" LTPO OLED' },
      { name: "Processor", value: "Google Tensor G2" },
      { name: "Storage", value: "128GB, 256GB, 512GB" },
      { name: "Main Camera", value: "50MP (main), 12MP (ultra wide), 48MP (telephoto)" },
      { name: "Front Camera", value: "10.8MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "162.9 x 76.6 x 8.9 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-003-1",
        author: "Sophia Clark",
        email: "sophia@example.com",
        rating: 4,
        title: "Best camera phone with great software",
        content:
          "The camera system on the Pixel 7 Pro is outstanding, especially for still photography. Google's software features like Magic Eraser are genuinely useful. Battery life could be better, but fast charging helps.",
        date: "2023-01-25",
      },
    ],
    dateAdded: "2022-10-13",
  },
  {
    id: "phone-004",
    name: "iphone 16",
    category: "phones",
    brand: "Apple",
    price: 15000,
    stock: 15,
    sku: "PHONE-APL-004",
    rating: 4.5,
    reviewCount: 101,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["pink", "teal", "black", "white"],
    images: [
      "phones/iphone 16-pink.jpg",
      "phones/iphone 16-blue.jpg",
      "phones/iphone 16-teal.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The OnePlus 11 features a 6.7-inch AMOLED display with 120Hz refresh rate and LTPO 3.0 technology. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and everyday tasks. The triple camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    specifications: [
      { name: "Display", value: '6.7" AMOLED LTPO 3.0' },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "Storage", value: "128GB, 256GB" },
      { name: "Main Camera", value: "50MP (main), 48MP (ultra wide), 32MP (portrait)" },
      { name: "Front Camera", value: "16MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Charging", value: "100W SUPERVOOC" },
      { name: "Dimensions", value: "163.1 x 74.1 x 8.53 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-004-1",
        author: "Kevin Zhang",
        email: "kevin@example.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },
  {
    id: "phone-005",
    name: "iphone 11",
    category: "phones",
    brand: "iphone 11",
    price: 3300,
    stock: 15,
    sku: "PHONE-APL-005",
    rating: 4.5,
    reviewCount: 78,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["white"],
    images: [
      "iphone 11 white-1.jpg",
      "iphone 11 white-3.jpg",
      "phones/iphone 11 white-2.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The OnePlus 11 features a 6.7-inch AMOLED display with 120Hz refresh rate and LTPO 3.0 technology. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and everyday tasks. The triple camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    specifications: [
      { name: "Display", value: '6.7" AMOLED LTPO 3.0' },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "Storage", value: "128GB, 256GB" },
      { name: "Main Camera", value: "50MP (main), 48MP (ultra wide), 32MP (portrait)" },
      { name: "Front Camera", value: "16MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Charging", value: "100W SUPERVOOC" },
      { name: "Dimensions", value: "163.1 x 74.1 x 8.53 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-004-1",
        author: "Clement Amoah",
        email: "clementamoah23@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },

  {
    id: "phone-006",
    name: "iphone 11 Red",
    category: "phones",
    brand: "iphone 11",
    price: 3200,
    stock: 15,
    sku: "PHONE-APL-006",
    rating: 4.5,
    reviewCount: 52,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["red"],
    images: [
      "phones/iphone 11 red-1.jpg",
      "phones/iphone 11 red-2.jpg",
     
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The OnePlus 11 features a 6.7-inch AMOLED display with 120Hz refresh rate and LTPO 3.0 technology. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and everyday tasks. The triple camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    specifications: [
      { name: "Display", value: '6.7" AMOLED LTPO 3.0' },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "Storage", value: "64GB, 128GB" },
      { name: "Main Camera", value: "50MP (main), 48MP (ultra wide), 32MP (portrait)" },
      { name: "Front Camera", value: "16MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Charging", value: "100W SUPERVOOC" },
      { name: "Dimensions", value: "163.1 x 74.1 x 8.53 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-004-1",
        author: "George Mensah",
        email: "georgemensah@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },

  {
    id: "phone-007",
    name: "iphone 11 pro max",
    category: "phones",
    brand: "iphone 11 pro max",
    price: 3800,
    stock: 15,
    sku: "PHONE-APL-007",
    rating: 4.5,
    reviewCount: 82,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["pink", "teal", "black", "white"],
    images: [
      "phones/11 pro max midnightGreen-1.jpg",
      "phones/11 pro max midnightGreen-3.jpg",
      "phones/11 pro max midnightGreen-2.jpg",
    ],
    shortDescription: "This iphone 11 pro max features a 6.7-inch AMOLED display with 120Hz refresh rate and LTPO 3.0 technology. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and everyday tasks. The triple camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    description:
      "The OnePlus 11 features a 6.7-inch AMOLED display with 120Hz refresh rate and LTPO 3.0 technology. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and everyday tasks. The triple camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    specifications: [
      { name: "Display", value: '6.7" AMOLED LTPO 3.0' },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "Storage", value: "128GB, 256GB" },
      { name: "Main Camera", value: "50MP (main), 48MP (ultra wide), 32MP (portrait)" },
      { name: "Front Camera", value: "16MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Charging", value: "100W SUPERVOOC" },
      { name: "Dimensions", value: "163.1 x 74.1 x 8.53 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-007-1",
        author: "Joe Aikins",
        email: "joeaikins@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },
{
    id: "phone-008",
    name: "iphone 12",
    category: "phones",
    brand: "Apple",
    price: 4400,
    stock: 15,
    sku: "PHONE-APL-008",
    rating: 4.5,
    reviewCount: 56,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["pink", "teal", "black", "white"],
    images: [
      "phones/iphone 12White-1.jpg",
      "phones/iphone 12White-2.jpg",
      "phones/iphone 12White-3.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The OnePlus 11 features a 6.7-inch AMOLED display with 120Hz refresh rate and LTPO 3.0 technology. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and everyday tasks. The triple camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    specifications: [
      { name: "Display", value: '6.7" AMOLED LTPO 3.0' },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "Storage", value: "128GB, 256GB" },
      { name: "Main Camera", value: "50MP (main), 48MP (ultra wide), 32MP (portrait)" },
      { name: "Front Camera", value: "16MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Charging", value: "100W SUPERVOOC" },
      { name: "Dimensions", value: "163.1 x 74.1 x 8.53 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-008-1",
        author: "Vivian Addei",
        email: "vivianaddei@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },

  {
    id: "phone-009",
    name: "iphone 13",
    category: "phones",
    brand: "iphone 13",
    price: 4800,
    stock: 15,
    sku: "PHONE-APL-009",
    rating: 4.5,
    reviewCount: 62,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["green"],
    images: [
      "phones/iphone 13 green-1.jpg",
      "phones/iphone 13 green-2.jpg",
      "phones/iphone 13 green-3.jpg",
    ],
    shortDescription: "The camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    description:
      "The OnePlus 11 features a 6.7-inch AMOLED display with 120Hz refresh rate and LTPO 3.0 technology. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and everyday tasks. The triple camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    specifications: [
      { name: "Display", value: '6.7" AMOLED LTPO 3.0' },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "Storage", value: "128GB, 256GB" },
      { name: "Main Camera", value: "50MP (main), 48MP (ultra wide), 32MP (portrait)" },
      { name: "Front Camera", value: "16MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Charging", value: "100W SUPERVOOC" },
      { name: "Dimensions", value: "163.1 x 74.1 x 8.53 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-009-1",
        author: "Ibrahim Razak",
        email: "ibrahimrazak@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },

  {
    id: "phone-010",
    name: "iphone 13",
    category: "phones",
    brand: "iphone 13",
    price: 4800,
    stock: 11,
    sku: "PHONE-APL-0010",
    rating: 4.5,
    reviewCount: 122,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["white"],
    images: [
      "phones/iphone 13White-1.jpg",
      "phones/iphone 13White-2.jpg",
      "phones/iphone 13White-3.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The OnePlus 11 features a 6.7-inch AMOLED display with 120Hz refresh rate and LTPO 3.0 technology. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and everyday tasks. The triple camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    specifications: [
      { name: "Display", value: '6.7" AMOLED LTPO 3.0' },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "Storage", value: "128GB, 256GB" },
      { name: "Main Camera", value: "50MP (main), 48MP (ultra wide), 32MP (portrait)" },
      { name: "Front Camera", value: "16MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Charging", value: "100W SUPERVOOC" },
      { name: "Dimensions", value: "163.1 x 74.1 x 8.53 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-0010-1",
        author: "Shadrach Owusu",
        email: "shadrachowusu@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "I really love the iphone 13. The camera is amazing, especially in low light. The battery life is also impressive, lasting all day with heavy use. The design is sleek and modern.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },

  {
    id: "phone-011",
    name: "iphone XR",
    category: "phones",
    brand: "iphone XR",
    price: 2300,
    stock: 15,
    sku: "PHONE-APL-011",
    rating: 3.7,
    reviewCount: 56,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["orange"],
    images: [
      "phones/iphone XR orange-3.jpg",
      "phones/iphone XR orange-1.jpg",
      "phones/iphone XR orange-2.jpg",
    ],
    shortDescription: "Very powerful smartphone with a 6.1-inch Liquid Retina display and A12 Bionic chip.",
    description:
      "The iphone XR features a 6.1-inch Liquid Retina display with True Tone technology for natural viewing. Powered by the A12 Bionic chip, it delivers fast performance and efficient battery life. The single-camera system includes a 12MP main sensor with Smart HDR and Portrait mode capabilities. Additional features include Face ID, wireless charging, and water resistance.",
    specifications: [
      { name: "Display", value: '6.1" Liquid Retina HD' },
      { name: "Processor", value: "A12 Bionic" },
      { name: "Storage", value: "64GB, 128GB, 256GB" },
      { name: "Main Camera", value: "12MP (main)" },
      { name: "Front Camera", value: "7MP" },
      { name: "Battery", value: "2,942mAh" },
      { name: "Water Resistance", value: "IP67" },
      { name: "Dimensions", value: "150.9 x 75.7 x 8.3 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-008-1",
        author: "Kofi Sam",
        email: "kofisam@gmail.com",
        rating: 5,
        title: "Good dealer",
        content:
          "I love the iphone XR. The display is vibrant, and the performance is smooth. The battery life is also impressive, lasting all day with regular use. The camera takes great photos, especially in good lighting.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },


  {
    id: "phone-012",
    name: "iphone XR",
    category: "phones",
    brand: "iphone XR",
    price: 2400,
    stock: 17,
    sku: "PHONE-APL-012",
    rating: 4.0,
    reviewCount: 36,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["white"],
    images: [
      "phones/iphoneXR-white-3.jpg",
      "phones/Iphone XR-White-2.jpg",
      "phones/iphone XR-white-1.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The OnePlus 11 features a 6.7-inch AMOLED display with 120Hz refresh rate and LTPO 3.0 technology. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and everyday tasks. The triple camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    specifications: [
      { name: "Display", value: '6.7" AMOLED LTPO 3.0' },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "Storage", value: "64GB" },
      { name: "Main Camera", value: "50MP (main), 48MP (ultra wide), 32MP (portrait)" },
      { name: "Front Camera", value: "16MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Charging", value: "100W SUPERVOOC" },
      { name: "Dimensions", value: "163.1 x 74.1 x 8.53 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-012-1",
        author: "Vivian Addei",
        email: "vivianaddei@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },


  {
    id: "phone-013",
    name: "iphone 12",
    category: "phones",
    brand: "iphone 12",
    price: 4200,
    stock: 21,
    sku: "PHONE-APL-0013",
    rating: 4.1,
    reviewCount: 19,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["pink", "teal", "black", "white"],
    images: [
      "phones/iphone 12 Green-1.jpg",
      "phones/iphone 12 Green-2.jpg",
      "phones/iphone 12 Green-3.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The iphone 12 features a 6.1-inch Super Retina XDR display with Ceramic Shield front cover for improved durability. Powered by the A14 Bionic chip, it delivers fast performance and efficient battery life. The dual-camera system includes a 12MP main sensor and a 12MP ultrawide sensor with Night mode capabilities. Additional features include MagSafe accessories, 5G connectivity, and improved water resistance.",
    specifications: [
      { name: "Display", value: '6.1" Super Retina XDR' },
      { name: "Processor", value: "A14 Bionic" },
      { name: "Storage", value: "64GB, 128GB, 256GB" },
      { name: "Main Camera", value: "12MP (main), 12MP (ultra wide)" },
      { name: "Front Camera", value: "12MP" },
      { name: "Battery", value: "2,815mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "146.7 x 71.5 x 7.4 mm" },
    
    ],
    reviews: [
      {
        id: "rev-phone-008-1",
        author: "Godwin Osei",
        email: "godwinosei@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },

  {
    id: "phone-014",
    name: "iphone 12",
    category: "phones",
    brand: "iphone 12",
    price: 4200,
    stock: 21,
    sku: "PHONE-APL-0014",
    rating: 4.1,
    reviewCount: 19,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["red"],
    images: [
      "phones/iphone 12Red-1.jpg",
      "phones/iphone 12Red-2.jpg",
      "phones/iphone 12Red-3.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The iphone 12 features a 6.1-inch Super Retina XDR display with Ceramic Shield front cover for improved durability. Powered by the A14 Bionic chip, it delivers fast performance and efficient battery life. The dual-camera system includes a 12MP main sensor and a 12MP ultrawide sensor with Night mode capabilities. Additional features include MagSafe accessories, 5G connectivity, and improved water resistance.",
    specifications: [
      { name: "Display", value: '6.1" Super Retina XDR' },
      { name: "Processor", value: "A14 Bionic" },
      { name: "Storage", value: "64GB, 128GB, 256GB" },
      { name: "Main Camera", value: "12MP (main), 12MP (ultra wide)" },
      { name: "Front Camera", value: "12MP" },
      { name: "Battery", value: "2,815mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "146.7 x 71.5 x 7.4 mm" },
    
    ],
    reviews: [
      {
        id: "rev-phone-014-1",
        author: "Angela Opoku",
        email: "angelaopoku@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },


  {
    id: "phone-015",
    name: "iphone 12",
    category: "phones",
    brand: "iphone 12",
    price: 4600,
    stock: 21,
    sku: "PHONE-APL-0015",
    rating: 4.3,
    reviewCount: 35,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["blue"],
    images: [
      "phones/iphone 12Blue-1.jpg",
      "phones/iphone 12 Green-2.jpg",
      "phones/iphone 12Blue-3.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The iphone 12 features a 6.1-inch Super Retina XDR display with Ceramic Shield front cover for improved durability. Powered by the A14 Bionic chip, it delivers fast performance and efficient battery life. The dual-camera system includes a 12MP main sensor and a 12MP ultrawide sensor with Night mode capabilities. Additional features include MagSafe accessories, 5G connectivity, and improved water resistance.",
    specifications: [
      { name: "Display", value: '6.1" Super Retina XDR' },
      { name: "Processor", value: "A14 Bionic" },
      { name: "Storage", value: "64GB, 128GB, 256GB" },
      { name: "Main Camera", value: "12MP (main), 12MP (ultra wide)" },
      { name: "Front Camera", value: "12MP" },
      { name: "Battery", value: "2,815mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "146.7 x 71.5 x 7.4 mm" },
    
    ],
    reviews: [
      {
        id: "rev-phone-013-1",
        author: "Jane Appiah",
        email: "janeappiah@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },

  {
    id: "phone-016",
    name: "iphone 12 pro max",
    category: "phones",
    brand: "iphone 12 pro max",
    price: 5200,
    stock: 17,
    sku: "PHONE-APL-0016",
    rating: 4.1,
    reviewCount: 16,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["silver", "navy", "graphite"],
    images: [
      "phones/12 pro max graphite-1.jpg",
      "phones/12 pro max graphite-2.jpg",
      "phones/12 pro max graphite-3.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The iphone 12 features a 6.1-inch Super Retina XDR display with Ceramic Shield front cover for improved durability. Powered by the A14 Bionic chip, it delivers fast performance and efficient battery life. The dual-camera system includes a 12MP main sensor and a 12MP ultrawide sensor with Night mode capabilities. Additional features include MagSafe accessories, 5G connectivity, and improved water resistance.",
    specifications: [
      { name: "Display", value: '6.1" Super Retina XDR' },
      { name: "Processor", value: "A14 Bionic" },
      { name: "Storage", value: "64GB, 128GB, 256GB" },
      { name: "Main Camera", value: "12MP (main), 12MP (ultra wide)" },
      { name: "Front Camera", value: "12MP" },
      { name: "Battery", value: "2,815mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "146.7 x 71.5 x 7.4 mm" },
    
    ],
    reviews: [
      {
        id: "rev-phone-008-1",
        author: "Godwin Osei",
        email: "godwinosei@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },


  {
    id: "phone-017",
    name: "iphone 12 pro",
    category: "phones",
    brand: "iphone 12 pro",
    price: 4900,
    stock: 13,
    sku: "PHONE-APL-0017",
    rating: 4.1,
    reviewCount: 54,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["white"],
    images: [
      "phones/12 pro White-1.jpg",
      "phones/12 pro-white-2.jpg",
      "phones/12 pro-white-3.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The iphone 12 features a 6.1-inch Super Retina XDR display with Ceramic Shield front cover for improved durability. Powered by the A14 Bionic chip, it delivers fast performance and efficient battery life. The dual-camera system includes a 12MP main sensor and a 12MP ultrawide sensor with Night mode capabilities. Additional features include MagSafe accessories, 5G connectivity, and improved water resistance.",
    specifications: [
      { name: "Display", value: '6.1" Super Retina XDR' },
      { name: "Processor", value: "A14 Bionic" },
      { name: "Storage", value: "64GB, 128GB, 256GB" },
      { name: "Main Camera", value: "12MP (main), 12MP (ultra wide)" },
      { name: "Front Camera", value: "12MP" },
      { name: "Battery", value: "2,815mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "146.7 x 71.5 x 7.4 mm" },
    
    ],
    reviews: [
      {
        id: "rev-phone-008-1",
        author: "Emelia Offei",
        email: "emeliaoffei@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        rating: 5,
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },

   {
    id: "phone-018",
    name: "iphone SE 2nd Gen",
    category: "phones",
    brand: "iphone SE 2nd Gen",
    price: 1600,
    stock: 20,
    sku: "PHONE-APL-0018",
    rating: 3.1,
    reviewCount: 75,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["white"],
    images: [
      "phones/SE 2nd Gen-white-1.jpg",
      "phones/SE 2nd Gen-white-2.jpg",
      "phones/SE 2nd Gen-white-3.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The iphone 12 features a 6.1-inch Super Retina XDR display with Ceramic Shield front cover for improved durability. Powered by the A14 Bionic chip, it delivers fast performance and efficient battery life. The dual-camera system includes a 12MP main sensor and a 12MP ultrawide sensor with Night mode capabilities. Additional features include MagSafe accessories, 5G connectivity, and improved water resistance.",
    specifications: [
      { name: "Display", value: '6.1" Super Retina XDR' },
      { name: "Processor", value: "A14 Bionic" },
      { name: "Storage", value: "64GB, 128GB, 256GB" },
      { name: "Main Camera", value: "12MP (main), 12MP (ultra wide)" },
      { name: "Front Camera", value: "12MP" },
      { name: "Battery", value: "2,815mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "146.7 x 71.5 x 7.4 mm" },
    
    ],
    reviews: [
      {
        id: "rev-phone-008-1",
        author: "Emelia Offei",
        email: "emeliaoffei@gmail.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        rating: 5,
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },


  // Watches Category
  {
    id: "watch-001",
    name: "Apple Watch Series 7",
    category: "watches",
    brand: "series watch",
    price: 2720,
    stock: 6,
    sku: "WATCH-RLX-001",
    rating: 4.9,
    reviewCount: 128,
    isNew: false,
    isSale: false,
    isFeatured: true,
    tags: ["luxury", "smartwatch", "waterproof"],
    colors: ["black", "blue", "green"],
    images: [
      "watches/series 7-black.jpg",
      "watches/series 7-back.jpg",
      "watches/series 7-white.jpg",
    ],
    shortDescription: "The ultimate smartwatch with advanced health features.",
    description:
      "The Apple Watch Series 7 is the ultimate smartwatch, featuring a larger always-on display, advanced health monitoring capabilities, and seamless integration with iOS devices. It includes features like ECG, blood oxygen monitoring, and fitness tracking. The watch is water-resistant up to 50 meters and offers a variety of customizable bands and watch faces. With its sleek design and powerful performance, the Series 7 is perfect for both fitness enthusiasts and everyday users.",
    specifications: [
      { name: "Display", value: "45mm or 41mm OLED Retina display" },
      { name: "Operating System", value: "watchOS 8" },
      { name: "Water Resistance", value: "50 meters" },
      { name: "Health Monitoring", value: "ECG, blood oxygen, and more" },  
      { name: "Fitness Tracking", value: "Heart rate, activity tracking, and more" },
      { name: "Battery Life", value: "Up to 18 hours" },
      { name: "Compatibility", value: "Works with iPhone 6s or later" },

    ],
   
    reviews: [
      {
        id: "rev-watch-001-1",
        author: "Christopher Davis",
        email: "christopher@example.com",
        rating: 5,
        title: "The ultimate diving watch",
        content:
          "The Submariner is the perfect blend of luxury and functionality. The build quality is exceptional, and it's versatile enough to wear with a suit or casual attire. A true icon that holds its value.",
        date: "2023-02-18",
      },
    ],
    dateAdded: "2022-08-10",
  },
  {
    id: "watch-002",
    name: "Series 6",
    category: "watches",
    brand: "series watch",
    price: 1900,
   
    discount: 9,
    stock: 5,
    sku: "WATCH-APL-002",
    rating: 4.8,
    reviewCount: 96,
    isNew: false,
    isSale: true,
    isFeatured: true,
    tags: ["luxury", "chronograph", "manual"],
    colors: ["black"],
    images: [
      "watches/series 6-1.jpg",
      "watches/series 6-2.jpg",
      "watches/series 6-3.jpg",
    ],
    shortDescription: "The Series 6 is a classic chronograph with a manual-winding movement.",
    description:
      'The Series 6 is a classic chronograph watch that pays homage to the original Speedmaster. It features a 42mm stainless steel case with a black tachymetric bezel and a black dial with luminous hour markers. The manual-winding Calibre 1861 movement powers the watch, providing a power reserve of approximately 48 hours. The watch is water-resistant up to 50 meters and comes with a stainless steel bracelet. The Series 6 is perfect for collectors and enthusiasts who appreciate vintage design and craftsmanship.',
    specifications: [
      { name: "Case Size", value: "42mm" },
      { name: "Case Material", value: "Stainless steel" },
      { name: "Movement", value: "Calibre 1861, Manual-winding" },
      { name: "Water Resistance", value: "50m (167ft)" },
      { name: "Power Reserve", value: "48 hours" },
      { name: "Bracelet", value: "Stainless steel" },
      { name: "Dial", value: "Black with luminous hour markers" },
      { name: "Functions", value: "Chronograph, tachymetric scale" },
    ],
    reviews: [
      {
        id: "rev-watch-002-1",
        author: "Andrew Adusi",
        email: "andrew@gmail.com",
        rating: 5,
        title: "A piece of history on your wrist",
        content:
          "The Series 6 is a stunning watch that combines vintage charm with modern reliability. The manual-winding movement is a joy to use, and the design is timeless. It feels great on the wrist, and I've received numerous compliments since I started wearing it.",
        date: "2023-03-22",
      },
    ],
    dateAdded: "2022-09-05",
  },
  {
    id: "watch-003",
    name: "Apple Watch Ultra",
    category: "watches",
    brand: "series watch",
    price: 35000,
    stock: 1,
    sku: "WATCH-APL-003",
    rating: 4.9,
    reviewCount: 64,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["luxury", "sports", "automatic"],
    colors: ["blue", "green", "white", "black", "orange"],
    images: [
      "watches/Apple Watch Ultra.jpg",
      "watches/Apple Watch Ultra-black.jpg",
      "watches/Apple Watch Ultra-2.jpg",
    ],
    shortDescription: "One of the most coveted luxury sports watches in the world.",
    description:
      " The Ultra is a luxury sports watch that combines elegance with high-performance features. It features a 40mm stainless steel case with a blue dial and horizontal embossing. The automatic Calibre 26-330 S C movement provides precision and reliability, with a power reserve of approximately 45 hours. The watch is water-resistant up to 120 meters and comes with an integrated stainless steel bracelet. The Nautilus is perfect for those who appreciate luxury and functionality in a timepiece.",
    specifications: [
      { name: "Case Size", value: "40mm" },
      { name: "Case Material", value: "Stainless steel" },
      { name: "Movement", value: "Calibre 26-330 S C, Automatic" },
      { name: "Water Resistance", value: "120m (394ft)" },
      { name: "Power Reserve", value: "45 hours" },
      { name: "Bracelet", value: "Integrated stainless steel" },
      { name: "Dial", value: "Blue with horizontal embossing" },
      { name: "Functions", value: "Hours, minutes, seconds, date" },
    ],
    reviews: [
      {
        id: "rev-watch-003-1",
        author: "Jonathan Price",
        email: "jonathan@example.com",
        rating: 5,
        title: "The ultimate luxury sports watch",
        content:
          "The Nautilus is simply perfect. The blue dial is mesmerizing, and the way it changes in different lighting conditions is magical. The craftsmanship is beyond compare, and it wears incredibly comfortably despite its substantial presence.",
        date: "2023-05-05",
      },
    ],
    dateAdded: "2023-01-15",
  },
  {
    id: "watch-004",
    name: "Series 8",
    category: "watches",
    brand: "series watch",
    price: 2600,
    stock: 20,
    sku: "WATCH-APL-004",
    rating: 4.7,
    reviewCount: 215,
    isNew: true,
    isSale: false,
    isFeatured: false,
    tags: ["smartwatch", "sports", "digital"],
    colors: ["titanium"],
    images: [
      "watches/Apple Watch Series 8-1.jpg",
      "watches/Apple Watch Series 8-2.jpg",
      "watches/Apple Watch Series-3.jpg",
    ],
    shortDescription: "Apple's most rugged and capable smartwatch.",
    description:
      "The Apple Series 8 is a smartwatch that combines advanced health monitoring features with a sleek design. It includes an always-on display, ECG capabilities, and blood oxygen monitoring. The watch is water-resistant up to 50 meters and offers a variety of customizable bands and watch faces. With its powerful performance and seamless integration with iOS devices, the Series 8 is perfect for fitness enthusiasts and everyday users alike.",
    specifications: [
      { name: "Case Size", value: "49mm" },
      { name: "Case Material", value: "Titanium" },
      { name: "Display", value: "Always-On Retina LTPO OLED" },
      { name: "Water Resistance", value: "100m (328ft)" },
      { name: "Battery Life", value: "Up to 36 hours (60 in low power)" },
      { name: "Connectivity", value: "LTE, Wi-Fi, Bluetooth, NFC" },
      { name: "Sensors", value: "ECG, Blood Oxygen, Temperature, Depth" },
      { name: "Special Features", value: "Siren, Night Mode, Action Button" },
    ],
    reviews: [
      {
        id: "rev-watch-004-1",
        author: "John Arthur",
        email: "johnAthur144@gmail.com",
        rating: 5,
        title: "The ultimate adventure companion",
        content:
          "The Apple Watch Ultra is a game-changer for outdoor activities. The battery life is excellent, the display is visible in bright sunlight, and the titanium case has survived some serious bumps without a scratch. The Action button is more useful than I expected.",
        date: "2023-04-10",
      },
    ],
    dateAdded: "2022-09-23",
  },
]

/**
 * Core Product Functions
 */

// Get all products
function getAllProducts() {
  return products
}

// Get product by ID
function getProductById(id) {
  return products.find((product) => product.id === id)
}

// Get products by category
function getProductsByCategory(category) {
  return products.filter((product) => product.category === category)
}

// Get featured products
function getFeaturedProducts(limit = 8) {
  return products
    .filter((product) => product.isFeatured)
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, limit)
}

// Get new arrivals
function getNewArrivals(limit = 8) {
  return products
    .filter((product) => product.isNew)
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, limit)
}

// Get sale products
function getSaleProducts(limit = 8) {
  return products
    .filter((product) => product.isSale)
    .sort((a, b) => (b.discount || 0) - (a.discount || 0))
    .slice(0, limit)
}

// Get related products
function getRelatedProducts(productId, limit = 4) {
  const product = getProductById(productId)
  if (!product) return []

  return products
    .filter((p) => p.category === product.category && p.id !== productId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}

// Search products
function searchProducts(query) {
  query = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query)),
  )
}

// Filter products by price range
function filterByPrice(minPrice, maxPrice) {
  return products.filter((product) => product.price >= minPrice && product.price <= maxPrice)
}

// Filter products by brand
function filterByBrand(brands) {
  if (!Array.isArray(brands)) brands = [brands]
  return products.filter((product) => brands.includes(product.brand.toLowerCase()))
}

// Filter products by rating
function filterByRating(minRating) {
  return products.filter((product) => product.rating >= minRating)
}

// Sort products
function sortProducts(products, sortBy) {
  const productsCopy = [...products]

  switch (sortBy) {
    case "price-low":
      return productsCopy.sort((a, b) => a.price - b.price)
    case "price-high":
      return productsCopy.sort((a, b) => b.price - a.price)
    case "name-asc":
      return productsCopy.sort((a, b) => a.name.localeCompare(b.name))
    case "name-desc":
      return productsCopy.sort((a, b) => b.name.localeCompare(a.name))
    case "newest":
      return productsCopy.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    case "rating":
      return productsCopy.sort((a, b) => b.rating - a.rating)
    case "popularity":
      return productsCopy.sort((a, b) => b.reviewCount - a.reviewCount)
    default:
      return productsCopy
  }
}

/**
 * UI Helper Functions
 */

// Format price
function formatPrice(price) {
  return (
    "₵" +
    price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  )
}

// Create star rating HTML
function getStarRatingHTML(rating) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  let stars = ""

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>'
  }

  // Half star
  if (halfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>'
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>'
  }

  return stars
}

// Create product card HTML
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.setAttribute("data-id", product.id)
  card.setAttribute("data-category", product.category)
  card.setAttribute("data-price", product.price)

  card.innerHTML = `
        <div class="product-image">
            <img src="${product.images[0]}" alt="${product.name}">
            <div class="product-badges">
                ${product.isNew ? '<span class="badge new">New</span>' : ""}
                ${product.isSale ? '<span class="badge sale">Sale</span>' : ""}
                ${product.discount ? `<span class="badge discount">-${product.discount}%</span>` : ""}
            </div>
            <div class="product-actions">
                <a href="product-detail.html?id=${product.id}" class="action-btn"><i class="fas fa-eye"></i></a>
                <a href="#" class="action-btn add-to-wishlist" data-id="${product.id}"><i class="far fa-heart"></i></a>
                <a href="#" class="action-btn add-to-cart-btn" data-id="${product.id}"><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
            <h3 class="product-title"><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
            <div class="product-rating">
                <div class="stars">
                    ${getStarRatingHTML(product.rating)}
                </div>
                <span class="rating-count">(${product.reviewCount})</span>
            </div>
            <div class="product-price">
                <span class="current-price">${formatPrice(product.price)}</span>
                ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
            </div>
        </div>
    `

  return card
}

// Show notification
function showNotification(message, type = "success") {
  // Check if notification container exists
  let notificationContainer = document.querySelector(".notification-container")

  // Create container if it doesn't exist
  if (!notificationContainer) {
    notificationContainer = document.createElement("div")
    notificationContainer.className = "notification-container"
    document.body.appendChild(notificationContainer)
  }

  // Create notification
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `

  // Add to container
  notificationContainer.appendChild(notification)

  // Add close event
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    notification.classList.add("fade-out")
    setTimeout(() => {
      notification.remove()
    }, 300)
  })

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add("fade-out")
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 5000)
}

// Export functions for use in other files
window.productUtils = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getFeaturedProducts,
  getNewArrivals,
  getSaleProducts,
  getRelatedProducts,
  searchProducts,
  filterByPrice,
  filterByBrand,
  filterByRating,
  sortProducts,
  formatPrice,
  getStarRatingHTML,
  createProductCard,
  showNotification,
}
