import {NavLink, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Input, TextField} from "@mui/material";
import css from './Search.module.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {searchActions} from "../../redux/slices/searchSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {

    const {register, reset, handleSubmit, formState: {isValid, errors}} = useForm();
    //
    const dispatch = useDispatch();
    //
    const [query, setQuery] = useSearchParams();

    const searchParam = query.get('search');


    useEffect(() => {
        dispatch(searchActions.getSearch({searchParam}))
    }, [dispatch, query])





    return (
            <form className={css.search}
                  onSubmit={handleSubmit((searchParam) => setQuery(searchParam))}>

                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    placeholder='Search'
                    {...register('search')}

                />
                {/*<button>search</button>*/}
                <button className={css.inputButton}><FontAwesomeIcon icon={faSearch}/></button>
            </form>
    );
};

export {SearchForm};