import React from "react";
import Container from "../components/Container";
import Card from "../components/Card/Card.js";
import Row from "../components/Row";
import Col from "../components/Col";
import Header from "../components/Header/Header.js";

function About() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Row>
                                <Col>
                                    <h1>About David Sklar</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span class="border border-white"></span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p class="lr-3">After successful career in politics, I took over my family business in 2016 and have since been aquired by a large insurance company.</p>
                                    <p> This led me to begin searching for new challenges and what better challenge then learning how to code!
                                    <b>So what's in store for the future?  Hopefully a coding career!</b> I really enjoy working with Node, databases and the entire frontend stack.</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default About;