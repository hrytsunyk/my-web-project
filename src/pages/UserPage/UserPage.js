import css from './UserPage.module.css';

const UserPage = () => {
    return (
        <div className={css.UserFather}>

            <div className={css.UserCard}>
                <div className={css.LeoFather}><img className={css.leo} src="https://photoschool.ua/images/bagallery/original/leonardo-dicaprio-by-marco-grob.jpg"
                        alt="leo"/></div>
                <h3>ARTEM DARIENKO</h3>

            </div>

        </div>
    );
};

export {UserPage};