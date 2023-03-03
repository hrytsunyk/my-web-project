import {useDispatch} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {searchActions} from "../../redux";

import {TextField} from "@mui/material";
import css from './Search.module.css';


const SearchForm = () => {

    const {register, reset, handleSubmit} = useForm();


    const dispatch1 = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useSearchParams({page: '1'});

    const searchParams = query.get('name');

    useEffect(() => {
        dispatch1(searchActions.getSearch({searchParams}))
    }, [dispatch1, query, searchParams])


    const searchMovie = (inputData) => {
        const {name} = inputData;

        if (name !== '') {
            setQuery(name)
            navigate(`search/movie?name=${name}`)
            reset()
        }
    }


    return (


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
        </form>

    );

};


export {SearchForm};