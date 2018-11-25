import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import zoro from '../assets/img/zoro.png';
import '../style/notfound.sass';

const NotFound = () => (
  <div className="container notfound">
    <img
      src={zoro}
      className="rounded"
      alt="Page Not Found Zoro" />
    <div>Page Not Found</div>
  </div>
);

export default NotFound;
