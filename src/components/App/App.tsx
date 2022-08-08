import React, {FunctionComponent, useState} from 'react';
import styled from 'styled-components';
import Display from '../Display/Display';
import Pad from '../Pad/Pad';
// import Display from 'Display';

const StyledApp = styled.div`
    font-family: -apple-system;
    font-size: 16px;
    widht: 100%;
    max-width: 320px
`




export const App: FunctionComponent = () => {
    return (
        <StyledApp>
            <Display />
            <Pad />
        </StyledApp>
    );
}

export default App;