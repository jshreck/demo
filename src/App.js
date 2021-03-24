import "./App.css";
import { useState } from "react";

const DEFAULT_COLOR_AND_SELECTED_OPTION = "green";

const App = () => {
  const [color, setColor] = useState(DEFAULT_COLOR_AND_SELECTED_OPTION);
  const [selectedOption, setSelectedOption] = useState(DEFAULT_COLOR_AND_SELECTED_OPTION)

  const handleChange = (event) => {
    if (event.target.value === "surpriseMe") {
      setColor(getRandomColor());
      setSelectedOption(event.target.value);
    }
    else {
      setColor(event.target.value);
      setSelectedOption(event.target.value);
    }
  };

  const getRandomColor = () => {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Select a color to change the box color</p>
        <div style={{height: "200px", width: "200px", backgroundColor: color}} />
        <br />
        <select value={selectedOption} onChange={handleChange}>
          <option value="green">Green</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="turquoise">Turquoise</option>
          <option value="gray">Gray</option>
          <option value="surpriseMe">Surprise Me</option>
        </select>
      </header>
    </div>
  );
};

export default App;
