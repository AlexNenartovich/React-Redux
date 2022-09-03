import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Counter from "./Components/counter";
import Posts from "./Components/Posts";
import Header from "./Components/Header";
import ReadPost from "./Pages/ReadPost";
import Favorites from "./Components/Favorites";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import store from "./store";
import Edit from "./Pages/edit";
import ContextProvider from "./Context/store";
import AddMeetup from "./Pages/addMeetup";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/favorites/read" element={<ReadPost />} />
          <Route path="/read" element={<ReadPost />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/favorites/edit" element={<Edit />} />
          <Route path="/add" element={<AddMeetup />} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(
  <ContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ContextProvider>,
  document.getElementById("container")
);
