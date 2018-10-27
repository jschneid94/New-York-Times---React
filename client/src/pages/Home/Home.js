import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import { Container, Col, Row } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import "./Home.css";

class Home extends Component {

  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  loadArticles = () => {
    API.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then(res =>
        this.setState({ articles: res.data, topic: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadArticles();
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6 sm-12">
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
                    type="date"
                  />
                  <Input
                    value={this.state.endYear}
                    onChange={this.handleInputChange}
                    name="endYear"
                    id="endYear"
                    text="End Year"
                    type="date"
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
          <Col size="md-6 sm-12">
            <div className="card text-center">
              <div className="card-header">
                <h4><i class="fa fa-list-alt"></i> Result</h4>
              </div>
              <div className="card-body">
                {this.state.articles.length ? (
                  <List>
                    {this.state.articles.map(article => {
                      return (
                        <ListItem key={article._id}>
                            Whats up
                        </ListItem>  
                      );
                    })}
                  </List>
                ) : (
                    <h3>No Results to Display</h3>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Home;