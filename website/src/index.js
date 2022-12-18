import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from "react-router-dom";
import Markdown from "./components/Markdown";
import testMarkdown from "./assets/markdown/test.md";

// const router = createBrowserRouter([
//     {
//         "path": "/",
//         "element": <Markdown url={testMarkdown}/>,
//         "errorElement": <div>404</div>,
//     },
//     {
//         "path": "/test_2",
//         "element": <Markdown url={'test_2.md'}/>,
//     }
// ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
