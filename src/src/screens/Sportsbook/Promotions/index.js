import React from "react";
import Carousel from 'react-bootstrap/Carousel'
const Promotions = (props) => {
  const { data } = props;
  const time = 5000;
  return (
    <div className="banner-link-div">  
      <div className="banner-space">
      <Carousel variant="dark">
          <Carousel.Item interval={time}>
            <img
              className="d-block w-100"
              src={require("../../../assests/images/main_new/Banner1.png")}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item interval={time}>
            <img
              className="d-block w-100"
              src={require("../../../assests/images/main_new/Banner2.png")}
              alt="Second slide"
            />

          </Carousel.Item>
          {/* <Carousel.Item interval={time}>
            <img
              className="d-block w-100"
              src={require("../../../assests/images/new_banner/newbanner3.png")}
              alt="Third slide"
            />

          </Carousel.Item>
          <Carousel.Item interval={time}>
            <img
              className="d-block w-100"
              src={require("../../../assests/images/new_banner/newbanner4.png")}
              alt="Third slide"
            />

          </Carousel.Item>
          <Carousel.Item interval={time}>
            <img
              className="d-block w-100"
              src={require("../../../assests/images/new_banner/newbanner5.png")}
              alt="Third slide"
            />

          </Carousel.Item> */}
        </Carousel>

      </div>
      {/* 
    <div className="banner-space">
      <div className="Sportsbook-middle-size">
        <a   className="banner-sport-link">
          <img 
           src={require("../../../assests/images/1.jpg")}
          />
        </a>
      </div>
    </div>

    <div className="banner-space">
      <div className="Sportsbook-middle-size">
        <a   className="banner-sport-link">
          <img 
           src={require("../../../assests/images/2.jpg")}
           />
        </a>
      </div>
    </div>
    <div className="banner-space">
      <div className="Sportsbook-middle-size">
        <a   className="banner-sport-link">
          <img src={require("../../../assests/images/3.jpg")} />
        </a>
      </div>
    </div>
    <div className="banner-space">
      <div className="Sportsbook-middle-size">
        <a   className="banner-sport-link">
          <img  src={require("../../../assests/images/4.jpg")}/>
        </a>
      </div>
    </div>
    <div className="banner-space">
      <div className="Sportsbook-middle-size">
        <a   className="banner-sport-link">
          <img src={require("../../../assests/images/5.jpg")} />
        </a>
      </div>
    </div>
   */}
    </div>


  );
};

export default Promotions;
