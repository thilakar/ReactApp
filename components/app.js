import React from 'react';
import Header from '../containers/header'
import Container from '../containers/container'

class App extends React.Component {
   render() {
      return (
         <div className="">
            <Header />   
            <Container />           
         </div>        
      );
   }
}

export default App;