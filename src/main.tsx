import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.js`;

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
