import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Header from '../header/Header'
import Section from '../section/Section'

function MainPage() {
    return (
      <div>
        <ScrollableAnchor id={"section1"}>
          <Header/>
        </ScrollableAnchor>
  
        <ScrollableAnchor id={"section2"}>
          <Section/>
        </ScrollableAnchor>
      </div>
    );
  }
  
  export default MainPage