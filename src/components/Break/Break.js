import React from 'react';
import './Break.css'
const Break = () => {
    return (
        <div className='mt-5'>
           <h5>Add a break:</h5> 
           <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-primary rounded-circle ms-2">10m</button>
                <button type="button" class="btn btn-outline-primary rounded-circle ms-2">20m</button>
                <button type="button" class="btn btn-outline-primary rounded-circle ms-2">30m</button>
                <button type="button" class="btn btn-outline-primary rounded-circle ms-2">45m</button>
                <button type="button" class="btn btn-outline-primary rounded-circle ms-2">60m</button>
            </div>
        </div>
    );
};

export default Break;

