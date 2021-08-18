import HeaderContainer from "./components/header/headerContainer";
import React from 'react';
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import s from "./App.module.css"
import ContentContainer from "./components/content/contentContainer";




function App() {
    return (
        <div className={s.wr}>
            <div className={s.h}><HeaderContainer /></div>
            <div className={s.n}><NavBar /></div>
            <div className={s.c}><ContentContainer/></div>
            <div className={s.f}><Footer /></div>
        </div>
    );
}

export default App;
