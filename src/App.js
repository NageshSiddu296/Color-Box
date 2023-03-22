import "./styles.css";
import { useState } from "react";

function ColorBox() {
  const [color, setColor] = useState("blue");

  const handleClick = () => {
    setColor(color === "blue" ? "red" : "blue");
  };

  const styles = { backgroundColor: color };
  return (
    <div className="App">
      <div className="box" style={styles} onClick={handleClick}>
        <h1>Click to change Color</h1>
      </div>
    </div>
  );
}

export default ColorBox;
