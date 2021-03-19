import styled from "styled-components";

const StyledBox = styled.div`
  display: block;
  color: #fff;
  line-height: 1.5;
  border: 2px solid #fff;
  margin: auto;
  margin-top: 20px;
  width: 20rem;
  height: 10rem;
`;

const StyledTitle = styled.h1`
  text-align: center;
`;

const StyledActor = styled.h3`
  text-align: center;
`;

const Movie = ({ title, actor }) => {
  return (
    <>
      <StyledBox>
        <StyledTitle>{title}</StyledTitle>
        <StyledActor>{actor}</StyledActor>
      </StyledBox>
    </>
  );
};

export default Movie;
