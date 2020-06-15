import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/styles.css';
import json from './assets/json';
import TestImg from './assets/test.png';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import './styles/less.less';
import './styles/scss.scss';
import './babel';
import React from 'react';
import { render } from 'react-dom';
const post = new Post('New post title!', TestImg);

// $('pre').addClass('code').html(post.toString())

console.log('Post to string: ', post.toString());
console.log('JSON: ', json);
console.log('XML: ', xml);
console.log('CSV: ', csv);

const App = () => (
  <div className="container">
    <h1>Webpack:</h1>
    <hr />

    <div className="logo"></div>
    <hr />

    <pre />
    <hr />

    <div className="box">
      <h2>Less</h2>
    </div>
    <hr />

    <div className="card">
      <h2>Sass</h2>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));