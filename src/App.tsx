import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import SelfControlAccordion from "./components/SelfControlAccordion";
import SelfControlRating from "./components/Rating/SelfControllRating";

type PageTitlePropsType = {
    title: string,
}

function App() {


    return (
        <div className={'App'}>
            <PageTitle title={"This is APP component"}/>
            <Rating value={2}/>
            <SelfControlAccordion titleValue={'Menu'}/>
            <SelfControlAccordion titleValue={'Title Menu'}/>
            <SelfControlRating/>
            <Rating value={0}/>
            <Rating value={1}/>


            <OnOff/>
        </div>
    );
}


function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
