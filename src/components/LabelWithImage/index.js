import React from "react";
// import "./labelWithImage.css";
import { useSelector, useDispatch } from "react-redux";
const LabelWithImage = (props) => {
  const { data } = props;
  const selectedGame = useSelector((state) => state).sidebar.game;
  return (
    <a
      className={
        selectedGame == data.name
          ? "side-Sportsbook-link-selected"
          : "side-Sportsbook-link"
      }
    >
      <div className="link-div-Sportbook" onClick={props.onClick}>
        {/* {data?.count ? 
            <div className="Sport-count-div">
              <span className="Sport-count-circle">{data.count}</span>
            </div>
            :
            <img src={data.img} />
          } */}
          <div >
              <img src={data?.img}  style={{height: '18px'}}/>
            </div>
        
        <div className="Sport-count-name">
          <span> {data.name == "Live" ? "Live Now" : data.name}</span>
        </div>
      </div>
    </a>
  );
};

export default LabelWithImage;
