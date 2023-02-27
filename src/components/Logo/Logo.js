import {SearchForm} from "../SearchForm/SearchForm";

import css from './Logo.module.css'

const Logo = () => {


    return (
        <div className={css.Logo}>
            <h2>FLIXNET</h2>
            <SearchForm/>
        </div>

    );
};

export {Logo};