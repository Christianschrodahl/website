import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./../home/Home";
import About from "./../about/About";
import Contact from "./../contact/Contact";
function Layout() {
  return (
    <Router>
      <div>
        <header>
          <nav className="Header">
            <div className="Header__logo">
              <Link to="/">LOGO</Link>
            </div>
            <ul className="Header__list">
              <li className="Header__item">
                <Link to="/">Home</Link>
              </li>
              <li className="Header__item">
                <Link to="/about">About</Link>
              </li>
              <li className="Header__item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Layout;
