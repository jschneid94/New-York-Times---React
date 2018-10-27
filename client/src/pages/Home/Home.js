import React, { Component } from "react";
import { Container, Col, Row } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import "./Home.css";

class Home extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="sm-12">
            <div className="card text-center">
              <div className="card-header">
                
                <h4><i class="fa fa-list-alt"></i> Search</h4>
              </div>
              <div className="card-body">
                <form>
                  <Input
                    value={this.state.topic}
                    onChange={this.handleInputChange}
                    name="topic"
                    id="topic"
                    text="Topic"
                  />
                  <Input
                    value={this.state.startYear}
                    onChange={this.handleInputChange}
                    name="startYear"
                    id="startYear"
                    text="Start Year"
                  />
                  <Input
                    value={this.state.endYear}
                    onChange={this.handleInputChange}
                    name="endYear"
                    id="endYear"
                    text="End Year"
                  />
                  <FormBtn
                    disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                    onClick={this.handleFormSubmit}
                  >
                    Search
                  </FormBtn>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Home;