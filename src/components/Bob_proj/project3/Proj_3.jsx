// Building the airbnb static pages to impement props and arrays in react

import React from "react";
import Navbar from "./Navbar";
// import "./style.css";
import Hero from "./Hero";
import Card from "./Card";
import data from "./Data";
function Proj_3() {
  const Kate = data.map((cont) => (
    <Card
      key={cont.id}
      cont={cont}
      // we are passing to the component the entire object item as a prop

      // we can also use the spread objects as props
      {...cont}
      // we will remove the .cont in Card.jsx

      /*   image={cont.img}
      rating={cont.rating}
      reviewCount={cont.reviewCount}
      country={cont.country}
      title={cont.title}
      price={cont.price}
      openSpots={cont.openSpots}
      location={cont.location} */

      // notice that the card component has a lot of props ,thus to minimize this ,can use objects that we can pass props
    />
  ));
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Card
        img={mg}
        rating={('5.0')}
        reviewCount={6}
        country={'USA'}
        title='Life lessons from Katie Zafares'
        price={136}
      /> */}
      {/* advanced way */}
      <section className="hero">{Kate}</section>
    </div>
  );
}

export default Proj_3;

// PROBLEMS
// Hardcoded the card component ,however it is limited since it is not re-usable
