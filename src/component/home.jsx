import React, { Component, Fragment } from 'react';
import HomeArticle from './recent_article';
import appContaints from '../util/appContaints';

const { DEADLINK } = appContaints;

class Home extends Component {
  render() {
    return (
      <Fragment>
        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase">
                  <strong>Arijeet Baruah</strong>
                </h1>
                <hr />
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="text-faded mb-5">Unity GamePlay Programmer</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href={DEADLINK}>Find Out More</a>
              </div>
            </div>
          </div>
        </header>
        <div className="dashboard container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <HomeArticle />
            </div>
            <div className="col-sm-12 offset-md-1 col-md-5"></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
