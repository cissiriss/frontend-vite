import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const url = "https://backend-express-36q4.onrender.com/";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Deploy test</h1>
      <div>Cissis första deploy</div>
    </>
  );
}

export default App;
