import React from "react";
import "./App.css";
import cardsData from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
function App() {
  const cards = cardsData.map((data) => <Card key={data.id} {...data} />);
  return (
    <React.Fragment>
      <Navbar />
      <section className="cards">{cards}</section>
    </React.Fragment>
  );
}

export default App;
