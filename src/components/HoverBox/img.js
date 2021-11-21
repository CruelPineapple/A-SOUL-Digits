import imgAva from "../../assets/1.webp";
import imgBella from "../../assets/2.webp";
import imgCarol from "../../assets/3.webp";
import imgDiana from "../../assets/4.webp";
import imgEileen from "../../assets/5.webp";

const nameObj = {
    ava: imgAva,
    bella: imgBella,
    carol: imgCarol,
    diana: imgDiana,
    eileen: imgEileen,
  };

function MemberImg(props){
    return <img className="image" src={nameObj[props.name]} alt=""></img>
}

export default MemberImg