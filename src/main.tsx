import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {registerGSAPPlugins} from "./utils/registerGSAP.ts";

registerGSAPPlugins();
ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
