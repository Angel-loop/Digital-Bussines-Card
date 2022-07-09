import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App/App.js'
import './styles/mobile.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);