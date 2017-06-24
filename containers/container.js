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
          <div className="col-xs-3">
            <div className="photoPlaceHolder"></div>
          </div>
          <div className="col-xs-3">
            <div className="photoPlaceHolder"></div>
          </div>
          <div className="col-xs-3">
            <div className="photoPlaceHolder"></div>
          </div>          
          <div className="col-xs-3">
            <div className="photoPlaceHolder"></div>
          </div>
          <div className="col-xs-3">
            <div className="photoPlaceHolder"></div>
          </div>
          <div className="col-xs-3">
            <div className="photoPlaceHolder"></div>
          </div>
          <div className="col-xs-3">
            <div className="photoPlaceHolder"></div>
          </div>          
          <div className="col-xs-3">
            <div className="photoPlaceHolder"></div>
          </div>
         </div>     
      );
   }
}

export default container;