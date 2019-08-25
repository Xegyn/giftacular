import React from "react";
import { connect } from "react-redux";
import { State } from "../redux/reducers";
import styles from "./Gallery.module.scss";
import Gif from "./Gif";

type GalleryProps = {
  gifs: any[];
  isFetching: boolean;
  error: boolean;
};

const Gallery: React.FC<GalleryProps> = ({ gifs, isFetching, error }: GalleryProps) => {
  return (
    <div className="container">
      <div className={styles.gallery}>
        {gifs.length === 0 && !isFetching && !error && (
          <p className="emptyState">Your search did not return any results. Try another search term.</p>
        )}
        {gifs.map((gif, index) => {
          return <Gif key={index} index={index} url={gif.images.preview_gif.url} alt={gif.title} />;
        })}
      </div>
      {error && (
        <p className="errorState">Something went wrong. Please check your network connection or try again later.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: State): GalleryProps => {
  return { gifs: state.gifs.items, isFetching: state.gifs.isFetching, error: state.gifs.error };
};

export default connect(
  mapStateToProps,
  null
)(Gallery);
