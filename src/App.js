import React from "react";
import Pinterest from "./Pinterest/Pinterest";
import Saved from "./Page/Saved";
import Explore from "./Page/Explore";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import store from "./Store/store";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Pinterest />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router basename="/Pinterest"> 
        <AnimatedRoutes />
      </Router>
    </Provider>
  );
}

export default App;
