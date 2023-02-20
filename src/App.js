import {Navigate, Route, Routes} from "react-router-dom";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {BaseLayout} from "./layouts";

const App = () => {
    return (

        <Routes>
            <Route path={'/'} element={<BaseLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                {/*<Route path={'home'} element={<HomePage/>}/>*/}
                {/*<Route path={'movie'} element={<MoviePage/>}/>*/}
                {/*<Route path={'user'} element={<UserPage/>}/>*/}
                {/*<Route path={'search'} element={<SearchPage/>}/>*/}
            </Route>
        </Routes>

    );
};

export {App};