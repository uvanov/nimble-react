// Package modules
import React from 'react';

import './styles/global.scss';

// Local modules
import Container from "./components/Container/Container";
import Welcome from "./components/Welcome/Welcome";
import { About } from "./components/About/About";

const App = () => {
    return (
        <Container>
            <Welcome/>
            <About/>
        </Container>
    );
};

export default App;
