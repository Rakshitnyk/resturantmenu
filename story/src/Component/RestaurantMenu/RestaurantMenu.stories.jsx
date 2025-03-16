import RestaurantMenu from "./RestaurantMenu"

export default {
  title: "Components/RestaurantMenu",
  component: RestaurantMenu,
  parameters: {
    layout: "fullscreen",
  },
}

const categories = ["TANDOORI STARTERS", "SOUP", "STARTERS", "MANCHURIAN", "BIRYANI", "PULAV", "GRAVY"]

const menuItems = [
  {
    id: 1,
    name: "Babycorn Tikka",
    description: "Deliciously marinated babycorn cooked to perfection.",
    price: 220.0,
    image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19992.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_authors_boost",
    category: "TANDOORI STARTERS",
    isVeg: true,
  },
  {
    id: 2,
    name: "Harabara Kabab",
    description: "Healthy and flavorful kababs made with spinach and peas.",
    price: 210.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "TANDOORI STARTERS",
    isVeg: true,
  },
  {
    id: 3,
    name: "Malai Paneer Tikka",
    description: "Soft paneer cubes in a creamy marinade, grilled to perfection.",
    price: 250.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "TANDOORI STARTERS",
    isVeg: true,
  },
  {
    id: 4,
    name: "Methi Paneer Tikka",
    description: "Paneer marinated with fenugreek infused spices.",
    price: 250.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "TANDOORI STARTERS",
    isVeg: true,
  },
  {
    id: 5,
    name: "Mushroom Malai Tikka",
    description: "Juicy mushrooms in a rich, creamy marinade.",
    price: 250.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "TANDOORI STARTERS",
    isVeg: true,
  },
  {
    id: 6,
    name: "Mushroom Tikka",
    description: "Grilled mushrooms with aromatic spices.",
    price: 220.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "TANDOORI STARTERS",
    isVeg: true,
  },
  {
    id: 7,
    name: "Paneer Jangli Kebab",
    description: "Spicy paneer kebabs with a unique flavor.",
    price: 250.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "TANDOORI STARTERS",
    isVeg: true,
  },
  {
    id: 8,
    name: "Paneer Lasooni Kebab",
    description: "Garlic-infused paneer kebabs with a smoky taste.",
    price: 240.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "TANDOORI STARTERS",
    isVeg: true,
  },
  {
    id: 9,
    name: "Paneer Sheek Kebab",
    description: "Skewered paneer kebabs grilled to perfection.",
    price: 250.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "TANDOORI STARTERS",
    isVeg: true,
  },
  {
    id: 10,
    name: "Tandoor Platter",
    description: "An assortment of tandoori specialties.",
    price: 350.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "TANDOORI STARTERS",
    isVeg: true,
  },
  {
    id: 11,
    name: "Tomato Soup",
    description: "Classic tomato soup with herbs.",
    price: 150.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "SOUP",
    isVeg: true,
  },
  {
    id: 12,
    name: "Veg Manchurian",
    description: "Vegetable dumplings in a spicy, tangy sauce.",
    price: 230.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "MANCHURIAN",
    isVeg: true,
  },
  {
    id: 13,
    name: "Veg Biryani",
    description: "Fragrant rice cooked with vegetables and aromatic spices.",
    price: 280.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "BIRYANI",
    isVeg: true,
  },
]

// Template for all stories
const Template = (args) => <RestaurantMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  restaurantName: "Bharjari Bhojana",
  restaurantAddress: "B w 6th & 7th cross, Sampige Rd, Sangeetha Apts, Malleshwaram, Bengaluru, Karnataka 560003",
  restaurantImage:
    "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_authors_boost", // Using the provided image URL
  categories: categories,
  menuItems: menuItems,
}

export const FilteredView = Template.bind({})
FilteredView.args = {
  ...Default.args,
  // This will start with a pre-selected category in the story
  // Note: We can't directly set the state here, but users can click to filter
}

export const EmptyState = Template.bind({})
EmptyState.args = {
  restaurantName: "Bharjari Bhojana",
  restaurantAddress: "B w 6th & 7th cross, Sampige Rd, Sangeetha Apts, Malleshwaram, Bengaluru, Karnataka 560003",
  restaurantImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2011.29.23_af6905c5.jpg-4YSxgv3DarSeciabNbcimhJppAkGmS.jpeg",
  categories: [],
  menuItems: [],
}

