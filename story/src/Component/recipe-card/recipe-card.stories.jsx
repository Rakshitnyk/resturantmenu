import RecipeCard from "./recipe-card"

export default {
  title: "Components/RecipeCard",
  component: RecipeCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    location: { control: "text" },
    time: { control: "text" },
    image: { control: "text" },
    ingredients: { control: "object" },
  },
}

// Create a template for the component
const Template = (args) => <RecipeCard {...args} />

// Create the default story
export const Default = Template.bind({})
Default.args = {
  title: "Grilled Skirt Steak",
  location: "Sanjeev Kapoor, India",
  time: "40 mins",
  image:
    "https://files.oaiusercontent.com/file-Ewsdz42drRTLAq1Wdn5Bwd?se=2025-03-16T04%3A55%3A49Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6cd6304e-6351-47d2-b5de-4d62dfb18cd6.webp&sig=L7ojcrujEzMEJBHSWvTWpiX9cRGwip93ESNreCTdSOc%3D",
  ingredients: [
    { name: "Fregola", amount: "1/4 Cup", icon: "https://img.freepik.com/free-photo/background-full-couscous_1127-219.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Skirt Steak", amount: "1 Pound", icon: "https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_2829-18668.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Salt", amount: "1 Tablespoon", icon: "https://img.freepik.com/free-vector/realistic-salt-composition-with-spoon-pouring-powder-into-plate-with-detailed-salt-particles-transparent-background-vector-illustration_1284-82396.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Red Onion", amount: "1/2 Small", icon: "https://img.freepik.com/premium-photo/onion-isolated_55883-7867.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Fresh Lemon Juice", amount: " 2Tablespoons ", icon: "https://img.freepik.com/free-photo/lemon-mint-infused-water-recipe_53876-33867.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Baby Arugula", amount: "5 Ounces", icon: "https://img.freepik.com/free-photo/close-up-photo-fresh-spinach_176420-7294.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  ],
}

// Create a story with different data
export const VegetarianRecipe = Template.bind({})
VegetarianRecipe.args = {
  title: "Vegetable Stir Fry",
  location: "Jamie Oliver, UK",
  time: "25 mins",
  image: "/images/stir-fry.jpg",
  ingredients: [
    { name: "Broccoli", amount: "1 Cup", icon: "/images/broccoli.png" },
    { name: "Carrots", amount: "2 Medium", icon: "/images/carrot.png" },
    { name: "Bell Peppers", amount: "1 Large", icon: "/images/pepper.png" },
    { name: "Soy Sauce", amount: "3 Tablespoons", icon: "/images/soy.png" },
    { name: "Ginger", amount: "1 Inch", icon: "/images/ginger.png" },
    { name: "Rice", amount: "2 Cups", icon: "/images/rice.png" },
  ],
}

// Create a story with minimal data
export const Minimal = Template.bind({})
Minimal.args = {
  title: "Simple Pasta",
  location: "Home Kitchen",
  time: "15 mins",
  image: "/images/pasta.jpg",
  ingredients: [
    { name: "Pasta", amount: "200g", icon: "/images/pasta.png" },
    { name: "Olive Oil", amount: "2 Tablespoons", icon: "/images/oil.png" },
    { name: "Garlic", amount: "2 Cloves", icon: "/images/garlic.png" },
  ],
}

