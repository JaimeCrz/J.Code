import axios from "axios";
import React, { Component } from "react";
import CvCards from "./CvCards";

class Curriculums extends Component {
  state = {
    curriculums: []
  };

  componentDidMount() {
    axios.get('./src/data/curriculums.json')
      .then(response => {
        this.setState({
          curriculums: response.data
        })
      })
  }

  render() {
    const curriculums = this.state.curriculums;
    let curriculumsList;

    if (curriculums.length > 0) {
      curriculumsList = curriculums.map(curriculum => {
        return (
          <div id={'curriculum-' + curriculum.id} key={curriculum.id}>
            <CvCards curriculum={curriculum} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            <h1 className="ui white inverted header">Curriculum Vitae</h1>
          </div>
        </div>
        <div className="ui stackable four column grid">{curriculumsList}</div>
      </div>
    );
  }
}

export default Curriculums;