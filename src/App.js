import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import TodoMain from './components/todo/todoMain';
import LandingPage from './components/facebook/LandingPage';

function App() {
  

  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <ul className="nav">
        
        <li className="nav-item">
          <Link className="nav-link" to ="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/todo">Todo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/facebook">Facebook</Link>
          </li>
    </ul>
    </nav>
  </div>
  <Switch>
        <Route exact path="/"  />
        <Route exact path="/todo" component={TodoMain}/>
        <Route exact path="/facebook" component={LandingPage}/>
      </Switch>
      
    </Router>
  );
  
}








export default App;
