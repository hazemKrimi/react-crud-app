import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const StyledDiv = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;

const POSTS = gql`
  {
    posts {
      _id
      title
      author
    }
  }
`;

const LandingPage = () => {
    const { loading, error, data } = useQuery(POSTS);
    
    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Error!</h2>

    return data.posts.map(({ title, author, _id }) => (
        <StyledDiv key={_id}>
            <h2>{title}</h2>
            <p>{author}</p>
        </StyledDiv>
    ));
};

export default LandingPage;