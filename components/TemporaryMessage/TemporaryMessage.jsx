import { useState } from 'react'
import './TemporaryMessage.css'

export const TemporaryMessage = () => {
    const [visible, setVisible] = useState(false);

    const showMessage = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    }

    return (
        <div className='temporarymessage-container'>
            <button onClick={showMessage}>Mostrar mensaje</button>
            {visible && <p className='message'>¡Esto es un mensaje temporal!</p>}
        </div>
    )
}