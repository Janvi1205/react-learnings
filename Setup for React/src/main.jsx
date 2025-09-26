
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// below line is telling react to render whatever present 
// in App to a div with id root in index.html
createRoot(document.getElementById('root')).render(
  
    <App />
  
)