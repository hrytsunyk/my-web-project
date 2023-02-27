import css from './GenreBadgeIcon.module.css'

const GenreBadgeIcon = ({genre}) => {

    const {name} = genre;


    return (
            <div className={css.BadgeIcon}>
                <h6>{name}</h6>
            </div>
    );
};

export {GenreBadgeIcon};