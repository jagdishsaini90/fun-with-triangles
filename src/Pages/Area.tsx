import React, { useState } from "react";

const Area = () => {
  const [side1, setSide1] = useState<number>();
  const [side2, setSide2] = useState<number>();
  const [side3, setSide3] = useState<number>();
  const [result, setResult] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const firstValue = Number(side1);
    const secondValue = Number(side2);
    const thirdValue = Number(side3);

    if (
      firstValue + secondValue > thirdValue &&
      secondValue + thirdValue > firstValue &&
      firstValue + thirdValue > secondValue
    ) {
      const semiPerimeter = (firstValue + secondValue + thirdValue) / 2;

      const res = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - firstValue) *
          (semiPerimeter - secondValue) *
          (semiPerimeter - thirdValue)
      ).toFixed(4);

      setResult(`Area of a triangle using heron's formula is ${res} units`);
    } else {
      setResult("Enter valid side lengths such that each side lengths");
    }
  };
  return (
    <div className="hypotenuse">
      <h1 style={{ marginBottom: "20px" }}>Calculate Area of a triangle</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <div>
            <label
              style={{
                color: "steelblue",
                fontSize: "25px",
              }}
            >
              Enter first side of a triangle
            </label>
          </div>
          <input
            className="triangle__input"
            type="number"
            value={side1}
            onChange={(e) => setSide1(e.target.value as unknown as number)}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div>
            <label
              style={{
                color: "steelblue",
                fontSize: "25px",
              }}
            >
              Enter second side of a triangle
            </label>
          </div>
          <input
            className="triangle__input"
            type="number"
            value={side2}
            onChange={(e) => setSide2(e.target.value as unknown as number)}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div>
            <label
              style={{
                color: "steelblue",
                fontSize: "25px",
              }}
            >
              Enter third side of a triangle
            </label>
          </div>
          <input
            className="triangle__input"
            type="number"
            value={side3}
            onChange={(e) => setSide3(e.target.value as unknown as number)}
            required
          />
        </div>
        <div className="triangle__button">
          <button className="butttton2" onClick={handleSubmit}>
            Calculate
          </button>
        </div>
      </form>
      <h2 style={{ marginTop: "10px" }}>{result}</h2>
    </div>
  );
};

export default Area;
