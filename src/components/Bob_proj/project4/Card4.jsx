import React from "react";

function Card4(props) {
    return (

        <div className="card">
            <img src={props.trav.img} className="card--image" />

            <div className="card--stats">
                <img src={props.trav.googleMaps} />
                <span className="card--loc">{props.trav.location}</span>
                <span className="card--link">
                    <a href="https://www.google.com/maps/d/u/0/viewer?msa=0&mid=1hjs3mIoZBblBP_CvxiP4w38STiY&ll=15.792914338408467%2C34.569168&z=3" className="card--link">

                        {props.trav.link}
                    </a>
                </span>

                <h1 className="card--title"> {props.trav.title} </h1>
                <p className="card--date">{props.trav.startDate} - {props.trav.endDate}</p>
                <p className="card--descp">
                    {props.trav.description

                    }</p>
            </div>
        </div >
    );
}

export default Card4;
