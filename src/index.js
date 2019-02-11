import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './containers/List';

const App = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <a className="navbar-brand text-light" href="#">MovieList</a>
      </nav>

      <List />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
