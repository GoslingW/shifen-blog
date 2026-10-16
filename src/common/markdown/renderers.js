import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { java, python, javascript, css, jsx } from "react-syntax-highlighter/dist/esm/languages/prism";


// markdown 代码高亮
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("java", java);
export const renderers = {
    // 仅当输入 ``` 时，该代码才会运行
    code: (({ language, value }) => {
        return (
            <SyntaxHighlighter
                style={codeStyle}
                language={language}
                // 如果输入为没有闭合的 ```，则 value 为 undefined
                children={value || ""}
                showLineNumbers={true}
                wrapLongLines={true}
            />
        );
    })
}