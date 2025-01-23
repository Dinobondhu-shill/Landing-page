import React from 'react';
import '../components/Team.css'
import image from "../../public/choncol.jpg"

const Team = () => {
  const teamMembers = [
    {
      name: "Paul Basten",
      role: "President",
      image: image,
      shapeColor: "#2B3990"
    },
    {
      name: "Sue Attwood",
      role: "Project Manager",
      image: image,
      shapeColor: "#FFD056"
    },
    {
      name: "Carrie Abbey",
      role: "Photographer",
      image: image,
      shapeColor: "#FFB4A2"
    }
  ];
  return (
    <div id="team" className="team section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 align-self-center">
          <div className="section-heading">
            <h4>Codefreeg <em>Team</em></h4>
            <img src="assets/images/heading-line-dec.png" alt="" />
            <p>Unveiling Our Passion, Expertise, and Dedication to Delivering Innovative Web Solutions That Empower Your Business to Thrive</p>
          </div>
          </div>
          <div className='row'>
          <div className='col-lg-12'>
          <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="member-card col-lg-3" key={index}>
              <div className="member-image-container">
                <div 
                  className="shape-background" 
                  style={{ backgroundColor: member.shapeColor }}
                />
                <div className="member-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
          </div>
          </div>
          </div>
          </div>
          </div>
  );
};

export default Team;