import './HoverBox.css'
import imgAva from '../../assets/1.webp'
import imgBella from '../../assets/2.webp'
import imgCarol from '../../assets/3.webp'
import imgDiana from '../../assets/4.webp'
import imgEileen from '../../assets/5.webp'
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
        const nameObj={
            "ava": imgAva,
            "bella": imgBella,
            "carol": imgCarol,
            "diana": imgDiana,
            "eileen": imgEileen
        }
        return nameObj[this.props.name];
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