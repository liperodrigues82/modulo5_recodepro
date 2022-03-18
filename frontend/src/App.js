import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Promo from "./components/Promo";
import Destiny from "./components/Destiny";
import Contact from "./components/Contact";
import ListUserComponent from './components/ListUser';
import FooterComponent from './components/Footer';
import CreateUserComponent from './components/CreateUser';
import ViewUserComponent from './components/ViewUser';
import Principal from './components/Principal';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Principal}></Route>
            <Route path="/Promo" component={Promo}></Route>
            <Route path="/Destiny" component={Destiny}></Route>
            <Route path="/Contact" component={Contact}></Route>
            <Route path="/users" component={ListUserComponent}></Route>
            <Route path="/add-user/:id" component={CreateUserComponent}></Route>
            <Route path="/view-user/:id" component={ViewUserComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;