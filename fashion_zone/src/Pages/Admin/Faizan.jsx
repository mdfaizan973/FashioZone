import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Faizan.css";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTrophy,
  AiFillTwitterCircle,
} from "react-icons/ai";
export default function Faizan() {
  return (
    <div>
      <div id="main_container_cc">
        <div id="sidebar_rr">
          <h1>Admin Dashboard</h1>
          <ul>
            <RouterLink to="/adminpanel">
              <li>Dashboard</li>
            </RouterLink>
            <RouterLink to="/adminuser">
              <li>Users</li>
            </RouterLink>
            <RouterLink to="/allprod">
              <li>Products</li>
            </RouterLink>
            <RouterLink to="/faizan">
              <li>Admin</li>
            </RouterLink>
          </ul>
        </div>
        <div id="content">
          <Faizancard />
        </div>
      </div>
    </div>
  );
}

function Faizancard() {
  return (
    <>
      <div id="container_main">
        <div id="img_card">
          <img src="https://avatars.githubusercontent.com/u/106812942?v=4" />
          <h1>Md Faizan</h1>
          <p>Full-Stack Web Developer</p>
          <div id="social">
            <p className="socils_child">
              <a
                target="_blank"
                href="https://www.instagram.com/crick_faizan_973/"
              >
                <AiFillInstagram />
              </a>
            </p>
            <p className="socils_child">
              <a
                target="_blank"
                href="https://www.facebook.com/md.faizan.3517563"
              >
                <AiFillFacebook />
              </a>
            </p>
            <p className="socils_child">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/md-faizan-380a65246/"
              >
                <AiFillLinkedin />
              </a>
            </p>
            <p className="socils_child">
              <a target="_blank" href="https://twitter.com/MdFaiza59640358">
                <AiFillTwitterCircle />
              </a>
            </p>
            <p className="socils_child">
              <a target="_blank" href="https://mdfaizan973.github.io/">
                <AiFillTrophy />
              </a>
            </p>
            <p className="socils_child">
              <a target="_blank" href="https://github.com/mdfaizan973">
                <AiFillGithub />
              </a>
            </p>
          </div>
        </div>
        <div id="details_card">
          <h1>About</h1>
          <p>
            A Full-Stack Web Developer specializing in MERN Stack with good
            proficiency in HTML, CSS, JS, ReactJS, Redux, NodeJS, ExpressJS,
            MongoDB, Data Structures and Algorithms. Has a Problem-Solving
            mindset and the ability to perform well in a team. Acquired 1200+
            hours of coding and hands-on experience in cloning websites. Looking
            forward to working as an accountable and competent professional in
            an exciting tech organization.
          </p>
          <h1>Skills</h1>
          <ul class="developer-skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>Chakra UI</li>
            <li>Tailwind CSS</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Mongo DB</li>
            <li>J-Query</li>
            <li>Python</li>
            <li>Data structure and Algorithm (DSA)</li>
          </ul>
          <h1>Tools</h1>
          <ul class="developer-skills">
            <li>VS Code</li>
            <li>CodePen</li>
            <li>CodeSend Box</li>
            <li>Replit</li>
            <li>NPM</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Render</li>
            <li>Chat GPT</li>
          </ul>
        </div>
      </div>
    </>
  );
}
