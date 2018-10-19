import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";
import store from "./reducks/store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="routes">{routes}</div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
