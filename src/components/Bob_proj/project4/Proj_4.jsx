import React from "react";
import Navbar from "./Navbar";
import "./style4.css";
import data from "./Data4";
import Card4 from "./Card4";

function Proj_4() {
  const travel = data.map((trav) => <Card4
    key={trav}
    trav={trav}
  />);
  return (
    <div>
      <Navbar />
      <section>
        {travel}
      </section>
      
    </div>
  );
}

export default Proj_4;
