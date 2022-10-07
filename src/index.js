import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; 

// npm run both to start both react(port 3000) and express server(port 5000).

// npm run start for react server 
// npm run dev for starting express server

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
 