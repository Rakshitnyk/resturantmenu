import "./recipe-card.css"
import { ArrowLeft, Filter, Share2, Heart } from "lucide-react"

const RecipeCard = ({
  title = "Grilled Skirt Steak",
  location = "Sanjeev Kapoor, India",
  time = "40 mins",
  image = "/placeholder.svg?height=200&width=200",
  ingredients = [
    { name: "Fregola", amount: "1/4 Cup", icon: "/https://img.freepik.com/free-photo/background-full-couscous_1127-219.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Skirt Steak", amount: "1 Pound", icon: "/placeholder.svg?height=30&width=30" },
    { name: "Salt", amount: "1 Tablespoon", icon: "/placeholder.svg?height=30&width=30" },
    { name: "Red Onion", amount: "1/2 Small", icon: "/placeholder.svg?height=30&width=30" },
    { name: "Fresh Lemon Juice", amount: "2 Tablespoons", icon: "/placeholder.svg?height=30&width=30" },
    { name: "Baby Arugula", amount: "5 Ounces", icon: "/placeholder.svg?height=30&width=30" },
  ],
}) => {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <button className="icon-button">
          <ArrowLeft size={20} color="white" />
        </button>
        <button className="icon-button">
          <Filter size={20} color="white" />
        </button>
      </div>

      <div className="recipe-content">
        <div className="recipe-image-container">
          <img src={image || "/placeholder.svg"} alt={title} className="recipe-image" />

          <div className="action-buttons">
            <button className="action-button share">
              <Share2 size={18} color="#333" />
            </button>
            <button className="action-button favorite">
              <Heart size={18} color="#333" />
            </button>
          </div>
        </div>

        <div className="recipe-details">
          <h1 className="recipe-title">{title}</h1>
          <p className="recipe-subtitle">{location}</p>
          <p className="recipe-time">{time}</p>
        </div>

        <div className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <div className="ingredient-item" key={index}>
              <div className="ingredient-icon">
                <img src={ingredient.icon || "/placeholder.svg"} alt={ingredient.name} />
              </div>
              <div className="ingredient-name">{ingredient.name}</div>
              <div className="ingredient-amount">{ingredient.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipeCard

