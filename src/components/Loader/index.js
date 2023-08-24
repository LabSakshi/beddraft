import { TailSpin, ThreeDots } from "react-loader-spinner";

import "./loader.css";

const Loader = (props) => {
    const {spinner ,visible,modalLogin  } = props;
  return (
    <div className={spinner && modalLogin ? "modalLoader" : spinner ? "loader" : "dotLoader" }  >
      {spinner ? (
        <TailSpin color="#00BFFF" height={50} width={50} visible={visible} />
      ) : (
        <ThreeDots color="#00BFFF" height={50} width={50} visible={visible} />
      )}
    </div>
  );
};

export default Loader;

// import React from 'react';
// import {Loader} from 'react-loader-spinner';
// import {TailSpin} from "react-loader-spinner";
//  const LoaderSmall = () => {
//     return(style={{ position:'fixed',left:'50%',top:'50%',zIndex:'9999'  }}
//   <div className="loader">
//     <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50} />
//   </div>
//     )
//     };

// export default LoaderSmall
