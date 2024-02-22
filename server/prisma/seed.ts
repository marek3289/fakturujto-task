import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const initialProducts = [
  {
    id: '1',
    name: 'Smart Plant Pot',
    slug: 'smart-plant-pot',
    description: 'A plant pot equipped with sensors to monitor soil moisture, light levels, and temperature, sending notifications to your phone when your plant needs water or more sunlight.',
    createdAt: new Date('2022-01-01'),
    editedAt: new Date('2022-01-02'),
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    price: '$10.99',
    quantity: 10,
    productionDate: new Date('2022-01-01'),
    category: 'smartphones'
  },
  {
    id: '2',
    name: 'AI-Powered Home Security Drone',
    slug: 'ai-powered-home-security-drone',
    description: 'A drone that patrols your home\'s exterior, using AI to recognize and alert you to unusual activity, with the ability to stream live video directly to your smartphone.',
    createdAt: new Date('2022-01-03'),
    editedAt: new Date('2022-01-04'),
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    price: '$15.99',
    quantity: 20,
    productionDate: new Date('2022-01-03'),
    category: 'laptops'
  },
  {
    id: '3',
    name: 'Eco-friendly Reusable Bubble Wrap',
    slug: 'eco-friendly-reusable-bubble-wrap',
    description: 'Made from recycled materials, this bubble wrap can be washed and reused, designed for eco-conscious consumers who frequently ship or store fragile items.',
    createdAt: new Date('2022-01-05'),
    editedAt: new Date('2022-01-06'),
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    price: '$20.99',
    quantity: 15,
    productionDate: new Date('2022-01-05'),
    category: 'displays'
  },
  {
    id: '4',
    name: 'Portable Language Translator Device',
    slug: 'portable-language-translator-device',
    description: 'A small, wearable device that can translate multiple languages in real-time, allowing for seamless conversation with people around the world.',
    createdAt: new Date('2022-01-07'),
    editedAt: new Date('2022-01-08'),
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    price: '$25.99',
    quantity: 5,
    productionDate: new Date('2022-01-07'),
    category: 'smartphones'
  },
    {
    id: '5',
    name: '3D Printing Pen for Food',
    slug: '3d-printing-pen-for-food',
    description: 'A pen that allows you to "draw" with edible ingredients, creating custom shapes and designs that can be cooked and eaten.',
    createdAt: new Date('2022-01-01'),
    editedAt: new Date('2022-01-02'),
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    price: '$10.99',
    quantity: 10,
    productionDate: new Date('2022-01-01'),
    category: 'smartphones'
  },
  {
    id: '6',
    name: 'Smart Mirror with Virtual Wardrobe',
    slug: 'smart-mirror-with-virtual-wardrobe',
    description: 'A mirror that displays digital versions of your clothes, helping you to mix and match outfits without physically changing. It can also suggest new items to purchase based on your taste.',
    createdAt: new Date('2022-01-03'),
    editedAt: new Date('2022-01-04'),
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    price: '$15.99',
    quantity: 20,
    productionDate: new Date('2022-01-03'),
    category: 'laptops'
  },
  {
    id: '7',
    name: 'Wireless Charging Desk Organizer',
    slug: 'wireless-charging-desk-organizer',
    description: 'An elegant desk organizer that not only keeps your stationery in order but also charges your devices wirelessly.',
    createdAt: new Date('2022-01-05'),
    editedAt: new Date('2022-01-06'),
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    price: '$20.99',
    quantity: 15,
    productionDate: new Date('2022-01-05'),
    category: 'displays'
  },
  {
    id: '8',
    name: 'Personalized Nutrition Supplement Dispenser',
    slug: 'personalized-nutrition-supplement-dispenser',
    description: 'A device that dispenses daily nutrition supplements based on personalized health data and goals, synced with your fitness trackers.',
    createdAt: new Date('2022-01-07'),
    editedAt: new Date('2022-01-08'),
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    price: '$25.99',
    quantity: 5,
    productionDate: new Date('2022-01-07'),
    category: 'smartphones'
  }
]

const createProducts = async () => {
  await prisma.product.createMany({
    data: initialProducts.map((product) => {
      const { id, name, slug, description, createdAt, editedAt, coverImg, price, quantity, productionDate, category } = product
      
      return {
        id,
        name,
        slug,
        description,
        createdAt,
        editedAt,
        coverImg,
        price,
        quantity,
        productionDate,
        category,
      }
    })
  })
}

async function main() {
  await createProducts()
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => await prisma.$disconnect())
