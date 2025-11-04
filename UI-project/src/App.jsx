import Section1  from "./component/Section1/section1";

  const reviews= [
    {
      "id": 1,
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "text": "Using this app made my daily routine so much easier. Everything is quick and smooth!",
      "review": "Satisfied"
    },
    {
      "id": 2,
      "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "text": "Customer support was slow to respond. The service needs improvement.",
      "review": "Underserved"
    },
    {
      "id": 3,
      "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "text": "Loved how user-friendly the interface is. Perfect for beginners like me!",
      "review": "Satisfied"
    },
    {
      "id": 4,
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      "text": "The app crashes sometimes but overall works decently for basic tasks.",
      "review": "Underserved"
    },
    {
      "id": 5,
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      "text": "Amazing experience! I didn’t expect it to perform this well on my phone.",
      "review": "Satisfied"
    },
    {
      "id": 6,
      "image": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
      "text": "The features are good but the pricing could be more affordable.",
      "review": "Underserved"
    },
    {
      "id": 7,
      "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "text": "Everything worked as promised. The updates keep making it even better!",
      "review": "Satisfied"
    },
    {
      "id": 8,
      "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "text": "The delivery took too long, and the support didn’t help much.",
      "review": "Underserved"
    },
    {
      "id": 9,
      "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      "text": "Very professional design and smooth workflow. Definitely worth using!",
      "review": "Satisfied"
    },
    {
      "id": 10,
      "image": "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
      "text": "Good overall experience, but I wish it had more customization options.",
      "review": "Underserved"
    }
  ]
  

const App=()=>{
  return(
    <div>
      <Section1 reviews={reviews}/>
    </div>
    

  )
}
export default App;