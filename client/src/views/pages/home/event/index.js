import React from 'react'
import './event.scss'

const Event = props => {
    const { title, date, img } = props.event;

    return(
        <div className="event-item">
            <img src={img} />
            <h3>{title}</h3>
            <span>{date}</span>
        </div>
    );
}

export default Event;