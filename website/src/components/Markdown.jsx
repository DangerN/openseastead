import React from "react";
import remarkGfm from 'remark-gfm'
import { useState } from 'react'
import ReactMarkdown from "react-markdown";
import {List, ListItem, ListItemText, Typography} from "@mui/material";


const components = {
    "h1": ({node, ...props}) => <Typography variant={'h1'} {...props}/>,
    "h2": ({node, ...props}) => <Typography variant={'h2'} {...props}/>,
    "h3": ({node, ...props}) => <Typography variant={'h3'} {...props}/>,
    "h4": ({node, ...props}) => <Typography variant={'h4'} {...props}/>,
    "h5": ({node, ...props}) => <Typography variant={'h5'} {...props}/>,
    "h6": ({node, ...props}) => <Typography variant={'h6'} {...props}/>,
    "p": ({node, ...props}) => <Typography variant={'body1'} {...props}/>,
    "ul": ({node, ...props}) => <List children={props.children}/>,
    "li": ({node, ...props}) => {
        // console.log(props)
        return <ListItem><ListItemText primary={props.children}/></ListItem>
    },
}

function Markdown({url}) {
    const [ text, setText ] = useState('')
    fetch(url).then(response => response.text()).then(text => setText(text))
    return <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} components={components}/>
}

export default Markdown
