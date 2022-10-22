import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.item.imageUrl} alt="card-img"></img>
            <div className="card-head">
                <img className="map-icon" src="https://www.worth.com/wp-content/uploads/2017/09/map-marker-icon.png" alt="map-icon"></img>
                <span className="location">{props.item.location}</span>
                <a href={props.item.googleMapsUrl} className="g-map-link">View on Google Maps</a>
            </div>
            <h1 className="card-title">{props.item.title}</h1>
            <div className="card-body">
                <span className="startDate">{props.item.startDate} - </span>   
                <span className="endDate">{props.item.endDate}</span>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}