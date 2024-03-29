import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root";
import Index from "./routes/Index";
import {createTheme, ThemeProvider} from "@mui/material";
import Contribute from "./routes/Contribute";
import About from "./routes/About";
import SeasteadModule from "./routes/SeasteadModule";
import SeasteadPlan from "./routes/SeasteadPlan";
import ModuleSafety from "./routes/module/ModuleSafety";
import ModuleIndex from "./routes/module/ModuleIndex";
import ModuleHabitation from "./routes/module/ModuleHabitation";
import ModuleEnergy from "./routes/module/ModuleEnergy";
import ModulePropulsion from "./routes/module/ModulePropulsion";
import PlanIndex from "./routes/plan/PlanIndex";
import PlanConstruction from "./routes/plan/PlanConstruction";
import PlanLaunch from "./routes/plan/PlanLaunch";
import PlanLocation from "./routes/plan/PlanLocation";
import ModuleMaterials from "./routes/module/ModuleMaterials";
import PlanSeaTrials from "./routes/plan/PlanSeaTrials";
import ModuleComputer from "./routes/module/ModuleComputer";
import PlanBusiness from "./routes/plan/PlanBusiness";
import ModuleDesign from "./routes/module/ModuleDesign";

const router = createBrowserRouter([
    {
        "path": "/",
        "element": <Root/>,
        "errorElement": <Root errorPage/>,
        "children": [
            {
                "path": "/contribute",
                "element": <Contribute/>,
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
                        "path": "design",
                        "element": <ModuleDesign />,
                    },
                    {
                        "path": "safety",
                        "element": <ModuleSafety />,
                    },
                    {
                        "path": "propulsion",
                        "element": <ModulePropulsion />,
                    },
                    {
                        "path": "energy",
                        "element": <ModuleEnergy />,
                    },
                    {
                        "path": "habitation",
                        "element": <ModuleHabitation />,
                    },
                    {
                        "path": "materials",
                        "element": <ModuleMaterials />,
                    },
                    {
                        "path": "onboard-computer",
                        "element": <ModuleComputer />,
                    },
                ]
            },
            {
                "path": "/the-plan",
                "element": <SeasteadPlan/>,
                "children": [
                    {
                        "index": true,
                        "element": <PlanIndex />,
                    },
                    {
                        "path": "construction",
                        "element": <PlanConstruction />,
                    },
                    {
                        "path": "launch",
                        "element": <PlanLaunch />,
                    },
                    {
                        "path": "sea-trials",
                        "element": <PlanSeaTrials />,
                    },
                    {
                        "path": "location",
                        "element": <PlanLocation />,
                    },
                    {
                        "path": "business",
                        "element": <PlanBusiness />,
                    },
                ]
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
        type: 'light',
        primary: {
            main: '#1f8680',
        },
        secondary: {
            main: '#861F25',
        },
    },
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
