
// class MarkdownEditor extends Component {
const MarkdownEditor=(props) =>{
    return (
        <div>
            <textarea className="input" id="editor" onChange={props.onChange} type="text"
            value={props.markdownInput}></textarea>
        </div>
        )
    
}

export default MarkdownEditor;