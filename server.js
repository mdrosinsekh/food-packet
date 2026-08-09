const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// Server-side database
const dishes = [
  { id: 1, name: "Classic Cheeseburger", category: "Burgers", price: 249.00, rating: 4.7, desc: "Juicy beef patty with cheddar cheese, lettuce, and special sauce.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Pepperoni Pizza", category: "Pizza", price: 499.00, rating: 4.8, desc: "Hand-tossed crust topped with fresh mozzarella and sliced pepperoni.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "Tandoori Paneer Pizza", category: "Pizza", price: 549.00, rating: 4.5, desc: "Fresh tandoori paneer, red onions, and cilantro on garlic crust.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "Salmon Roll (8pcs)", category: "Sushi", price: 699.00, rating: 4.9, desc: "Fresh salmon, avocado, and cucumber wrapped in nori and rice.", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80" },
  { id: 5, name: "Chicken Pad Thai", category: "Asian", price: 389.00, rating: 4.6, desc: "Stir-fried rice noodles with chicken, crushed peanuts, and bean sprouts.", img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=500&q=80" },
  { id: 6, name: "Paneer Tikka Tacos", category: "Mexican", price: 299.00, rating: 4.7, desc: "Three grilled paneer tacos topped with cilantro, onions, and fresh salsa.", img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=500&q=80" },
  { id: 7, name: "Chocolate Molten Cake", category: "Desserts", price: 199.00, rating: 4.9, desc: "Rich chocolate cake filled with warm gooey fudge, served with ice cream.", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },
  { id: 8, name: "Iced Caramel Macchiato", category: "Drinks", price: 149.00, rating: 4.4, desc: "Espresso combined with vanilla syrup, milk, and caramel drizzle over ice.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" }
];

// API Endpoints
app.get('/api/dishes', (req, res) => {
  res.json(dishes);
});

app.post('/api/orders', (req, res) => {
  const { cart } = req.body;
  if (!cart || Object.keys(cart).length === 0) {
    return res.status(400).json({ success: false, message: "Cart cannot be empty" });
  }

  res.json({
    success: true,
    orderId: `SUIII-${Math.floor(100000 + Math.random() * 900000)}`,
    estimatedTime: "25-35 mins"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});