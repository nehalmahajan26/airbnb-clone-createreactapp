import React from "react"
export default function Card(props){
    return(
        <div className="card">
            {props.openspots===0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`/${props.img}`} className="card--image" alt="cardimg" />
            <div className="card--stats">
                <img src="/star.png" className="card--star" alt="cardstar"/>
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>From {props.price} / person</p>
        </div>
    )
}