import css from './MoviesListCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const MoviesListCard = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;


    // const {name} = value;
    // console.log(name);
    // console.log(searchedId);
    console.log(id)


    const movieId = id.toString();


    return (
        <NavLink to={`/movie/${movieId}`}>


            {movie &&  <div className={css.MoviesListCard}>

                        <PosterPreview poster={poster_path} title={title} id={id}/>
                        <StarsRating value={vote_average}/>

                </div>}

                </NavLink>
                );
            };

            export {MoviesListCard};