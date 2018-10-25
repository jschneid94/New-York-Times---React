import React, { Component } from "react";
import { Container, Col, Row } from "../../components/Grid";
import Card from "../../components/Card";
import Form from "../../components/Form";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="sm-12">
            {/* <Card>
              <Form></Form>
            </Card> */}
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Home;