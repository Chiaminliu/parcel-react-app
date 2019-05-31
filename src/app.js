import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Todo from './components/Todo';
import api from './api/base';
import Movie from "./api/movie";
import Product from "./components/Product";



class HelloMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      movies: []
    };
  }

  async componentDidMount() {
    const todos = await api.reloadTodoDatas();
    const movies = await Movie.requestMovieInfo()
    
    this.setState({
      todos,
      movies
    });
  }

  render() {
    const { todos } = this.state
    const { movies } = this.state
    
    return (
      <div>
        <Header/>
        {/* <Todo todos = {todos} /> */}
        <Product movies = {movies} />
        <div className="container">
            <h1>Hi {this.props.name}</h1>
        </div>
      </div>
    );
  }
}

const App = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Liuliu" />, App);