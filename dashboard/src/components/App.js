import "../assets/css/app.css";
import { ContentWrapper } from "./ContentWrapper/index";
import { SideBar } from "./SiderBar/index";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LastMovieInDB } from './LastMovieInDB';
import { ContentRowMovies } from './ContentRowMovies';
import GenresInDB from "./GenresInDB";
import { NotFound } from '../pages/NotFound/index';
import { Movies } from './Movie/index'
import SearchMovies from "../pages/SearchMovies";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <SideBar />
        <Switch>
          <Route path='/' exact>
            <ContentWrapper />
          </Route>
          <Route path="/genres" component={GenresInDB} />
          <Route path="/last-movie" component={LastMovieInDB} />
          <Route path="/content-row-movies" component={ContentRowMovies} />
          <Route path="/movies" component={Movies} />
          <Route path="/search-movies" component={SearchMovies} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;