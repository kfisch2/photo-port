import coverImage from "../../assets/cover/cover-image.jpg";
import React from "react";

function About() {
  return (
    <section className="my-5">
      <header id="about">
        <h1>About</h1>
      </header>
      <img src={coverImage} className="my-2" style={{ width: '100%'}}/>
    </section>
  );
}

export default About;
