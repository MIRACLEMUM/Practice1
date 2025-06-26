import React, { useState } from "react";

function Colorpicker() {
  const [color, setColor] = useState("#ffffff");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h2>Color Picker</h2>

      <div className="color-display" style={{ backgroundColor: color, padding: "20px", marginBottom: "10px", borderRadius: "8px" }}>
        <p>Selected color: {color}</p>
      </div>

      <label>Select a color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default Colorpicker;
