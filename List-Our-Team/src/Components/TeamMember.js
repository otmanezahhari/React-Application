import React from "react";

export default function TeamMember(props) {
  return (
    <div
      className="team"
      style={{ backgroundColor: props.info.website ? "thistle" : "orange" }}
    >
      <div className="team-title">
        <img
          className="img-width"
          src={props.info.img}
          alt={`Image for ${props.info.fullName}`}
        />
      </div>
      <div className="team-descritpion">
        <h2 className="header-team">{props.info.fullName}</h2>
        <h3 className="position-team">{props.info.position}</h3>
        <h4 className="info-team">{props.info.phone}</h4>
        <h4 className="info-team">{props.info.email}</h4>
        <h4 className="info-team">{props.info.website}</h4>
      </div>
    </div>
  );
}
