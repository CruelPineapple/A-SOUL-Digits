import './HoverBox.css'
import ava from '../../assets/1.webp'
import bella from '../../assets/2.webp'
import carol from '../../assets/3.webp'
import diana from '../../assets/4.webp'
import eileen from '../../assets/5.webp'
import React from 'react';

class HoverBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hiddenClass: "hide",
            bgColor: props.name,
        }

        this.handleEnter = this.handleEnter.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }
    get img(){
        switch (this.props.name) {
            case "ava":
                return ava
            case "bella":
                return bella;
            case "carol":
                return carol;
            case "diana":
                return diana;
            case "eileen":
                return eileen;
            default:
                return 0
        }
    }

    handleEnter(){
        this.setState({
            hiddenClass: "show"
        })
    }

    handleLeave(){
        this.setState({
            hiddenClass: "hide"
        })
    }

    render(){
        return (
            <div onMouseLeave={this.handleLeave} onMouseEnter={this.handleEnter} className="outer-box">
                <div className={this.state.hiddenClass+" "+this.state.bgColor}></div>
                <img className="image" src={this.img} alt=""></img>
            </div>
        );
    }
}

export default HoverBox;