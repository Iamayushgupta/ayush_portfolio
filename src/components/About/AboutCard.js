import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi everyone, I'm{" "}
                        <span className="purple"> Ayush Gupta </span>
                        from{" "}
                        <span className="purple">
                            {" "}
                            Mumbai, India.{" "}
                        </span>{" "}
                        <br />I am a final year student pursuing
                        Bachelor of Technology in Computer Science from VIT Vellore. <br /> I am an aspiring engineer
                        interested in Backend Development, Problem Solving and Competitive Coding.<br />
                        <br />
                        In my spare time, I 
                    </p>{" "}
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Watch movies.{" "}
                        </li>{" "}
                        <li className="about-activity">
                            <ImPointRight /> Play sports like Badminton, Football, Table Tennis, Basketball.{" "}
                        </li>{" "}
                        <li className="about-activity">
                            <ImPointRight /> Go out on vacation.{" "}
                        </li>{" "}
                    </ul>{" "}
                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Trade what you want the most for what you want at the moment"{" "}
                    </p>{" "}
                    <footer className="blockquote-footer"> Ayush </footer>{" "}
                </blockquote>{" "}
            </Card.Body>{" "}
        </Card>
    );
}

export default AboutCard;
