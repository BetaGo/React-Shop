import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import './carousel.css';


function getOuterWidth(el) {
  return el.offsetWidth;
}

class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: "100%",
      left: 0,
      activeIndex: 0
    }

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


  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);

    this.setState({
      height: getOuterWidth(node) * 0.75,
    })
  }

  onNodeTouchStart(e) {
    this.touchStartX = e.touches[0].pageX;
    this.touchStartY = e.touches[0].pageY;
    this.touchStartTime = Date.now();
  }

  onNodeTouchMove(e) {

    if ( this.state.activeIndex === this.props.images.length - 1 ||
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
      return
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

    const width = this.state.height / 0.75;

    if (Math.abs(dX) < 10 ||
      (Math.abs(dX) < Math.abs(dY))
    ) {
      return;
    }

    if ( Math.abs(dX) > width / 2 || dT < 800) {
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


  getPointer(number, activeIndex) {
    let pointers = [];
    for(let i = 0; i < number; i++) {
      pointers.push(<span
        className={
          i === activeIndex ? "carousel-pointer carousel-pointer-active" : "carousel-pointer"
        }
        key={`pointer-${i}`}
        >
        </span>)
    }
    return (
      <div className="carousel-pointer-container">
        <div className="carousel-pointers">
          { pointers }
        </div>
      </div>
    )
  }


  render() {

    const { images } = this.props;
    const { height, activeIndex, left } = this.state;
    const width = height / 0.75;

    return (
      <div
        className="carousel-root"
        style={{height: height}}
        onTouchStart={this.onNodeTouchStart}
        onTouchMove={this.onNodeTouchMove}
        onTouchEnd={this.onNodeTouchEnd}
      >
        {
          images.map((image, index, images) => {
            return <img
              className="carousel-image"
              style={{
                transform: `translateX(${ (index - activeIndex) * width + left }px)`
              }}
              src={image&&image.src ? image.src : image}
              alt={ image && image.alt ? image.alt : '' }
              key={`image-${index}`}
            />
          })
        }
        {this.getPointer(images.length, activeIndex)}
      </div>
    );
  }
}

Carousel.propTypes = {

};

export default Carousel;