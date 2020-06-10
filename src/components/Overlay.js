import React from 'react';
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';

const StyledDiv = styled(animated.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .5);
    display: grid;
    justify-items: center;
    align-items: center;
`;

const Overlay = ({ children, form }) => {
    const transition = useTransition(form, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.gentle
    });

    return transition.map(({ item, key, props: { opacity } }) =>
        item && <StyledDiv key={key} style={{ opacity }}>
            {children}
        </StyledDiv>
    );
}

export default Overlay;