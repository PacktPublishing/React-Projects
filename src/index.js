import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './containers/List';

const App = () => {
  return (
    <div class="container">
      <List />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
