import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewText } from "./Redux/state"
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = ( state ) => {
    ReactDOM.render(
        <BrowserRouter>    
          <React.StrictMode>
            <App state={ state } addPost={ addPost } updateNewText={ updateNewText } />
          </React.StrictMode>
        </BrowserRouter>  ,
          document.getElementById('root')
        );
}

