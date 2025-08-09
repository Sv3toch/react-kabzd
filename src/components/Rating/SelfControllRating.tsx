import React, {useState} from "react";

type RatingPropsType = {
    // value: 1 | 2 | 3 | 4 | 5 | 0,
}

type StarPropsType = {
    selected: boolean,
}

export default function SelfControlRating(props: RatingPropsType) {

    const [value, setStar] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => {
                setStar(1)
            }}>1
            </button>
            <Star selected={value > 1}/>
            <button onClick={() => {
                setStar(2)
            }}>2
            </button>
            <Star selected={value > 2}/>
            <button onClick={() => {
                setStar(3)
            }}>3
            </button>
            <Star selected={value > 3}/>
            <button onClick={() => {
                setStar(4)
            }}>4
            </button>
            <Star selected={value > 4}/>
            <button onClick={() => {
                setStar(5)
            }}>5
            </button>
        </div>)


}


function Star(props: StarPropsType) {
    return (
        <span>
            {props.selected? <b>star</b>: 'star'}
        </span>
    )


}
