import React from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
    padding: 1rem;
    background: lightblue;

    h2 {
        font-size: 20px;
        font-weight: 500;
    }
`;

const Nav = () => (
    <StyledNav>
        <h2>React CRUD App</h2>
    </StyledNav>
);

export default Nav;