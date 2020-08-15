import React from "react";
import "./About.scss";
const image = require("assets/images/tzach.png");

const About = () => {
  return (
    <div className="page-container">
      <div className="about-title">
        <h1>Hi! my name is Tzach Bein</h1>
        <h2>I am a web developer</h2>
        <h3>Here's some information about me...</h3>
      </div>
      <hr></hr>
      <div>If you wish to know personal things:</div>
      <ul>
        <li>33 y.o, from Tel aviv yaffo, living with my partner and 2 cats.</li>
        <li>
          I 3D design and print, doing crochet, practice yoga on a daily basis
          and recently learned to play the piano.
        </li>
      </ul>
      <hr></hr>
      <div>If you wish to know my work experience:</div>
      <ul>
        <li>
          Experienced Web Development Engineer with High responsibility, good
          UI/UX orientation, great communication skills and common sense.
        </li>
        <li>
          I have Hands-on experience developing and maintaining large scale web
          applications. I am Lead developer in the team, responsible for
          upgrading the company's main product. My Technologies stack: React,
          C#, .Net, Couchbase, Elasticsearch, Node.js, AngularJS, AWS solutions,
          and many more.
        </li>
      </ul>
      <hr></hr>
      <img className="profile-image" src={image} title="tzach" alt="tzach" />
    </div>
  );
};

export default About;
