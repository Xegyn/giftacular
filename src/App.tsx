import React from "react";
import { connect } from "react-redux";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import { fetchGifs } from "./redux/actions";
import store from "./redux/store";
import FullScreenGif from "./components/FullScreenGif";

type Props = {
  isFetching: boolean;
  fullScreen: boolean;
  fullScreenGif: any;
};

const FETCH_MORE_THRESHOLD = 500;

class App extends React.Component {
  constructor(public props: Props) {
    super(props);
  }

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
          {this.props.fullScreen ? (
            <FullScreenGif gif={this.props.fullScreenGif} />
          ) : (
            <Gallery />
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let fullScreenGif = null;

  if (state.view.index != null) {
    fullScreenGif = state.gifs.items[state.view.index];
  }

  return {
    isFetching: state.gifs.isFetching,
    fullScreen: state.view.fullScreen,
    fullScreenGif
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
