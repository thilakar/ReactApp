import React from 'react';
import { connect } from 'react-redux';
import {imageNameAction} from '../actions/imageAction';

class container extends React.Component {

  constructor(props) {
    super(props);
  }
  renderImage() {
    //console.log(this.props.imageNameAction)
    return this.props.imageNameAction.map((imageNameAction) => {
      let srcUrl = "./asserts/images/"+imageNameAction.image;
      return (
        <div className="col-xs-3 noPadding">
          <div className="photoPlaceHolder">
            <img alt="" src={srcUrl} width="100%" />
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="mainContainer">
        {this.renderImage()}
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    imageNameAction: state.Image
  };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         setName: (name) => {
//             dispatch(setName(name));
//         }
//     };
// };

export default connect(mapStateToProps)(container);