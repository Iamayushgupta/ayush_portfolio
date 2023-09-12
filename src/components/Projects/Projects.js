import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import school from "../../Assets/Projects/school-erp.png";
import chotaDhobi from "../../Assets/Projects/chotaDhobi.png";
import reco from "../../Assets/Projects/reco.png";
import weather from "../../Assets/Projects/weather.png";
import task from "../../Assets/Projects/task.png";
import notes from "../../Assets/Projects/notes.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple"> Works </strong>{" "}
                </h1>{" "}
                <p style={{ color: "white" }}>
                    Here are a few projects I 've worked on recently.{" "}
                </p>{" "}
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={reco}
                            title="Recommendation App"
                            description="Designed and Developed an App where user could effortlessly share and access personalised dish recommendations within restaurants."
                            ghLink="https://github.com/Iamayushgupta/recommendation-app"
                            // demoLink="https://school-erp-ruddy.vercel.app/"
                        />
                    </Col>{" "}
                    {/* <Col md={4} className="project-card">
                                                <ProjectCard
                                                    imgPath={nft}
                                                    title="NFT Marketplace"
                                                    description=""
                                                    ghLink=""
                                                />
                                            </Col>{" "} */}{" "}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={weather}
                            title="Weather App"
                            description="Developed an Application where a user could enter a location and get the current weather."
                            ghLink="https://github.com/Iamayushgupta/weather-app"
                        />
                    </Col>{" "}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={task}
                            title="Task Manager"
                            description="Designed and developed a user-friendly task management application, empowering users to effectively organize their tasks."
                            ghLink="https://github.com/Iamayushgupta/task-manager"
                            // demoLink="https://mern-stack-student-list-project.vercel.app/"
                        />
                    </Col>{" "}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={notes}
                            title="Notes App"
                            description="A CLI based notes taking app in which user provides the title and body of the note and then its gets stored in the JSON File."
                            ghLink="https://github.com/Iamayushgupta/notes-app"
                        />
                    </Col>{" "}
                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={keeper}
                            title="Keeper App"
                            description="A basic React application in which we can write about any important stuff or can use it as a daily diary also. Just simply write the title of the note and the note itself and add it. Moreover, we can delete the note using the delete button."
                            ghLink="https://github.com/Paraschawla21/react-project-keeper-app"
                            demoLink="https://keeper-app-murex.vercel.app/"
                        />
                    </Col>{" "} */}
                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={todo}
                            title="To-Do List"
                            description="A basic To-Do List Application designed and developed using React.js. We can simply add the list of items which we have to do and just simply cut them when they are done."
                            ghLink="https://github.com/Paraschawla21/react-project-to-do-list-app-"
                            demoLink="https://react-project-to-do-list-app.vercel.app/"
                        />
                    </Col>{" "} */}
                </Row>{" "}
            </Container>{" "}
        </Container>
    );
}

export default Projects;
