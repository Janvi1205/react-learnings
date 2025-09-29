import Product from "./components/Product";
const App=()=>{
  const products = [
  { 
    id: 1, 
    name: "Apple", 
    price: 50, 
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400" 
  },
  { 
    id: 2, 
    name: "Banana", 
    price: 20, 
    image: "public/images/banana.png"
    
  },
  { 
    id: 3, 
    name: "Mango", 
    price: 70, 
    image: "https://images.unsplash.com/photo-1627308595216-439b63e3e5ff?w=400" 
  },
  { 
    id: 4, 
    name: "Orange", 
    price: 40, 
    image: "https://images.unsplash.com/photo-1611080626919-7c8c6b3c3a89?w=400" 
  },
  { 
    id: 5, 
    name: "Grapes", 
    price: 60, 
    image: "https://images.unsplash.com/photo-1615486364205-8af0d8f8b7a1?w=400" 
  },
  { 
    id: 6, 
    name: "Pineapple", 
    price: 90, 
    image: "https://images.unsplash.com/photo-1502741126161-b048400d0809?w=400" 
  },
  { 
    id: 7, 
    name: "Watermelon", 
    price: 120, 
    image: "https://images.unsplash.com/photo-1610440042657-5d96b9f2de3d?w=400" 
  },
  { 
    id: 8, 
    name: "Strawberry", 
    price: 150, 
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400" 
  },
  { 
    id: 9, 
    name: "Kiwi", 
    price: 80, 
    image: "https://images.unsplash.com/photo-1615484477214-5d6d6f90e1f1?w=400" 
  },
  { 
    id: 10, 
    name: "Papaya", 
    price: 55, 
    image: "https://images.unsplash.com/photo-1611080626919-7c8c6b3c3a89?w=400" 
  }
];

     return (
    <div>
      {products.map(elem => (
        <Product  name={elem.name} price={elem.price} image={elem.image} />
      ))}
    </div>
  );
}
export default App;