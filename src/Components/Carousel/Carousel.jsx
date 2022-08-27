import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imgg from 'Assets/Images/tst2.png'
import img2 from 'Assets/Images/tst.png'
import img3 from 'Assets/Images/maserati3.png'
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel width="100vw" height="100px" autoPlay={true} showArrows={false}>
                <div>
                    <img src={imgg} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legends">Legend 2</p>
                </div>
                <div>
                    <img src={img3}/>
                    <p className="legend3">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel