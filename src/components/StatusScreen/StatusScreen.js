import React from 'react';
import './statusScreen.css';

const StatusScreen = (props) => {

    return(
    <div className="statusBoard statusText">
        <div className="statusUnits">
            <div className="unit"><span className="fas fa-user unitIcon"></span><div className="description">Infantry</div><div className="unitCount">x10</div></div>
            <div className="unit"><span className="fas fa-shield-alt unitIcon"></span><div className="description">Tank</div><div className="unitCount">x13</div></div>
            <div className="unit"><span className="fas fa-binoculars unitIcon"></span><div className="description">Scout</div><div className="unitCount">x3</div></div>
            <div className="unit"><span className="fas fa-heart unitIcon"></span><div className="description">Medic</div><div className="unitCount">x2</div></div>
        </div>

        <div className="statusActions"></div>
    </div>
    ) 
    
}

export default StatusScreen;