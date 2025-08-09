import React, {useState} from "react";


type AccordionPropsType={
    titleValue:string,
   // collapsed:boolean,
}

type AccordionTitlePropsType={
    title:string,
    collapsed:boolean,
    setCollapsed:(collapsed:boolean)=>void
}


function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed,setCollapsed]= useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={!collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>{props.setCollapsed(props.collapsed)}}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}



export default UncontrolledAccordion