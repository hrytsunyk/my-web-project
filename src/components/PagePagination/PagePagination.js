import css from "../MoviesList/MoviesList.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice";
import {searchActions} from "../../redux/slices/searchSlice";
import {SearchForm} from "../SearchForm/SearchForm";

const PagePagination = () => {

    const dispatch = useDispatch();

    const {page} = useSelector(state => state.movies);


    // console.log(page)
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getMovies({page: query.get('page')}))

    }, [dispatch, query])


    // useEffect(() => {
    //     dispatch(searchActions.getSearch({page: query.get('page')}))
    //
    // }, [dispatch, query])


    return (

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
    );
};

export {PagePagination};