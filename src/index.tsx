import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// @ts-ignore Типы не умеют в createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
