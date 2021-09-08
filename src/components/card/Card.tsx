import React, { useState } from 'react';
import './card.scss';

// * Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

interface cardProps {
    title: string,
    body: string
}

const Card = (props: cardProps) => {
    const { title, body } = props;
    // * States
    let [isHover, setIsHover] = useState(false);

    const showEditIcon = () => setIsHover(!isHover);

    return <div className='card-body' onMouseEnter={showEditIcon} onMouseLeave={showEditIcon}>
        <header className='card-header' >
            <h3>{title}</h3>
            <FontAwesomeIcon aria-hidden='false' className={`${isHover ? 'show-icon' : undefined}`} icon={faEdit} />
        </header>
        <p>{body}</p>
    </div>;
}

export default Card;