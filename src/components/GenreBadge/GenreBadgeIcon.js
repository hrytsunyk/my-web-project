import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {similarActions} from "../../redux/slices/similarSlice";
import css from './GenreBadgeIcon.module.css'

const GenreBadgeIcon = ({genre}) => {


    const {name, id} = genre;
    const movieId = id.toString();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(similarActions.getSimilar({}))
    },[dispatch])


    return (
            <div>
                <Link to={`/genre/movie?with_genres=${movieId}`}  className={css.BadgeIcon}>
                    <h6>{name}</h6>
                </Link>
            </div>
    );
};

export {GenreBadgeIcon};