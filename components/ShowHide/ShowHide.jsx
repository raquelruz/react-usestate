import { useState } from 'react';
import './ShowHide.css';

export const ShowHide = () => {
    const [show, setShow] = useState(false);

    const toggleTexto = () => {
        setShow(!show);
    }

    return (
        <div className='showhide-container'>
            <h3>Mostrar / Ocultar Texto</h3>

            <button onClick={toggleTexto}>
                {show ? "Ocultar texto" : "Mostrar texto"}
            </button>

            {show && (
                <p className="hide-text">
                    Este es el texto que se muestra o se oculta al pulsar el botón
                </p>
            )}
        </div>
    )
}