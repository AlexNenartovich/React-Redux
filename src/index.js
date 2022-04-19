import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Provider } from "react-redux";
import Hello from "./Hello";

import store from "./store";
class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Hello />
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
);
