import React from 'react';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  'http://img.hani.co.kr/imgdb/resize/2019/0117/00503785_20190117.JPG',
  'https://ichef.bbci.co.uk/news/736/cpsprodpb/24EA/production/_104605490_f2d8b039-d3cb-408c-8005-17df55d97b15.jpg',
  'https://ichef.bbci.co.uk/news/660/cpsprodpb/10B76/production/_104607486_a9bd9308-38a2-4a51-92db-53c778646765.jpg'
];
 
const properties = {
  duration: 3000,
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