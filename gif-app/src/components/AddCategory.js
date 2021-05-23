import React, { useState } from 'react';

export const AddCategory = ( { setCategories } ) => { 

    const [inputValue, setinputValue] = useState('initialState')

    const handleInputChange = (e) => {
        
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            
            setCategories( cats => [ inputValue, ...cats ] );
    }
    
    return (
        <>  
            <form onSubmit={handleSubmit} >
                <input
                type="text"
                value={ inputValue}
                onChange={ handleInputChange }
                />
            </form>

        </>
    )
}
