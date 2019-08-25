import debounce from "lodash-es/debounce";
import React from "react";
import { connect } from "react-redux";
import { State } from "./redux/reducers";
import FullScreenGif from "./components/FullScreenGif";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import { fetchGifs } from "./redux/actions";
import store from "./redux/store";

type AppProps = {
  isFetching: boolean;
  fullScreen: boolean;
  fullScreenGif: any;
};

const FETCH_MORE_THRESHOLD = 500;

class App extends React.Component {
  constructor(public props: AppProps) {
    super(props);

    this.dispatchFetchGifs = debounce(this.dispatchFetchGifs, 400, { leading: true, trailing: false });
  }

  componentDidMount() {
    store.dispatch(fetchGifs());

    window.addEventListener("scroll", this.fetchGifsIfNeeded.bind(this));
  }

  fetchGifsIfNeeded() {
    if (this.shouldFetchGifs()) {
      this.dispatchFetchGifs();
    }
  }

  dispatchFetchGifs() {
    store.dispatch(fetchGifs());
  }

  shouldFetchGifs() {
    return (
      window.innerHeight + document.documentElement.scrollTop + FETCH_MORE_THRESHOLD >=
      document.documentElement.scrollHeight
    );
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          {this.props.fullScreen ? <FullScreenGif gif={this.props.fullScreenGif} /> : <Gallery />}
          {this.props.isFetching && <Spinner />}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: State): AppProps => {
  let fullScreenGif: number | null = null;

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
