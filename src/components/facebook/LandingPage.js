import React from 'react';
import Composer from './Composer';
import Posts from './Posts';
const LandingPage = () => {
    
  
  
  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
        
          <Composer/>
          <Posts/>
        
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default LandingPage;