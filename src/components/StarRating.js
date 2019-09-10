import React, { Component } from "react";
import PropTypes from "prop-types";

const paths = {
  STAR:
    "M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538zM512 753.498l-223.462 117.48 42.676-248.83-180.786-176.222 249.84-36.304 111.732-226.396 111.736 226.396 249.836 36.304-180.788 176.222 42.678 248.83-223.462-117.48z",
  STAR_FILLED:
    "M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"
};

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  mouseEnter = v => {
    if (this.props.readOnly) return;
    this.setState({ value: v });
  };

  mouseLeave = () => {
    if (this.props.readOnly) return;
    this.setState({ value: this.props.value });
  };

  onClick = value => {
    if (this.props.readOnly) return;
    if (this.props.handleSelection) return this.props.handleSelection(value);
  };

  render() {
    const { totalStars, starSize } = this.props;

    const styles = {
      svg: {
        display: "inline-block",
        verticalAlign: "middle",
        margin: (starSize || 32) / 8,
        cursor: this.props.readOnly ? "default" : "pointer"
      },
      path: {
        fill: this.props.color || "currentColor"
      }
    };

    const stars = Array.from(new Array(totalStars), (x, index) => index + 1);

    return (
      <div onMouseLeave={this.mouseLeave}>
        {stars.map((value, key) => (
          <svg
            onMouseEnter={() => this.mouseEnter(value)}
            onClick={() => this.onClick(value)}
            key={key}
            style={styles.svg}
            width={`${starSize || 32}px`}
            height={`${starSize || 32}px`}
            viewBox={`0 0 1024 1024`}
            tooltip={value}
          >
            <path
              style={styles.path}
              d={value <= this.state.value ? paths.STAR_FILLED : paths.STAR}
            />
          </svg>
        ))}
      </div>
    );
  }
}

StarRating.propTypes = {
  totalStars: PropTypes.number,
  starSize: PropTypes.number,
  handleSelection: PropTypes.func,
  readOnly: PropTypes.bool,
  value: PropTypes.number.isRequired
};

StarRating.defaultProps = {
  totalStars: 5,
  starSize: 32,
  readOnly: false,
  value: 0
};
export default StarRating;
