import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route path="/contact-me">
          <ContactMe />
        </Route>
        <Route path="/projects/type-two">
          <TypeTwo />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
