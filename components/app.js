import React from 'react';
import Header from '../containers/header'
import Container from '../containers/container'
import About from '../containers/about'
import Footer from '../containers/footer'

class App extends React.Component {
   render() {
      return (
         <div className="">
            <Header />   
            {/*<About />   */}
            <Container />  
            <Footer />         
         </div>        
      );
   }
}

export default App;