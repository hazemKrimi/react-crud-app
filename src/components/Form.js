import styled from 'styled-components';

const Form = styled.form`
    background: ${props => props.mode ? '#373737' : '#F2F2F2'};
    color: ${props => props.mode ? 'white' : 'black'};
    display: grid;
    grid-template-columns: auto;
    row-gap: 1rem;
    width: 50%;
    padding: 3rem;
    text-align: center;

    @media(max-width: 768px) {
        row-gap: .5rem;
        width: 70%;
        padding: 1rem;
    }

    input {
        background: ${props => props.mode ? '#444444' : '#94E1F2'};
        color: ${props => props.mode ? 'white' : 'black'};
        border: none;
        box-sizing: border-box;
        padding: .5rem;
        width: 100%;
    }

    strong {
        color: red;
        font-weight: normal;
    }
`;

export default Form;