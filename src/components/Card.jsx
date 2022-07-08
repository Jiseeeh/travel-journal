import React from "react";
import "./Card.css";
import locationIcon from "../assets/location.svg";

export default function Card(props) {
  return (
    <React.Fragment>
      <section className="card">
        <article className="card__image-container">
          <img className="card__image" src={props.img} />
        </article>
        <section className="card__body">
          <article className="card__location">
            <img src={locationIcon} />
            <p>{props.location}</p>
            <a href={props.locationLink} target="_">
              View on google maps
            </a>
          </article>
          <h1 className="card__title">{props.title}</h1>
          <h4 className="card__date">
            {props.startDate} - {props.endDate}
          </h4>
          <p className="card__description">{props.description}</p>
        </section>
      </section>
    </React.Fragment>
  );
}
