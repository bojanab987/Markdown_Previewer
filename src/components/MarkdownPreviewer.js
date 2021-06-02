import React from 'react';
import marked from 'marked';
marked.setOptions({
    breaks: true
  });
  
  // INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
  const renderer = new marked.Renderer();
  renderer.link = function(href, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

const MarkdownPreviewer = (props) => {
    return (
        <div
          dangerouslySetInnerHTML={{
            __html: marked(props.markdownInput, { renderer: renderer })
          }}
          id='preview'
        />
      );
    };

export default MarkdownPreviewer;
