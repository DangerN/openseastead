import React from "react";
import remarkGfm from 'remark-gfm'
import { useState } from 'react'
import ReactMarkdown from "react-markdown";

function Markdown({url}) {
    const [ text, setText ] = useState('')
    fetch(url).then(response => response.text()).then(text => setText(text))
    return <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
}

export default Markdown
