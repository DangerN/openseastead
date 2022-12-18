import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Markdown from "./components/Markdown";
// import CssBaseline from '@mui/material/CssBaseline';
import {Box} from "@mui/material";
import testMarkdown from './assets/markdown/test.md'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        "path": "/",
        "element": <Markdown url={testMarkdown}/>,
        "errorElement": <div>404</div>
    },
    {
        "path": "/test",
        "element": <Markdown url={'test_2.md'}/>,
    }
])

function App() {
    return (
    <div className="App">
        <Box>
            {/*<Markdown url={testMarkdown}/>*/}
            {/*<Markdown url={'test_2.md'}/>*/}
            <RouterProvider router={router}/>
        </Box>
    </div>
  );
}

export default App;
