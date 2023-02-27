import {Navigate, Route, Routes, useLocation} from "react-router-dom";


import {BaseLayout} from "./layouts";
import {HomePage, MovieInfoPage, MoviesPage, NotFoundPage, SearchPage, UserPage} from "./pages";
import {useEffect} from "react";


const App = () => {



    return (
        <Routes>
            <Route path={'/'} element={<BaseLayout/>}>

                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'search/:name'} element={<SearchPage/>}/>
                <Route path={'movie/:movieId'} element={<MovieInfoPage/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'user'} element={<UserPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
                
            </Route>
        </Routes>


    );
};

export {App};