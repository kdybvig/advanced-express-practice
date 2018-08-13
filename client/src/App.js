import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import CommentContainer from "./containers/CommentContainer";
import ContactContainer from "./containers/ContactContainer";
import ProductContainer from "./containers/ProductContainer";
import VehicleContainer from "./containers/VehicleContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadComments();
    this.props.loadContacts();
    this.props.loadVehicles();
    this.props.loadProducts();
  }
  render() {
    return (
      <BrowserRouter>
        <div>       
          <Switch>
            <Route path="/comments/:id" component={CommentContainer} />
            <Route path="/contacts/:id" component={ContactContainer} />
            <Route path="/products/:id" component={ProductContainer} />
            <Route path="/vehicles/:id" component={VehicleContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}
export default (App);


