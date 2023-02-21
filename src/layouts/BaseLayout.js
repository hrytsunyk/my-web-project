import {Outlet} from "react-router-dom";
import {Header, Logo} from "../components";
import css from './BaseLayout.module.css'
import {ThemeProvider} from 'styled-components'
import {createContext, useContext, useState} from "react";
import DayNightToggle from "react-day-and-night-toggle";

// const ThemeContext = createContext(null);

const BaseLayout = () => {

    const[theme, setTheme] = useState('dark');
    
    const switchTheme = () => {
      setTheme(prevState => prevState==='dark'?'light':'dark')
    }


    return (
        // <ThemeContext.Provider value={{theme, switchTheme}}>
        <div className={css.BaseLayout} id={theme}>
            <Header/>
            <div className={css.switch} >
                <DayNightToggle className={css.toggle} onChange={switchTheme} checked={theme === 'dark'} size={20}/>
            </div>
            <Outlet/>
            <Logo/>
        </div>
        // </ThemeContext.Provider>
    );
};

export {
    BaseLayout
};