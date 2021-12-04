import React from 'react';

import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import {Brand, Cta, Navbar} from './components';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
