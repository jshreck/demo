import "./App.css";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("maroon");

  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Select a color to change the box color</p>
        <div
          style={{ height: "200px", width: "200px", backgroundColor: color }}
        ></div>
        <br />
        <select value={color} onChange={handleChange}>
          <option value="maroon">Maroon</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="turquoise">Turquoise</option>
        </select>
      </header>
    </div>
  );
};

export default App;
