import React from "react";

const UnitSelector = ({ units, onChange }) => {
  console.log("Rendering UnitSelector with units:", units);

  const handleUnitChange = (unit) => {
    console.log("Unit changed to:", unit);
    if (typeof onChange === "function") {
      onChange(unit);
    }
  };

  return (
    <div>
      <label htmlFor="metric">
        <input
          id="metric"
          type="radio"
          value="metric"
          checked={units === "metric"}
          onChange={() => handleUnitChange("metric")}
        />
        Celsius
      </label>
      <label htmlFor="imperial">
        <input
          id="imperial"
          type="radio"
          value="imperial"
          checked={units === "imperial"}
          onChange={() => handleUnitChange("imperial")}
        />
        Fahrenheit
      </label>
    </div>
  );
};

export default UnitSelector;
