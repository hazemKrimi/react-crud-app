import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;    
    padding: 8px 16px;
    border: none;
    color: black;
    background: ${props => props.mode ? '#94E1F2' : '#94E1F2'};
`;

export default Button;