import React from 'react';
import photo from '/Users/hunterzandri/Desktop/Bootcamp/React-Portolio/src/assets/cover/IMG_6190.jpeg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="my-5">
        <img className="profile-img" src={photo}></img>
        {/* <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i> */}
        </div>
        <p>
          Full stack web developer eager to start a careeer in tech 
</p>
      </div>
    </section>
  );
}

export default About;
