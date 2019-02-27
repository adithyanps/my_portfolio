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
            <h5>Web</h5>
            <p>mywebsite.com</p>
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
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="React"
                progress={75}
                />
              <Skills
                  skill="django"
                  progress={50}
                />
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={40}
                  />




          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
