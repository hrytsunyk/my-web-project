import {Navigate, Route, Routes} from "react-router-dom";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {BaseLayout} from "./layouts";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {MovieInfoPage} from "./pages/MovieInfoPage/MovieInfoPage";

const App = () => {
    return (

        <Routes>
            <Route path={'/'} element={<BaseLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>

                <Route path={'movie/:movieId'} element={<MovieInfoPage/>}/>

                {/*<Route path={'home'} element={<HomePage/>}/>*/}
                {/*<Route path={'movie'} element={<MoviePage/>}/>*/}
                {/*<Route path={'user'} element={<UserPage/>}/>*/}
                {/*<Route path={'search'} element={<SearchPage/>}/>*/}
            </Route>
        </Routes>

    );
};

export {App};