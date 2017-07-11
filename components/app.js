import React from 'react';
import Header from '../containers/header'
import Container from '../containers/container'
import About from '../containers/about'

class App extends React.Component {
   render() {
      return (
         <div className="">
            <Header />   
            <About />   
            <Container />           
         </div>        
      );
   }
}

export default App;