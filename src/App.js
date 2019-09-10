import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  const [stars, setStars] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{`Current rating: ${stars}`}</p>
        <div style={{ color: "gold" }}>
          <StarRating totalStars={3} handleSelection={setStars} value={stars} />
        </div>
      </header>
    </div>
  );
}

export default App;
