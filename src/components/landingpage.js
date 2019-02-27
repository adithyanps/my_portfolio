import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '../assets/adithyan.jpg';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={img} alt="avatar" className="avatar-img"/>

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

            <p>HTML/CSS | Bootstrap | JavaScript | React | Python | Django | Postgresql | React-Redux | Firebasedb</p>

        <div className="social-links">

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/adithyan-ps-281549179/" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>

        {/* Github */}
        <a href="https://github.com/adithyanps" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>

        {/* instagram */}
        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>

        {/* Youtube */}
        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-youtube-square" aria-hidden="true" />
        </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
