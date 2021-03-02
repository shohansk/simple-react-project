import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Cart/PlayerInfo.css';

const PlayerInfo = (props) => {
    const {name,image ,salary} =props.players;
    const imageStyle = {height:'300px'};
    const playerStyle = {border:'1px solid black', margin:'100px',padding:'100x'};
    const handleAddPlayer = props.handleAddPlayer ;
    return (
        <div style={playerStyle}>
            <h4>{name}</h4>
            <img style={imageStyle} src={image} alt=""/>
            <p>salary : {salary}</p>
            <button className="button" onClick={ () => handleAddPlayer(props.players)}> <FontAwesomeIcon icon={faShoppingCart} /> select player</button>
        </div>
    );
};

export default PlayerInfo;