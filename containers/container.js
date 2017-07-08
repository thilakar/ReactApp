import React from 'react';

class container extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
          paddingTop: 0,
          paddingBottom:0
       };     
   }
   render() {
      return (
         <div className="mainContainer col-xs-12">
           <h2>Temple Photos</h2>
          <div className="col-xs-3">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/IMG_0575.jpg" width="100%"/>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/IMG_0651.jpg" width="100%"/>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/IMG_0592.jpg" width="100%"/>
            </div>
          </div>          
          <div className="col-xs-3">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/IMG_0580.jpg" width="100%"/>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/IMG_0633.jpg" width="100%"/>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/IMG_0657.jpg" width="100%"/>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/IMG_0659.jpg" width="100%"/>
            </div>
          </div>          
          <div className="col-xs-3">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/IMG_0658.jpg" width="100%"/>
            </div>
          </div>
         </div>     
      );
   }
}

export default container;