import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import Genere from "./common/Genere";
import Pagination from "./common/Pagination";
import MoviesTable from "./MoviesTable";
import { paginate } from "./util/Paginate";
import _ from 'lodash';


export class Movies extends Component {
  state = {
    movies: [],
    generes: [],
    pageSize: 4,
    currentPage: 1,
    selectedItem: 1,
    sortColumn: {path: 'title', order: 'asc'}
  };
  componentDidMount() {
    const generes = [{ _id: "" ,name: "All generes" }, ...getGenres()];
    this.setState({ movies: getMovies(), generes });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleItemSelect = (item) => {
    this.setState({ selectedItem: item, currentPage: 1 });
  };
  handleSort = sortColumn =>
  {
   
    this.setState({sortColumn});
  }
 

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      generes,
      selectedItem,
      sortColumn
    } = this.state;
    if (count === 0) return <p>There are no movies in the database</p>;
    const filteredItem =
      selectedItem && selectedItem._id
        ? allMovies.filter((m) => m.genre._id === selectedItem._id)
        : allMovies;
    const sorted = _.orderBy(filteredItem, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-sm-12 col-md-3 ">
          <Genere
            items={generes}
            onItemSelect={this.handleItemSelect}
            selectedItem={selectedItem}
          />
        </div>
        <div className="col">
          <p>Showing {filteredItem.length} movies in the database</p>

          <MoviesTable
            movies = {movies}
            sortColumn = {sortColumn}
            onLike = {this.handleLike}
            onDelete = {this.handleDelete}
            onSort = {this.handleSort}
          />
          <Pagination
            itemCount={filteredItem.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
