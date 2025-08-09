import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrollOnOff from "./components/OnOff/UncontrollOnOff";
import SelfControlAccordion from "./components/SelfControlAccordion";
import SelfControlRating from "./components/Rating/SelfControllRating";
import Accordion from "./components/Accordion";
import OnOff from "./components/OnOff/OnOff";

type PageTitlePropsType = {
    title: string,
}

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState(false)

    return (
        <div className={'App'}>
            <PageTitle title={"This is APP component"}/>
            {/*<Rating value={2}/>*/}
            {/*<SelfControlAccordion titleValue={'Menu'}/>*/}
            {/*<SelfControlAccordion titleValue={'Title Menu'}/>*/}
            {/*<SelfControlRating/>*/}
            {/*<Rating value={0}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>

            <OnOff onClick={setOn} value={on}/>
            <UncontrollOnOff/>
        </div>
    );
}


function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
