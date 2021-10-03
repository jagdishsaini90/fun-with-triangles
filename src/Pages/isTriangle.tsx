import React, { useState } from "react";
import "./Common.css";

const IsTraingle: React.FC = () => {
  const [angle1, setAngle1] = useState<number>();
  const [angle2, setAngle2] = useState<number>();
  const [angle3, setAngle3] = useState<number>();
  const [result, setResult] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (Number(angle1) + Number(angle2) + Number(angle3) === 180) {
      setResult("Yay, the angles form a triangle!");
    } else {
      setResult("Oh Oh! The angle doesn't form a triangle");
    }
  };
  return (
    <div className="triangle">
      <h1 style={{ marginBottom: "10px" }}>Angles of triangles</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Angle 1</label>
          </div>
          <input
            className="triangle__input"
            type="number"
            value={angle1}
            onChange={(e) => setAngle1(e.target.value as unknown as number)}
            required
          />
        </div>
        <div>
          <div>
            <label>Angle 2</label>
          </div>
          <input
            className="triangle__input"
            type="number"
            value={angle2}
            onChange={(e) => setAngle2(e.target.value as unknown as number)}
            required
          />
        </div>
        <div>
          <div>
            <label>Angle 3</label>
          </div>
          <input
            className="triangle__input"
            type="number"
            value={angle3}
            onChange={(e) => setAngle3(e.target.value as unknown as number)}
            required
          />
        </div>
        <div className="triangle__button">
          <button className="butttton" onClick={handleSubmit}>
            is Triangle?
          </button>
        </div>
      </form>
      <div>
        <h2>{result}</h2>
      </div>
    </div>
  );
};

export default IsTraingle;
