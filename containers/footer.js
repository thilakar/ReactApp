import React from 'react';

class footer extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="footer col-xs-12">
                <span className="pull-left">thilakar potography</span>
                <span className="pull-right">Copyrights reserved</span>               
            </div>
        );
    }
}
export default footer;