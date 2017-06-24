import React from 'react';

class Header extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
          paddingTop: 0,
          paddingBottom:0
       };     
   }
   componentDidMount(){
      let partialWindow = ((window.innerHeight/2) - ($('.homeBanner').height()/2));
          this.setState({
            paddingTop: partialWindow,
            paddingBottom:partialWindow
          })
   }
   render() {
      const HeaderStyle = {
            paddingTop:this.state.paddingTop,
            paddingBottom:this.state.paddingBottom
      }
      return (
         <div className="Header">
         	<div className="logoContainer col-xs-12">
         			<div className="pull-left">Logo</div>
                  <div className="pull-right">
                     <ul className="nav navbar-nav">
              			   <li className="nav-item active">                  
                           <a href="#" className="nav-link">Overview</a>
                        </li>
                        <li className="nav-item">                  
                           <a href="#" className="nav-link">Gallery</a>
                        </li>
                        <li className="nav-item">                  
                           <a href="#" className="nav-link">Contacts</a>
                        </li>
                        <li className="nav-item">                  
                           <a href="#" className="nav-link">Login</a>
                        </li>
                     </ul>
                  </div>
         	</div>
            <h1 className="homeBanner" style={HeaderStyle}>Thilakar's Photography</h1>
         </div>     
      );
   }
}

export default Header;