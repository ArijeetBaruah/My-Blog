import React, { Component } from 'react';
import appConstants from '../util/appContaints';

const {DEADLINK} = appConstants

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.getBody = this.getBody.bind(this);
  }
  getBody() {
    return {__html: 'First &middot; Second'};
  }

  render() {
    return (
      <div className="projectDetail container">
        <a href={DEADLINK} onClick={this.props.goBack}>&lt; back</a>
        <h1>#{this.props.id} Title Header</h1>
        <span>2nd Sept 2017</span>
        <div className="imageWrapper">
          Image Wrapper
        </div>
        <div dangerouslySetInnerHTML={this.getBody()} />
      </div>
    );
  }
}

export default ProjectDetail;
