import {Navigate, Route, Routes} from "react-router-dom";


import {BaseLayout} from "./layouts";
import {HomePage, MovieInfoPage, MoviesPage, NotFoundPage,
    SearchPage, SimilarGenresPage, UserPage} from "./pages";


const App = () => {



    return (
        <Routes>
            <Route path={'/'} element={<BaseLayout/>}>

                <Route index element={<Navigate to={'movies'}/>}/>

                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'search/:name'} element={<SearchPage/>}/>

                <Route path={'movie/:movieId'} element={<MovieInfoPage/>}/>
                <Route path={'genre/:with_genres'} element={<SimilarGenresPage/>}/>

                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'user'} element={<UserPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
                
            </Route>
        </Routes>


    );
};

export {App};