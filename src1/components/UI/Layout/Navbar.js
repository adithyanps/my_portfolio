import React , { Component } from 'react';
import { Layout , Header, Navigation , Drawer , Content , Textfield}  from 'react-mdl';
import RoutePath from '../../../route';
import { Link } from 'react-router-dom';
import '../../../App.css';

class Navbar extends Component {
  render(){
    return(
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Title" scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/contact">Contact</Link>
                      <Link to="/projects">Projects</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <RoutePath />
              </Content>
          </Layout>
      </div>
    )
  }
}
export default Navbar;
