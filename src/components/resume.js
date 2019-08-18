import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import img from '../assets/adithyan.jpg';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img src={img} alt="avatar" className="avatar-img"/>

            </div>

            <h2 style={{paddingTop: '2em'}}>ADITHYAN P S</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>reactJS developer.handles the Postgresql database.deep knowledge about Firebasedb .backend is coding by using python django.also using reactredux in frontend</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>puthuvayil house</p>
            <p>pombra post</p>
            <p>karakurrissi via </p>
            <p>palakkad district </p>
            <p>kerala </p>
            <p>india</p>
            <h5>Phone</h5>
            <p>9995181234</p>
            <h5>Email</h5>
            <p>adithyanps3@gmail.com</p>
            <h5>Website</h5>
            <p>https://adithyanps.github.io/my_portfolio/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
               <Education
                 startYear={2010}
                 endYear={2012}
                 schoolName="GVHSS KARAKURISSI"
                 schoolDescription="COURSE-SCIENCE BIOLOGY"
                  />
                  <Education
                    startYear={2013}
                    endYear={2017}
                    schoolName="University of calicut"
                    schoolDescription="GOVERNMENT ENGINEERING COLLEGE PALAKKAD"
                     />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="web developer"
              company="Recursive labs"
              jobDescription="creating django rest api's"
              />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="web developer"
                company="NOVIZCO AI LABS"
                jobDescription="working on both frontend(react) and backend(Django).Creating Rest API'S Django framework using the postgresql database.api's are send into React as JSON format."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={75}
                />
              <Skills
                skill="React"
                progress={75}
                />
              <Skills
                  skill="Django"
                  progress={70}
                />
              <Skills
                skill="javascript"
                progress={75}
                />
              <Skills
                skill="Django Rest API"
                progress={90}
                />
              <Skills
                skill="Google Cloud Deployment"
                progress={90}
                />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
