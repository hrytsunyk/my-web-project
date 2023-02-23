import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice";
import {useParams} from "react-router-dom";
import {imageURL} from "../../configs";
import css from './MovieInfo.module.css';
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadges} from "../GenreBadge/GenreBadges";


const MovieInfo = () => {

    const {movieInfo} = useSelector(state => state.movies);
    // let {title} =movieInfo;
    console.log(movieInfo)

    const dispatch = useDispatch();
    const {movieId} = useParams();


    useEffect(() => {
        dispatch(movieActions.getInfo({movieId}))
    }, [dispatch])

    const genres = [];
    const countries = [];
    const companies = [];

    for (const key in movieInfo) {
        if (key === 'genres') {
            for (const genre of movieInfo[key]) {
                genres.push(genre.name)
            }
        }
        if (key === 'production_countries') {
            for (const country of movieInfo[key]) {
                countries.push(country.iso_3166_1)
            }
        }
        if (key === 'production_companies') {
            for (const company of movieInfo[key]) {
                companies.push(company.name)
            }
        }

    }


    return (
        <div className={css.MovieInfoFather}>
            {movieInfo &&
                <div className={css.starsBottom}>

                    <div>
                        <div className={css.MovieInfo}>
                            <div className={css.PosterMovie}>
                                <img
                                className={css.Poster}
                                    src={`${imageURL}${movieInfo.poster_path}`}
                                     alt={movieInfo.title}
                                />
                                <div className={css.overviewFather}>
                                    <div className={css.overview}><h4>Overview:</h4><p>{movieInfo.overview}</p></div>
                                </div>
                            </div>


                            <div className={css.description}>

                                <h3 className={css.PosterTitle}>{movieInfo.title}</h3>
                                <div className={css.Budges}><h5>{genres}</h5></div>
                                <div><h4 className={css.budget}>Budget:</h4><p>{movieInfo.budget}$</p></div>
                                <div><h4 className={css.revenue}>Revenue:</h4><p>{movieInfo.revenue}$</p></div>
                                <div><h4 className={css.status}>Status:</h4><p>{movieInfo.status}</p></div>
                                <div><h4 className={css.runtime}>Runtime:</h4><p>{movieInfo.runtime}min</p></div>
                                <div><h4 className={css.tagline}>Tagline:</h4><p>{movieInfo.tagline}</p></div>
                                <div><h4 className={css.country}>Country:</h4><p>{countries.join(' | ')}</p></div>
                                <div><h4 className={css.companies}>Companies:</h4><p>{companies.join(' | ')}</p></div>

                                <div className={css.RatingFather}>
                                    <h4>Rating</h4><StarsRating
                                    value={movieInfo.vote_average}/>
                                </div>

                        <hr/>
                            </div>
                    </div>
                        {/*<div className={css.overviewFather}>*/}
                        {/*    <div className={css.overview}><h4>Overview:</h4><p>{movieInfo.overview}</p></div>*/}
                        {/*</div>*/}


                    </div>

                </div>


            }
        </div>
    );
};


export {MovieInfo};