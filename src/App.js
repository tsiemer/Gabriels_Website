import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import MyThoughts from './components/My_Thoughts/My_Thoughts.js';
import AboutMe from './components/About_Me/About_Me.js';
import MySystem from './components/My_System/My_System.js';
import ContactMe from './components/Contact_Me.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        {/* <Navbar /> */}
        <div className="gabriel_Background">
          <Intro name="Gabriel Krizin"/>
          <MyThoughts sectionTitle="Get into my brain"/>
        </div>
        <div className="blue_Background">
          <AboutMe sectionTitle="Here's what I've done so far"/>
          <MySystem sectionTitle="This is my system"/>
          <ContactMe sectionTitle="Something witty!! :)" linkedin="https://www.linkedin.com/in/gabrielkrizin/" facebook="https://www.facebook.com/GabrielKrizin?ref=br_rs"/>
        </div>
      </div>
    );
  }
}

export default App;
