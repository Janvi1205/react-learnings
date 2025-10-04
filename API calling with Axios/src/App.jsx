import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const response = await axios.get("https://boringapi.com/api/v1/photos");
    setData(response.data.photos);
    console.log(response.data.photos[0].url);
  };

  return (
    <div>
      <button
        onClick={getdata}
        style={{ padding: "30px", color: "white", backgroundColor: "green" }}
      >
        Get Data
      </button>

      <div>
        {data.map((item) => (
          <img key={item.id} src={item.url} alt={item.title} width="200" />
        ))}
      </div>
    </div>
  );
};

export default App;
