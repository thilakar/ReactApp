import React from 'react';

class container extends React.Component {

   constructor(props) {
        super(props);
   }
   render() {
      return (
         <div className="mainContainer">
          {/*<h2 className="title text-center">Temple Poto's</h2>*/}
          <div className="col-xs-3 noPadding">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/img1.jpg" width="100%"/>
            </div>
          </div>
          <div className="col-xs-3 noPadding">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/img2.jpg" width="100%"/>
            </div>
          </div>
          <div className="col-xs-3 noPadding">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/img3.jpg" width="100%"/>
            </div>
          </div>          
          <div className="col-xs-3 noPadding">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/img4.jpg" width="100%"/>
            </div>
          </div>
          <div className="col-xs-3 noPadding">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/img5.jpg" width="100%"/>
            </div>
          </div>
          <div className="col-xs-3 noPadding">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/img6.jpg" width="100%"/>
            </div>
          </div>
          <div className="col-xs-3 noPadding">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/statue.jpg" width="100%"/>
            </div>
          </div>  
          <div className="col-xs-3 noPadding">
            <div className="photoPlaceHolder">
              <img alt="" src="./asserts/images/img5.jpg" width="100%"/>
            </div>
          </div>    
         </div>     
      );
   }
}

export default container;