// Building the card component and hardcoding the data
// Limitation -NOT REUSABLE
import React from "react";
// import kat from './Katy.png'
import star from "./Star 1.png";

function Card(props) {
  // instead of using props.cont which is an object we have destructured the props.cont and obtained only the image
  let badgeText;
  if (props.cont.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.cont.location === "online") {
    badgeText = "ONLINE";
  }
  /*  else {
     badgeText='ON SALE'
   } */

  return (
    <div className="card">
      {/* card will be positon relative while the sold out dive is position absolute */}
      {badgeText && <div className="card--sold">{badgeText}</div>}
      {/* Using conditional rendering since this element is used if a specific condition is met */}
      <img src={props.cont.img} className="card--image" />
      {/* we use the property name in the data i.e img when we pass the object as a prop */}
      {/* <img src={props.cont.image} className="card--image" /> */}
      {/* Normally we used the prop name of prop passed to the component */}

      {/* can also use:
              img src={../images/${props.cont.img}} */}
      {/* due to destructuring we need not to use props.cont.img since img is the property and it is destructured */}
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span>
          {props.cont.rating}
          <span className="rate">
            ({props.cont.reviewCount}).
            {props.cont.country}
          </span>
        </span>
        {/* span is a inline element while p and div are block elements */}
        {/* Use span so that the text can be in the same line as the image  */}
      </div>

      <p className="card--title">{props.cont.title} </p>
      <p>
        <span className="dol">From ${props.cont.price}</span>/ person
      </p>
    </div>
  );
}

export default Card;

// Solution -Building Data driven components
// we used props.cont to pass data from the component in Proj_3
