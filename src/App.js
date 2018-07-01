import React, { Component } from 'react';

// Single Page App Pages
import Navbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import MyThoughts from './components/My_Thoughts/My_Thoughts.js';
import FoodForThought from './components/Food_For_Thought/Food_For_Thought.js';
import AboutMe from './components/About_Me/About_Me.js';
import MySystem from './components/My_System/My_System.js';
import ContactMe from './components/Contact_Me.js';


// External Resources
import 'bootstrap/dist/css/bootstrap.min.css';
import './javascripts/smoothScroll.js';
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
        <div className="Main">
          <Navbar/>
          <div className="gabriel_Background">
            <Intro name="Gabriel Krizin"/>
            <MyThoughts sectionTitle="Current Thoughts"/>
          </div>
          <div className="blue_Background">
            <AboutMe sectionTitle="About me"/>
            <FoodForThought sectionTitle="Food for Thought"/>
            <MySystem sectionTitle="This is my system"/>
            <ContactMe sectionTitle="It is better to KNOW HOW TO LEARN than to know. -Dr suess." linkedin="https://www.linkedin.com/in/gabrielkrizin/" instagram="https://www.instagram.com/gkrizin/?hl=en" twitter="https://twitter.com/krizininc" phone="1 801-368-0084"/>
          </div>
        </div>
    );
  }
}

export default App;
