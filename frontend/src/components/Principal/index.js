import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from '../Hero';
import FirstRowFeaturette from '../FirstRowFeaturette';
import SecondRowFeaturette from '../SecondRowFeaturette';

function Principal() {
    return (
        <>       
            <Hero />
            <FirstRowFeaturette />
            <SecondRowFeaturette />
        </>
    );
}

export default Principal;