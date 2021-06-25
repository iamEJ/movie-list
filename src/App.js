import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import AddMovie from "./components/AddMovie";
import HomePage from "./components/Home";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/watchlist">
          <Watchlist />
        </Route>
        <Route exact path="/watched">
          <Watched />
        </Route>
        <Route exact path="/add">
          <AddMovie />
        </Route>
        <Route exact path="/movie/:id" children={<SingleMovie />} />
      </Switch>
    </Router>
  );
}

export default App;
