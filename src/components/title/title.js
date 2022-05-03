import './title.css'

function Title(props){
    // 直接使用children，包含关系更加自然
    return <h1 className="title-component">{props.children}</h1>;
}

export default Title