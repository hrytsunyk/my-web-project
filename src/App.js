import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {BaseLayout} from "./layouts";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {MovieInfoPage} from "./pages/MovieInfoPage/MovieInfoPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {useState} from "react";
import {SearchPage} from "./pages/SearchPage/SearchPage";
import {UserPage} from "./pages/UserPage/UserPage";

const App = () => {

    // const [theme, setTheme] = useState('dark');
    //
    // const switchTheme = () => {
    //     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
    // }
   const location = useLocation();

    return (


        <Routes>
            <Route path={'/'} element={<BaseLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>

                <Route path={'movies'} element={<MoviesPage/>}/>

                <Route path={'search/:name'} element={<SearchPage/>}/>

                <Route path={'movie/:movieId'} element={<MovieInfoPage/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'user'} element={<UserPage/>}/>

            </Route>
        </Routes>


    );
};

export {App};