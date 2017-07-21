import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './carousel.css';


class Carousel extends Component {

  static propTypes = {
    images: PropTypes.array.isRequired,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  static defaultProps = {
    height: 480,
    width: 640,
  }

  constructor(props) {
    super(props);

    this.state = {
      height: this.props.height,
      width: this.props.width,
      left: 0,
      activeIndex: 0,
    };

    // this.handlePointerClick = this.handlePointerClick.bind(this);
    this.onNodeTouchStart = this.onNodeTouchStart.bind(this);
    this.onNodeTouchMove = this.onNodeTouchMove.bind(this);
    this.onNodeTouchEnd = this.onNodeTouchEnd.bind(this);
  }

  componentWillMount() {
    this.touchStartX = null;
    this.touchStartY = null;
    this.touchStartTime = null;
  }

  onNodeTouchStart(e) {
    this.touchStartX = e.touches[0].pageX;
    this.touchStartY = e.touches[0].pageY;
    this.touchStartTime = Date.now();
  }

  onNodeTouchMove(e) {
    if (this.state.activeIndex === this.props.images.length - 1 ||
      this.state.activeIndex === 0
    ) {
      return;
    }

    const currentX = e.touches[0].pageX;
    const currentY = e.touches[0].pageY;
    const dX = currentX - this.touchStartX;
    const dY = currentY - this.touchStartY;

    if (Math.abs(dX) < 10 ||
      (Math.abs(dX) < Math.abs(dY))
    ) {
      return;
    }

    this.setState({
      left: dX,
    });
  }

  onNodeTouchEnd(e) {
    const currentX = e.changedTouches[0].pageX;
    const currentY = e.changedTouches[0].pageY;
    const currentTime = Date.now();
    const dX = currentX - this.touchStartX;
    const dY = currentY - this.touchStartY;
    const dT = currentTime - this.touchStartTime;

    const width = this.state.width;

    if (Math.abs(dX) < 10 ||
      (Math.abs(dX) < Math.abs(dY))
    ) {
      return;
    }

    if (Math.abs(dX) > width / 2 || dT < 800) {
      if (dX > 0 &&
        this.state.activeIndex > 0
        ) {
        this.setState({
          activeIndex: this.state.activeIndex - 1,
          left: 0,
        });
        return;
      }

      if (dX < 0 &&
        this.state.activeIndex < this.props.images.length - 1
        ) {
        this.setState({
          activeIndex: this.state.activeIndex + 1,
          left: 0,
        });
        return;
      }
    }

    this.setState({
      left: 0,
    });
  }

  getPointer() {
    const pointers = [];
    const activeIndex = this.state.activeIndex;
    const number = this.props.images.length;
    for (let i = 0; i < number; i += 1) {
      pointers.push(
        <span
          className={
            i === activeIndex ? 'carousel-pointer carousel-pointer-active' : 'carousel-pointer'
          }
          key={`pointer-${i}`}
        />,
      );
    }

    return (
      <div className="carousel-pointer-container">
        <div className="carousel-pointers">
          { pointers }
        </div>
      </div>
    );
  }

  render() {
    const { images } = this.props;
    const { height, width, activeIndex, left } = this.state;

    return (
      <div
        className="carousel-root"
        style={{ height, width }}
        onTouchStart={this.onNodeTouchStart}
        onTouchMove={this.onNodeTouchMove}
        onTouchEnd={this.onNodeTouchEnd}
      >
        {
          images.map((image, index) => (
            <img
              className="carousel-image"
              style={{
                transform: `translateX(${((index - activeIndex) * width) + left}px)`,
              }}
              src={image && image.src ? image.src : image}
              alt={image && image.alt ? image.alt : ''}
              key={`image-${index}`}
            />
          ))
        }
        {this.getPointer()}
      </div>
    );
  }
}

Carousel.propTypes = {

};

export default Carousel;
