import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import HomePage from "./components/pages/home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import UsersList from "./components/pages/users/UsersList";
import UserPage from "./components/pages/userPage/UserPage";

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
          <Route path="/users">
            <UsersList />
          </Route>
          <Route path="/user/:userId">
            <UserPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
