import React, { Component } from "react";
import TeamMember from "./TeamMember";
import { Member } from "./data";

class Team extends Component {
  render() {
    return (
      <div className="teamContent">
        {Member.map((info) => (
          <TeamMember key={info.id} info={info} />
        ))}

        {/* <TeamMember
          info={{
            fullName: "Otmane ZAHHARI",
            position: "Web Developer",
            img: "../image/profile02.jpg",
            phone: "+212123456",
            email: "oza@oza.oza",
            website: "ozah.com",
          }}
        />

        <TeamMember
          info={{
            fullName: "Otmane ZAHHARI",
            position: "Web Developer",
            img: "../image/profile02.jpg",
            phone: "+212123456",
            email: "oza@oza.oza",
          }}
        />
        <TeamMember
          info={{
            fullName: "Otmane ZAHHARI",
            position: "Web Developer",
            img: "../image/profile02.jpg",
            phone: "+212123456",
            email: "oza@oza.oza",
            website: "ozah.com",
          }}
        /> */}
      </div>
    );
  }
}

export default Team;
