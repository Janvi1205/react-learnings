import Product from "./components/Product";
import Nav from "./components/Nav";


const App = () => {
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
      image: "public/images/mango.png"
    },
    {
      id: 4,
      name: "Orange",
      price: 40,
      image: "public/images/orange.png"
    },
    {
      id: 5,
      name: "Grapes",
      price: 60,
      image: "public/images/grapes.png"
    },
    {
      id: 6,
      name: "Pineapple",
      price: 90,
      image: "public/images/pine.png"
    },
    {
      id: 7,
      name: "Watermelon",
      price: 120,
      image: "public/images/watermelon.png"
    },
    {
      id: 8,
      name: "Strawberry",
      price: 150,
      image: "public/images/stawb.png"
    },
    {
      id: 9,
      name: "Kiwi",
      price: 80,
      image: "public/images/kiwi.png",
    },
    {
      id: 10,
      name: "Papaya",
      price: 55,
      image: "public/images/papaya.png",
    }
  ];

  return (
    <div>
      <Nav/>

      <div>

        {products.map(elem => (
          <Product name={elem.name} price={elem.price} image={elem.image} />
        ))}
      </div>


    </div>


  );
}
export default App;