import React from 'react';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  'http://placeimg.com/1280/640/1',
  'http://placeimg.com/1280/640/2',
  'http://placeimg.com/1280/640/3'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
      </Slide>
    )
}

class CustomerCarousel extends React.Component{
    render(){
        return(
            <Slideshow/>
        );
    }
}

export default CustomerCarousel;