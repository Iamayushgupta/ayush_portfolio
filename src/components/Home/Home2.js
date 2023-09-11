import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            My <span className="purple"> Achievements </span>{" "}{" "}
                        </h1>{" "}
                        <p className="home-about-body">
                            I am a 5⭐ coder
                            <i>
                                <b className="purple"> @Codechef </b>{" "}
                            </i>{" "}
                            <br></br>
                            <br /> I am Specialist{" "}
                            <i>
                                <b className="purple"> @Codeforces </b>{" "}
                            </i>{" "}
                            <br />
                            <br />
                            Solved over 900+ problems{" "}
                            <i>
                                <b className="purple">
                                    {" "}
                                    @Leetcode{" "}
                                </b>{" "}
                            </i>{" "}
                            <br />
                            <br />
                            {" "}
                            I have expertise in 
                            <i>
                                <b className="purple">{" "}
                                    Nodejs, MongoDB, Express and Mongoose
                                </b>{" "}
                            </i>{" "}
                        </p>{" "}
                    </Col>{" "}
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>{" "}
                    </Col>{" "}
                </Row>{" "}
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1> FIND ME ON </h1>{" "}
                        <p>
                            Feel free to{" "}
                            <span className="purple"> connect </span>with me{" "}
                        </p>{" "}
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Iamayushgupta"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>{" "}
                            </li>{" "}
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/ayush71011"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>{" "}
                            </li>{" "}
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/ayush-gupta-ab0996228/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>{" "}
                            </li>{" "}
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/ayush.gupta.11/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>{" "}
                            </li>{" "}
                        </ul>{" "}
                    </Col>{" "}
                </Row>{" "}
            </Container>{" "}
        </Container>
    );
}
export default Home2;
