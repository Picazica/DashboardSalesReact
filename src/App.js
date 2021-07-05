import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import HomePage from "./components/pages/home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import UsersList from "./components/pages/users/UsersList";
import UserPage from "./components/pages/userPage/UserPage";
import CreateUserPage from "./components/pages/createUserPage/CreateUserPage";
import ProductList from "./components/pages/productList/ProductList";

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
          <Route path="/newUser">
            <CreateUserPage />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <CreateUserPage />
          </Route>
          <Route path="/newproduct">
            <CreateUserPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
