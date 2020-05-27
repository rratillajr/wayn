import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom";
import Missing from './Pages/404/404.Page';
import LandingPage from './Pages/Landing/LandingPage';
import Wayn from './Pages/WAYN/WAYNPage';
import Haim from './Pages/HIAM/HAIMPage';
import { Footer } from './Components/Footer/Footer.Component';
import { TestimonialCard } from './Components/TestimonialCard/TestimonialCard.Component';
import { Testimonials } from './Components/Testimonials/Testimonials.Component';
import { Nav } from './Components/NavBar/NavBar.Component';
import { LandingContent } from './Components/LandingContent/LandingContent.Component';

function App() {
  return (
    <div>
      <header>
        <Nav/>
      </header>
      <Switch>
        <Route exact path="/" component={LandingContent} />
        <Route exact path="/wayn" component={Wayn} />
        <Route exact path="/wayn/:locID" component={Haim} />
        <Route exact path="*" component={Missing} />
      </Switch>
      {/**
      <Testimonials>
          <TestimonialCard
            imgSrc="/img/female-circle.png"
            imgAlt="bulakenya"
            h3Msg="Fun to Use"
            pMsg="Buking si BFF! Ang saya saya!"
            from="-Elaine, Bulacan"
          />
          <TestimonialCard
            imgSrc="/img/ana-crop.png"
            imgAlt="ana"
            h3Msg="App is Cool"
            pMsg="Oki to, hanap ko pwends sa China"
            from="-Ana, Binondo"
          />
          <TestimonialCard
            imgSrc="/img/juan.png"
            imgAlt=""
            h3Msg="Easy to use."
            pMsg="Wala Takas dito Xi Jing Pin"
            from="-Juan Dela Cruz, Tondo"
          />
        </Testimonials>

         */}


        <Footer/>


    </div>

  );
}

export default App;
