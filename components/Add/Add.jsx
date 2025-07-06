import { useState } from 'react';
import './Add.css';

export const Add = () => {
    const [add, setAdd] = useState(0);

    return (
        <div className='add-container'>
            <h2>Sumador</h2>
            <h3>{add}</h3>

            <button onClick={() => {
                console.log("Sumar 1:", add);
                setAdd(add + 1);
            }}>Sumar 1</button>

            <button onClick={() => {
                console.log("Restar 1:", add);
                setAdd(add - 1);
            }}>Restar</button>
        </div>
    )
}