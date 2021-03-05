import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import Prism from "prism-react-renderer/prism"
import okaidia from "prism-react-renderer/themes/okaidia"
;(typeof global !== "undefined" ? global : window).Prism = Prism

require("prismjs/components/prism-java")

export default ({ children, className }) => {
  const language = className.replace(/language-/, "")

  return (
    <Highlight
      {...defaultProps}
      code={children}
      theme={okaidia}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
