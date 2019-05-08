import React, { Component } from 'react';
import axios from 'axios'
import Movie from './Movie'
import styled from 'styled-components'
class MovieList extends Component {
    state = { 
        movies : []
     }

   async  componentDidMount(){
         const res = await axios.get('https://tv-v2.api-fetch.website/movies/3?sort=trending&order=1&genre=documentary')
         this.setState ({
             movies : res.data
         })
     }
    render() { 
        const {movies} = this.state 
        return ( 
            <MovieGrid>
          {movies.map((movie)=> <Movie key={movie._id} movie={movie} /> )}
            </MovieGrid>
          );
    }
}
 
export default MovieList;

const MovieGrid = styled.div`
display : grid;
padding : 1rem;
grid-template-columns: repeat(6, 1fr);
grid-row-gap : 1rem
`