import css from './Logo.module.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Input} from "@mui/material";
// import {FormControl, Input} from "@mui/material";

const Logo = () => {

    return (
        <div className={css.Logo}>
            <h2>FLIXNET</h2>

            <form>
                <Input placeholder={'search'}/>
            <NavLink to={'/search'}><FontAwesomeIcon icon={faSearch}/></NavLink>
            </form>


        </div>

    );
};

export {Logo};