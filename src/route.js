import React , { Component } from 'react';
import { Switch , Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter} from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import Contact from './containers/Contact';
import Resume from './containers/Resume';
import AboutMe from './containers/AboutMe';
import Projects from './containers/Projects';

class RoutePath extends Component {
  render(){
    return(
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/resume" component={Resume} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />


        </Switch>
      </React.Fragment>
    )
  }
}
export default withRouter(RoutePath);
