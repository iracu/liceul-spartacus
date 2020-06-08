import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Header from './header/index'
import Pages from './pages/pages'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Pages />
            </BrowserRouter>
        );
    }
}

export default App;
