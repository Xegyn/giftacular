import React from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import store from "./redux/store";
import { fetchGifs } from "./redux/actions";

type Props = {
  isFetching: boolean;
};

const FETCH_MORE_THRESHOLD = 500;

class App extends React.Component {
  props: any;

  componentDidMount() {
    store.dispatch(fetchGifs());

    window.addEventListener("scroll", this.fetchGifsIfNeeded.bind(this));
  }

  fetchGifsIfNeeded() {
    if (this.shouldFetchGifs()) {
      store.dispatch(fetchGifs());
    }
  }

  shouldFetchGifs() {
    if (this.props.isFetching) {
      return false;
    }

    return (
      window.innerHeight +
        document.documentElement.scrollTop +
        FETCH_MORE_THRESHOLD >=
      document.documentElement.scrollHeight
    );
  }

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

const mapStateToProps = state => {
  return { isFetching: state.gifs.isFetching };
};

export default connect(
  mapStateToProps,
  null
)(App);
