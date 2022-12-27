import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root";
import Index from "./routes/Index";
import {createTheme, ThemeProvider} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
import Donate from "./routes/Donate";
import About from "./routes/About";
import SeasteadModule from "./routes/SeasteadModule";
import SeasteadPlan from "./routes/SeasteadPlan";
import ModuleSafety from "./routes/ModuleSafety";
import ModuleIndex from "./routes/ModuleIndex";

const router = createBrowserRouter([
    {
        "path": "/",
        "element": <Root/>,
        "errorElement": <Root errorPage/>,
        "children": [
            {
                "path": "/donate",
                "element": <Donate/>,
            },
            {
                "path": "/about",
                "element": <About/>,
            },
            {
                "path": "/the-module",
                "element": <SeasteadModule/>,
                "children": [
                    {
                        "index": true,
                        "element": <ModuleIndex />,
                    },
                    {
                        "path": "safety",
                        "element": <ModuleSafety />,
                    },
                ]
            },
            {
                "path": "/the-plan",
                "element": <SeasteadPlan/>,
            },
            {
                "index": true,
                "element": <Index/>,
            },
        ]
    },
])


const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[300]
        }
    }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <RouterProvider router={router}/>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
