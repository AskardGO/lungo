import React, {useEffect} from 'react';
import { RouteProvider } from './components/Navigation/Navigation';

import './App.scss';
import {ThemeProvider} from "@mui/material";
import {theme} from "./utils/theme.ts";
import './utils/i18n.ts'

const App: React.FC = () => {

    return (
        <div className="App">
                <ThemeProvider key='theme-provider'  theme={theme}>
                    <RouteProvider/>
                </ThemeProvider>
        </div>
    );

}

export default App;
