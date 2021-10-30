import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flexiboi from './components/FlexiBoi/Flexiboi';
import Welcome from './components/Welcome/Welcome';
import { Page } from './styled/components.style';

function App() {

    const [ active, setActive ] = useState(false);
    
    return (
        <Page data-testid="App">
            <Welcome active={active} />
            <Flexiboi setActive={setActive} />
        </Page>
    )
}

export default App
