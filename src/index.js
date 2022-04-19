import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Provider } from "react-redux";
import Counter from "./Components/counter";
import Posts from "./Components/Posts";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import store from "./store";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
);
