import css from './Header.module.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUser, faSignOut, faFilm} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


const Header = () => {


    return (

        <div className={css.HeaderFather}>

            <div className={css.Header}>
                <div className={css.Icons}>

                    <div className={css.top_icons}>
                        <NavLink to={'/home'}><FontAwesomeIcon icon={faHome}/></NavLink>
                        <NavLink to={'/movies'}><FontAwesomeIcon icon={faFilm}/></NavLink>
                        <NavLink to={'/user'}><FontAwesomeIcon icon={faUser}/></NavLink>
                    </div>

                    <NavLink to={'/home'}><FontAwesomeIcon icon={faSignOut}/></NavLink>

                </div>
            </div>
        </div>

    );
};

export {Header};