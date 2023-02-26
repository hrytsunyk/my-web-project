import {NavLink, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FormControl, Input, TextField} from "@mui/material";
import css from './Search.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {searchActions} from "../../redux/slices/searchSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faSearch} from "@fortawesome/free-solid-svg-icons";
import {PagePagination} from "../PagePagination/PagePagination";

const SearchForm = () => {

    const {register, reset, handleSubmit, formState: {isValid, errors}} = useForm();
    const {page} = useSelector(state=> state.search);


    const dispatch1 = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useSearchParams({page:'1'});


    const searchParams = query.get('name');
    console.log(searchParams);


    useEffect(() => {
        dispatch1(searchActions.getSearch({page: searchParams}))
    }, [dispatch1,query])

    //
    const searchMovie =(searchParams)=> {
        const {name} = searchParams;

       setQuery(name)
        navigate(`search/movie?name=${name}`)
        reset()
    }

    return (

        <div>
            <form className={css.search}
                  onSubmit={handleSubmit(searchMovie)}>

                <TextField
                    id="outlined-basic"
                    variant="standard"
                    fullWidth
                    label="Search"
                    placeholder='Search'
                    {...register('name')}

                />
                {/*<button>search</button>*/}
                {/*<button className={css.inputButton}><FontAwesomeIcon icon={faSearch}/></button>*/}
            </form>


            <div className={css.Buttons}>
                <button
                    onClick={() => setQuery(query => ({
                        page: +query.get('page') - 1}))}
                    disabled={page<=1}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        disabled={page}
                    />
                </button>


                <button onClick={() => setQuery(query => ({
                    page: +query.get('page') + 1}))}
                        disabled={page>=500}
                >
                    <FontAwesomeIcon
                        icon={faArrowRight}


                    />
                </button>
            </div>
        </div>


    );

};


export {SearchForm};