import Cards from './components/Cards'

const App = () => {
  const users = [
    {
      name: "Aarav Mehta",
      city: "Mumbai",
      age: 29,
      profession: "Software Engineer",
      profilePhoto: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Sanya Kapoor",
      city: "Delhi",
      age: 26,
      profession: "Graphic Designer",
      profilePhoto: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Karan Singh",
      city: "Bangalore",
      age: 32,
      profession: "Product Manager",
      profilePhoto: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
      name: "Neha Sharma",
      city: "Pune",
      age: 24,
      profession: "Content Writer",
      profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "Rohan Verma",
      city: "Chennai",
      age: 28,
      profession: "Data Analyst",
      profilePhoto: "https://randomuser.me/api/portraits/men/23.jpg"
    }
  ];

  return (
    <div>
      {users.map(elem => (
        <Cards  username={elem.name} age={elem.age} city={elem.city} proff={elem.profession} pic={elem.profilePhoto} />
      ))}
    </div>
  );
};

export default App;
