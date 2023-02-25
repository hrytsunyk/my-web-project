import css from './Logo.module.css'
import {NavLink, useSearchParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Input, TextField} from "@mui/material";
import {SearchForm} from "../SearchForm/SearchForm";
import {useForm} from "react-hook-form";
// import {FormControl, Input} from "@mui/material";

const Logo = () => {


    return (
        <div className={css.Logo}>
            <h2>FLIXNET</h2>
            <SearchForm/>
        </div>

    );
};

export {Logo};