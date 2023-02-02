import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App_movie.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
    //=> 이게 두번 감싸져 있으면 두번 랜더링 되더라,,,???
    <App />
    //</React.StrictMode>
);

/*
//console.log(parseInt());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
*/
