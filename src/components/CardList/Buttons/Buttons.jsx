import './Buttons.scss'
import { useState, useEffect } from 'react';

function Buttons({onClick, selected, clear}){

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
    if (selected.length === 3) {
        setDisabled(false);
    } else {
        setDisabled(true);
    }
    }, [selected])

    return (
        <div className="buttons">
            <button className="buttons__button" onClick={clear}>Clear</button>
            <button className="buttons__button" disabled={disabled} onClick={onClick}>Submit</button>
        </div>
    )
}

export default Buttons;