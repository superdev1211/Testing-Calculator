import React, {FunctionComponent, useState} from 'react';


import Display from '../Display/Display';
import Pad from '../Pad/Pad';
import {
    StyledApp
} from './App.styled';

// import Display from 'Display';



export const App: FunctionComponent = () => {
    return (
        <StyledApp>
            <Display />
            <Pad />
        </StyledApp>
    );
}

export default App;