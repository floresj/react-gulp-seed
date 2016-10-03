import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const app = document.getElementById("app");

class App extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div>
          <h1>Hola, Mundo!</h1>
      </div>
    );
  }
}
ReactDOM.render(<App/>, app);
