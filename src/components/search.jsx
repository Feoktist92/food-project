import { useState } from 'react';

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleSumbit();
        }
    };
    const handleSumbit = () => {
        cb(value);
    };

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    placeholder='search'
                    id='search-field'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onKeyDown={handleKey}
                    onFocus={() => setValue('')}
                />
                <button
                    className='btn deep-orange lighten-1 black-text'
                    style={{ position: 'absolute', top: 0, right: '10px' }}
                    onClick={handleSumbit}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export { Search };
