import React from "react";
import ListGroup from "../components/ListGroup/ListGroup";
import Card from "../components/Card/Card.js";
import Row from "../components/Row";
import Col from "../components/Col";

function Project() {
    return (
        <Card>
            <Row>
                <Col>
                    <Row>
                        <ListGroup />
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}

export default Project;