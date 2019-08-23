import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import store from "./redux/store";
import { fetchTrending } from "./redux/actions";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(fetchTrending());
  }

  getTrending() {}

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Gallery />
        </main>
      </div>
    );
  }
}

export default App;
