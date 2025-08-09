import React, {useState} from "react";

type OnOffPropsType = {
    // ok: boolean
}


export default function UncontrollOnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(false)

    const circleStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: on?'green':'red',
        marginLeft:'2px',
    }

    const onStyle = {
        width: "30px",
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
        display:'inline-block'
    }
    const ofStyle = {
        width: "30px",
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
        display:'inline-block'
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={ofStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={circleStyle}></div>
        </div>

    )
}