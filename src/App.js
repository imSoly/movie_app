import React from "react";

function Food({ fav }) {
  return <h1>I love {fav}.</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Don't be soly</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;