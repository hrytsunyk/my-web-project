import {Outlet} from "react-router-dom";
import {Header, Logo} from "../components";
import css from './BaseLayout.module.css'
import DayNightToggle from "react-day-and-night-toggle";
import {GenreBadges} from "../components/GenreBadge/GenreBadges";
import {useEffect, useState} from "react";


const BaseLayout = () => {

    const [theme, setTheme] = useState('dark');

    const switchTheme = () => {
        setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className={css.BaseLayout} id={theme}>
            <GenreBadges/>
            <Header/>
            <div className={css.switch}>
                <DayNightToggle
                    className={css.toggle}
                    onChange={switchTheme}
                    checked={theme === 'dark'}
                    size={20}
                />
            </div>
            <Outlet/>
            <Logo/>
        </div>
    );
};

export {
    BaseLayout
};