import React, {useState} from "react";
import classes from "./LogoScreen.module.css";
import Logo from '../../assets/Logo.png'

const LogoScreen = () => {
    const [width, setWidth] = useState('0%')

    setTimeout(() => {
            setWidth('100%')
    }, 500);
  return (
    <div className={classes.logoScreen}>
      <img src={Logo} alt="" />
      <div className={classes.loadingBg}>
        <div className={classes.loadingCl} style={{width: width}}></div>
      </div>
    </div>
  );
};

export default LogoScreen;
