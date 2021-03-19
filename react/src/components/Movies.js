import { useState } from "react";
import { getMovie } from "../utils/movieService";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

import Movie from "./Movie";

const Movies = ({ title, actor }) => {
  const [movies, setMovies] = useState([]);

  const handleClick = async () => {
    const data = await getMovie();
    setMovies(data);
  };
  return (
    <>
      <button onClick={handleClick}>Søk</button>
      <StyledContainer>
        {movies?.length > 0
          ? movies.map((movie) => <Movie key={movie._id} {...movie} />)
          : null}
      </StyledContainer>
    </>
  );
};

export default Movies;
