import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function App() {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    const res = await axios.get(`${API}/count`);
    setCount(res.data.clicks);
  };

  const handleClick = async () => {
    const res = await axios.get(`${API}/click`);
    setCount(res.data.clicks);
  };

  useEffect(() => { getCount(); }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Click Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
