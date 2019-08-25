import React from "react";
import store from "../redux/store";
import styles from "./Navbar.module.scss";
import { setNewSearch, fetchGifs, closeFullScreen } from "../redux/actions";

type State = {
  searchString: string;
};

const TRIGGER_SEARCH_KEYS = ["Enter", "Return"];

class Navbar extends React.Component {
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.searchGifs = this.searchGifs.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchString: event.target.value
    });
  }

  handleKeyPress(event: React.KeyboardEvent) {
    if (TRIGGER_SEARCH_KEYS.includes(event.key)) {
      this.searchGifs();
    }
  }

  searchGifs() {
    store.dispatch(closeFullScreen());
    store.dispatch(setNewSearch(this.state.searchString));
    store.dispatch(fetchGifs());
  }

  render() {
    return (
      <div className={styles.navbar}>
        <div className="container">
          <div className="logo">
            <h4 className="m-0">Giftacular</h4>
          </div>
          <input
            type="text"
            className="search-text control b-0"
            placeholder="Search for..."
            value={this.state.searchString}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <button
            type="button"
            className="search-button btn b-0"
            onClick={this.searchGifs}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
