import css from './GenreBadgeIcon.module.css'

const GenreBadgeIcon = ({genre}) => {

    const {name} = genre;

    console.log(name);

    return (
        <div className={css.BadgeIconFather}>
            <div className={css.BadgeIcon}>
                <h6>{name.toUpperCase()}</h6>
            </div>
        </div>
    );
};

export {GenreBadgeIcon};