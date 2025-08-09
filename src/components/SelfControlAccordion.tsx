import React, {useState} from "react";


type AccordionPropsType={
    titleValue:string,
   // collapsed:boolean,
}

type AccordionTitlePropsType={
    title:string,
}


function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed,setCollapsed]= useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
            <button onClick={()=>{setCollapsed(!collapsed)}}>Toogle</button>
        </div>
    )

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 >{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}



export default UncontrolledAccordion