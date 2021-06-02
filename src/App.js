
import React from 'react';
import './App.scss';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import Titlebar from './components/Titlebar'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        markdownInput: inputText,
        editorMax:false,
        previewerMax:false,
    }
    this.updateMarkdownInput = this.updateMarkdownInput.bind(this);
    this.handleEditorMax = this.handleEditorMax.bind(this);
    this.handlePreviewerMax=this.handlePreviewerMax.bind(this);
}

  updateMarkdownInput = (event) => {
    this.setState({markdownInput:event.target.value});
  }

  handleEditorMax = () => {
    this.setState({editorMax: !this.state.editorMax})
  }

  handlePreviewerMax = () => {
    this.setState({previewerMax: !this.state.previewerMax})
  }

  render(){
    const containerClasses = this.state.editorMax ? ['editorView maximized', 'previewerView hidden', 'fas fa-compress-alt']
                            : this.state.previewerMax ? ['editorView hidden', 'previewerView maximized', 'fas fa-compress-alt']
                            : ['editorView', 'previewerView', 'fas fa-arrows-alt']
    return (
      <div className="App">
        <div className={containerClasses[0]}>
          <Titlebar icon={containerClasses[2]} onClick={this.handleEditorMax} text='Editor' />
          <MarkdownEditor markdownInput = {this.state.markdownInput} onChange={this.updateMarkdownInput} />                       
        </div>

        <div className={containerClasses[1]}>
          <Titlebar icon={containerClasses[2]} onClick={this.handlePreviewerMax} text='Previewer' />
          <MarkdownPreviewer markdownInput= {this.state.markdownInput}/>
        </div>     
      </div>
  );

}
  
}

export default App;

const inputText= `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
