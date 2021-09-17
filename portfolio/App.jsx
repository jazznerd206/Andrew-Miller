import React, { useState, useEffect } from 'react'
import Flexiboi from './components/FlexiBoi/Flexiboi'
import Welcome from './components/Welcome/Welcome'
import { Page } from './styled/components.style'

function App() {
    const [ active, setActive ] = useState(false);


    return (
        <Page>
            <Welcome active={active} />
            <Flexiboi setActive={setActive} />
        </Page>
    )
}

export default App
