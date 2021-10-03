import React, { useState } from "react";

const Hypotenuse = () => {
  const [base, setBase] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [result, setResult] = useState<any>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setResult(
      Math.pow(
        Number(base) * Number(base) + Number(height) * Number(height),
        0.5
      )
    );
  };
  return (
    <div className="hypotenuse">
      <h1 style={{ marginBottom: "20px" }}>
        Calculate Hypotenuse of a triangle
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label
              style={{
                color: "steelblue",
                fontSize: "25px",
              }}
            >
              Enter base value (a) =
            </label>
          </div>
          <input
            className="triangle__input"
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value as unknown as number)}
            required
          />
        </div>
        <div>
          <div>
            <label
              style={{
                color: "steelblue",
                fontSize: "25px",
              }}
            >
              Enter height value (b) =
            </label>
          </div>
          <input
            className="triangle__input"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value as unknown as number)}
            required
          />
        </div>
        <div className="triangle__button">
          <button className="butttton1" onClick={handleSubmit}>
            Calculate Hypotenuse
          </button>
        </div>
      </form>
      <h1 style={{ marginTop: "10px" }}>Hypotenuse formula</h1>
      <h2 style={{ marginTop: "10px" }}>√(base² + height²)</h2>
      <h3 style={{ marginTop: "10px" }}>
        {result && `The length of hypotenuse is ${result}`}
      </h3>
    </div>
  );
};

export default Hypotenuse;
