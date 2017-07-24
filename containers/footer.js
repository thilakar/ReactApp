import React from 'react';

class footer extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="footer col-xs-12">
                <div className="col-xs-6 noPadding">
                    <h2 className="col-xs-12 title">Contact us</h2>
                    <ul>
                        <li> 
                            <label className="col-xs-6">First Name: </label>
                            <label className="col-xs-6"><input type="text" /></label>
                        </li>
                        <li> 
                            <label className="col-xs-6">Last Name: </label>
                            <label className="col-xs-6"><input type="text" /></label>
                        </li>
                        <li> 
                            <label className="col-xs-6">Email Name: </label>
                            <label className="col-xs-6"><input type="text" /></label>
                        </li>
                        <li> 
                            <label className="col-xs-6">Comments: </label>
                            <label className="col-xs-6"><textarea></textarea></label>
                        </li>
                        <li>
                            <label className="col-xs-6"></label>
                            <label className="col-xs-6"><button type="button" className="btn btn-primary">Submit</button></label>                                                       
                        </li>
                    </ul>
                   
                </div>
                <div className="col-xs-6">                   
                    thilakar potography
                    Copyrights reserved
                </div>
                {/*<span className="pull-left"></span>
                <span className="pull-right"></span>               */}
            </div>
        );
    }
}
export default footer;