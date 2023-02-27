import {useState} from "react";
import {Outlet} from "react-router-dom";

import {GenreBadges, Header, Logo} from "../components";

import DayNightToggle from "react-day-and-night-toggle";
import css from './BaseLayout.module.css'


const BaseLayout = () => {

    const [theme, setTheme] = useState('dark');

    const switchTheme = () => {
        setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className={css.BaseLayout} id={theme}>

            <GenreBadges/>
            <Logo/>
            <div className={css.switch}>
                <DayNightToggle
                    className={css.toggle}
                    onChange={switchTheme}
                    checked={theme === 'dark'}
                    size={20}
                />
            </div>
            <Header/>
            <Outlet/>

        </div>
    );
};

export {
    BaseLayout
};