import React from 'react'; 
 
function Loading() { 
   return (
    <div className="dialog-background">
      <div className="dialog-loading-wrapper">
          <span className="dialog-loading-icon"><img src="assets/images/loader.gif" className='loader-img' alt="loader" />Loading....</span>
      </div>
    </div> 
  );
}

export default Loading;
