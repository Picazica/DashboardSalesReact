import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import HomePage from "./components/pages/home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import UsersList from "./components/pages/users/UsersList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/users">
            <UsersList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
