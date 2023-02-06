import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 이게 있으면 랜더링 2번씩 됨...왜그를까..?^^;;
    //<React.StrictMode>
    <App />
    //</React.StrictMode>
);
