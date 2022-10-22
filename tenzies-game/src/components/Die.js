import React from "react";

export default function Die(props) {

    // const styles = {
    //     backgroundColor: props.isHeld ? "#59E391" : "white"
    // }

    return (
        <div onClick={props.holdDice} className={props.isHeld ? "die die-helded" : "die"}  /*style={styles}*/>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}