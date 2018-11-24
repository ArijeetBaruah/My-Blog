import React, { Component } from 'react';
import HomeArticle from './recent_article';

class Home extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <HomeArticle />
          </div>
          <div className="col-sm-12 offset-md-1 col-md-5"></div>
        </div>
      </div>
    );
  }
}

export default Home;
