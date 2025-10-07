import { useContext } from "react";
import { DataContext } from "../usercontext";

const Header = () => {
  const data = useContext(DataContext); 

  return (
    <div>
      <h1>Header — {data.age}</h1>
    </div>
  );
};

export default Header;
