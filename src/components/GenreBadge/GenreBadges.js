import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genreAction} from "../../redux/slices/genreSlice";
import {GenreBadgeIcon} from "./GenreBadgeIcon";
import css from './GenreBadgeIcon.module.css'

const GenreBadges = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genres);


    useEffect(() => {
        dispatch(genreAction.getGenres())
    }, [dispatch])


    return (
        <div className={css.GenreBadgesFather}>
            <div className={css.GenreBadges}>{genres.map(genre => <GenreBadgeIcon key={genre.id} genre={genre}/>)}</div>
        </div>
    );
};

export {GenreBadges};