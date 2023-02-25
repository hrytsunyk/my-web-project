import css from './UserPage.module.css';
import {Box, FormControlLabel, Switch, Zoom} from "@mui/material";

const UserPage = () => {
    return (
        <div className={css.UserFather}>
            {/*/!*<div className={css.UserCard}>*!/*/}
            {/*/!*</div>*!/*/}
            {/*<FormControlLabel*/}
            {/*    control={<Switch checked={checked} onLoad={handleChange} />}*/}
            {/*    label="Show"*/}
            {/*/>*/}
            {/*<Box sx={{ display: 'flex' }}>*/}
            {/*    <Zoom in={checked}>{icon}</Zoom>*/}
            {/*    <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>*/}
            {/*        <div className={css.UserCard}>*/}
            {/*        </div>*/}
            {/*    </Zoom>*/}
            {/*</Box>*/}
        </div>
    );
};

export {UserPage};