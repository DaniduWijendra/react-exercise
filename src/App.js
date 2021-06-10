import React, { Component } from "react";
import Navbar from "./components/NavigationBar";
//import Counters from "./components/Counters";
import Movies from "./components/Movies";
import { Redirect, Route, Switch } from "react-router";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";


export class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    const counter = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counter });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //clone the object by ...
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; //clone the object by ...
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  constructor() {
    super();
    console.log("app-const");
  }
  componentDidMount() {
    console.log("app-mounted");
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <main className="container">
          {/* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
          */}
          <Switch>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
