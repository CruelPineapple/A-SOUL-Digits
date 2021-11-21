import HoverBox from "../HoverBox/HoverBox";
import React from "react";

function BoxList(props){
    const listItems = props.list.map((item) => 
        <HoverBox 
            key={item.name} 
            name={item.name} 
            info={item}
            />
    )
    return listItems
}

export default BoxList