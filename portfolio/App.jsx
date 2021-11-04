import React, { useState } from 'react';
import Flexiboi from './components/FlexiBoi/Flexiboi.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import { Page } from './styled/components.style.jsx';

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
