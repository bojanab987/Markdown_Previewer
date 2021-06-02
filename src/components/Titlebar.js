const Titlebar = props => {
    return (
        <div className='titlebar'>
            <i className='fab fa-free-code-camp'></i>{props.text}
            <i className={props.icon} onClick={props.onClick}/>
        </div>
    )
}

export default Titlebar;