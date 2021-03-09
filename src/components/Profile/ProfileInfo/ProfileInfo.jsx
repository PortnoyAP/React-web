import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfilInfo = (props) =>{
    return(
        <div>
             <div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRe5xJrGwCVXglXv9U0mxjA0ROxWeZlgQhyQ&usqp=CAU" />
              </div> 
              <div className={styles.description}>
                {props.text}
             </div>
        </div>
    );
}


export default ProfilInfo;