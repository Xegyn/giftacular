import React from "react";
import { connect } from "react-redux";
import styles from "./Gallery.module.scss";
import Gif from "./Gif";

const Gallery: React.FC = ({ gifs }: any) => {
  return (
    <div className="container">
      <div className={styles.gallery}>
        {gifs.map((gif, index) => {
          return (
            <Gif
              key={index}
              index={index}
              url={gif.images.preview_gif.url}
              alt={gif.title}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { gifs: state.gifs.items };
};

export default connect(
  mapStateToProps,
  null
)(Gallery);
