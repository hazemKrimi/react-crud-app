import React from 'react';
import styled from 'styled-components';

const StyledPost = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid ${props => props.mode ? 'darkblue' : 'lightblue'};
  border-radius: 5px;
`;

const Post = () => {
    return ( 
        <StyledPost>Post</StyledPost>
    );
}
 
export default Post;