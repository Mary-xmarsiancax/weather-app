import HeaderContainer from "./components/header/headerContainer";
import React from 'react';
import Footer from "./components/footer/footer";
import s from "./App.module.css"
import NavBarContainer from "./components/navBar/navBarContainer";
import ContentContainer from "./components/content/contentContainer";
import {getDailyWeather} from "./services/weather-service";



function App() {
    console.log(getDailyWeather("Moscow", 4));
    return (
    <div className={s.wr}>
        <div className={s.h}><HeaderContainer/></div>
        <div className={s.n}><NavBarContainer/></div>
        <div className={s.c}><ContentContainer/></div>
        <div className={s.f}><Footer/>
        </div>
    </div>
)
    ;
}

export default App;
