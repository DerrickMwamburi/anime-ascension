import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

// Data to populate
const products = [
  {
    id: 1,
    name: 'Naruto T-Shirt',
    description: 'A cool Naruto-themed T-shirt',
    price: 19.99,
    image: new URL('../assets/naruto-tshirt.jpg', import.meta.url).href,
    category: 'Anime Shirts',
  },
  {
    id: 2,
    name: 'Demon Slayer T-Shirt',
    description: 'T-shirt featuring Tanjiro from Demon Slayer',
    price: 19.99,
    image: new URL('../assets/demon-slayer-tshirt.jpg', import.meta.url).href,
    category: 'Anime Shirts',
  },
  {
    id: 3,
    name: 'Attack on Titan Manga',
    description: 'Volume 1 of Attack on Titan manga',
    price: 9.99,
    image: new URL('../assets/aot-manga.jpg', import.meta.url).href,
    category: 'Manga Volumes',
  },
  {
    id: 4,
    name: 'Luffy Action Figure',
    description: 'Action figure of Luffy from One Piece',
    price: 29.99,
    image: new URL('../assets/luffy-figure.jpg', import.meta.url).href,
    category: 'Action Figures',
  },
  {
    id: 5,
    name: 'Sailor Moon Cosplay Costume',
    description: 'Cosplay costume of Sailor Moon',
    price: 49.99,
    image: new URL('../assets/sailor-moon-costume.jpg', import.meta.url).href,
    category: 'Cosplay Costumes',
  },
];

const streamingPlatforms = [
  {
    id: 1,
    name: 'Crunchyroll',
    url: 'https://www.crunchyroll.com',
    description: 'Stream the latest anime episodes and movies.',
  },
  {
    id: 2,
    name: 'Funimation',
    url: 'https://www.funimation.com',
    description: 'Watch dubbed and subbed anime series.',
  },
  {
    id: 3,
    name: 'Netflix',
    url: 'https://www.netflix.com',
    description: 'Popular anime series and movies available.',
  },
];

// Function to populate Firestore
async function populateFirestore() {
  try {
    // Populate products
    const productsCollection = collection(db, 'products');
    for (const product of products) {
      await addDoc(productsCollection, product);
      console.log(`Added product: ${product.name}`);
    }

    // Populate streaming platforms
    const streamingCollection = collection(db, 'streamingPlatforms');
    for (const platform of streamingPlatforms) {
      await addDoc(streamingCollection, platform);
      console.log(`Added platform: ${platform.name}`);
    }

    console.log('Firestore population complete!');
  } catch (error) {
    console.error('Error populating Firestore:', error);
  }
}

// Run the function
populateFirestore();